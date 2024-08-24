'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type CategoryPageProps = {
  params: {
    cateLocale: string;
    src: string;
  };
}

export default function CategoryLocalePage({ params: { cateLocale, src } }: CategoryPageProps) {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', description: '', url: '', icon_url: '', tags: [] });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/check-auth');
      const data = await response.json();
      if (!data.isLoggedIn) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      setError('Failed to authenticate. Please try again.');
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkAuth();
    fetchResources();
  }, [checkAuth]);

  const fetchResources = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/getSrc?source=github&locale=' + cateLocale + '&src=' + src);
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      const data = await response.json();
      console.log('get resources: ', data)
      setResources(data);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setError('Failed to fetch resources. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // @ts-ignore
  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedResources = [...resources];
      // @ts-ignore
      updatedResources[index] = { ...updatedResources[index], [name]: value };
      setResources(updatedResources);
    } else {
      setNewResource({ ...newResource, [name]: value });
    }
  };

  // @ts-ignore
  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  // @ts-ignore
  const handleCancel = (index) => {
    setEditingIndex(null);
  };
// @ts-ignore
  const handleSave = async (index) => {
    // @ts-ignore
    let updatedResources = [...resources];
    if (index === -1) {
      // @ts-ignore
      updatedResources.push(newResource);
      setNewResource({ name: '', description: '', url: '', icon_url: '', tags: [] });
    }
    const req = {
      resources: JSON.stringify(updatedResources),
      locale: cateLocale,
      src: src
    }
    try {
      const response = await fetch('/api/getSrc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      });
      if (!response.ok) {
        throw new Error('Failed to save resources');
      }
      await fetchResources(); // Fetch the latest data after saving
      setEditingIndex(null);
    } catch (error) {
      console.error('Error saving resources:', error);
      setError('Failed to save resources. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error}</div>;
  }


  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }

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
              <BreadcrumbLink href="/admin/category">Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/admin/category/${cateLocale}`}>{cateLocale}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/admin/category/${cateLocale}/${src}`}>{src}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-2xl font-bold mb-4">Resource Management</h1>
      <h2 className="text-xl font-bold mb-4">Locale: {cateLocale}</h2>
      <h2 className="text-xl font-bold mb-4">Src: {src}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>ICON_URL</TableHead>
            <TableHead>tags</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resources.map((resource, index) => (
            <TableRow key={index}>
              <TableCell className='w-fit w-max-[200px]'>
                {editingIndex === index ? (
                  // @ts-ignore
                  <Input name="name" value={resource.name} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  // @ts-ignore
                  resource.name
                )}
              </TableCell>
              <TableCell className='w-fit max-w-1/3'>
                {editingIndex === index ? (
                  // @ts-ignore
                  <Input name="description" value={resource.description} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  // @ts-ignore
                  resource.description
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  // @ts-ignore
                  <Input name="url" value={resource.url} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  // @ts-ignore
                  resource.url
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  // @ts-ignore
                  <Input name="icon_url" value={resource.icon_url} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  // @ts-ignore
                  resource.icon_url
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  // @ts-ignore
                  <Input name="tags" value={resource.tags} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  // @ts-ignore
                  resource.tags.toString()
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  <div >
                    <Button size="sm" className='mr-4' onClick={() => handleCancel(index)}>Cancel</Button>
                    <Button size="sm" onClick={() => handleSave(index)}>Save</Button>
                  </div>
                ) : (
                  <Button onClick={() => handleEdit(index)}>Edit</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <Input name="name" value={newResource.name} onChange={handleInputChange} placeholder="New category name" />
            </TableCell>
            <TableCell>
              <Input name="description" value={newResource.description} onChange={handleInputChange} placeholder="New category description" />
            </TableCell>
            <TableCell>
              <Input name="url" value={newResource.url} onChange={handleInputChange} placeholder="New category url" />
            </TableCell>
            <TableCell>
              <Input name="icon_url" value={newResource.icon_url} onChange={handleInputChange} placeholder="New category icon_url(Optional)" />
            </TableCell>
            <TableCell>
              <Input name="tags" value={newResource.tags} onChange={handleInputChange} placeholder="New category tags(Optional)" />
            </TableCell>
            <TableCell>
              <Button onClick={() => handleSave(-1)}>Add New</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="my-8">
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}