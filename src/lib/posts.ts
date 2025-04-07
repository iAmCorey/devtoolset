import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import process from 'process'

const postsDirectory = path.join(process.cwd(), 'data', 'md')

interface PostData {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface PostWithHtml extends PostData {
  contentHtml: string;
  slug?: string;
}

interface MatterResultData {
  title: string;
  description: string;
  date: string;
  [key: string]: unknown;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /data/md
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug: string): Promise<PostWithHtml> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const matterData = matterResult.data as MatterResultData;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    slug,
    contentHtml,
    title: matterData.title,
    description: matterData.description,
    date: matterData.date,
  };
}

export async function getPostData2(id: string): Promise<PostWithHtml> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const matterData = matterResult.data as MatterResultData;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterData.title,
    description: matterData.description,
    date: matterData.date
  }
} 