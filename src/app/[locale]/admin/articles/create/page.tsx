'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function CreateArticlePage() {
  const [article, setArticle] = useState({ title: '', description: '', content: '', slug: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/articles/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create article');
      }

      router.push('/admin/articles');
    } catch (error) {
      console.error('Error creating article:', error);
      // @ts-ignore
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='my-6'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/articles">Articles</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
      {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
      <div className="space-y-4">
        <Input
          name="title"
          value={article.title}
          onChange={handleInputChange}
          placeholder="Article Title"
        />
        <Input
          name="description"
          value={article.description}
          onChange={handleInputChange}
          placeholder="Article Description"
        />
        <Input
          name="slug"
          value={article.slug}
          onChange={handleInputChange}
          placeholder="Article Slug (e.g., my-new-article)"
        />
        <Textarea
          name="content"
          value={article.content}
          onChange={handleInputChange}
          placeholder="Article Content (Markdown)"
          rows={20}
        />
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Article'}
        </Button>
      </div>
      <div className="my-8">
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}