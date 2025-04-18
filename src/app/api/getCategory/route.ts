import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Octokit } from '@octokit/rest';
import * as jsonc from 'jsonc-parser';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;

const githubBasePath = 'data/json/';
const categoryPath = '/tools/category.jsonc';

async function getCategoryFromGitHub(locale: string) {
  try {
    const { data } = await octokit.repos.getContent({
      owner: owner ?? '',
      repo: repo ?? '',
      path: githubBasePath + locale + categoryPath,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content = Buffer.from((data as any).content, 'base64').toString('utf8');
    const json = jsonc.parse(content);
    if (typeof json === 'string') {
      // 如果解析后仍是字符串，可能需要二次解析
      try {
          return jsonc.parse(json);
      } catch (error) {
          console.error('二次解析失败:', error);
          return json; // 如果二次解析失败，返回原始解析结果
      }
    }
    return json;
  } catch (error) {
    console.error('Error fetching resources from GitHub:', error);
    throw error;
  }
}

function getCategoryFromLocal(locale: string) {
  const localPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc');
  return jsonc.parse(fs.readFileSync(localPath, 'utf8'));
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source');
  const locale = searchParams.get('locale') ?? 'en';

  if (source === 'github') {
    try {
      const resources = await getCategoryFromGitHub(locale);
      return NextResponse.json(resources);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch resources from GitHub' }, { status: 500 });
    }
  } else {
    // Default to local file for homepage
    const resources = getCategoryFromLocal(locale);
    return NextResponse.json(resources);
  }
}

export async function POST(req: Request) {
  const { resources, locale } = await req.json();
  // const updatedResources = await req.json();

  try {
    const { data: currentFile } = await octokit.repos.getContent({
      owner: owner ?? '',
      repo: repo ?? '',
      path: githubBasePath + locale + categoryPath,
    });

    await octokit.repos.createOrUpdateFileContents({
      owner: owner ?? '',
      repo: repo ?? '',
      path: githubBasePath + locale + categoryPath,
      message: 'Update category',
      content: Buffer.from(JSON.stringify(resources, null, 2)).toString('base64'),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sha: (currentFile as any).sha,
    });

    // Update local file as well
    fs.writeFileSync(path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc'), JSON.stringify(resources, null, 2));

    return NextResponse.json(resources);
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}