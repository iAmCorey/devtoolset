import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import matter from 'gray-matter';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const owner = process.env.GITHUB_OWNER || '';
const repo = process.env.GITHUB_REPO || '';
const articlesJsonPath = 'data/json/articles.json';
const mdFolderPath = 'data/md';

type ArticleData = {
  title: string;
  description: string;
  content: string;
  slug: string;
};

type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  lastModified: string;
  path: string;
};

interface RepoFile {
  type: string;
  size: number;
  name: string;
  path: string;
  content?: string;
  sha: string;
  url: string;
}

export async function POST(request: Request) {
  const { title, description, content, slug }: ArticleData = await request.json();

  // Validate slug
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return NextResponse.json({ error: 'Invalid slug format' }, { status: 400 });
  }

  const path = `data/md/${slug}.md`;

  try {
    // Check if file already exists
    try {
      await octokit.repos.getContent({
        owner,
        repo,
        path,
      });
      return NextResponse.json({ error: 'Article with this slug already exists' }, { status: 400 });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'status' in error && error.status !== 404) {
        throw error;
      }
    }

    // Create new file
    const fileContent = matter.stringify(content, {
      title,
      description,
      date: new Date().toISOString(),
    });

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Create new article: ${title}`,
      content: Buffer.from(fileContent).toString('base64'),
    });

    // Sync articles
    await syncArticles();

    return NextResponse.json({ message: 'Article created successfully' });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

async function syncArticles(): Promise<void> {
  try {
    // Fetch all MD files
    const { data: dirContent } = await octokit.repos.getContent({
      owner,
      repo,
      path: mdFolderPath,
    });

    // 确保我们处理的是数组
    const files = Array.isArray(dirContent) ? dirContent : [dirContent];
    const mdFiles = files.filter((file: RepoFile) => file.name.endsWith('.md'));

    const articles: ArticleMeta[] = await Promise.all(mdFiles.map(async (file: RepoFile) => {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: file.path,
      });

      // 确保data有content属性
      if (!('content' in data)) {
        throw new Error(`No content found in file: ${file.path}`);
      }

      const fileData = data as RepoFile & { content: string };
      const content = Buffer.from(fileData.content, 'base64').toString('utf8');
      const { data: frontMatter } = matter(content);

      // Fetch the last commit for this file
      let lastModified = file.sha;
      try {
        const { data: commits } = await octokit.repos.listCommits({
          owner,
          repo,
          path: file.path,
          per_page: 1
        });
        
        if (commits.length > 0 && commits[0].commit?.committer?.date) {
          lastModified = commits[0].commit.committer.date;
        }
      } catch (error) {
        console.error(`Failed to get commit history for ${file.path}, using file SHA instead:`, error);
      }

      return {
        title: frontMatter.title,
        description: frontMatter.description,
        date: frontMatter.date,
        lastModified: lastModified,
        path: file.path,
      };
    }));

    // Update articles.json
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path: articlesJsonPath,
    });

    // 确保currentFile有sha属性
    if (!('sha' in currentFile)) {
      throw new Error('No sha found in articles.json');
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: articlesJsonPath,
      message: 'Sync articles',
      content: Buffer.from(JSON.stringify(articles, null, 2)).toString('base64'),
      sha: (currentFile as RepoFile).sha,
    });

  } catch (error) {
    console.error('Error syncing articles:', error);
    throw error;
  }
} 