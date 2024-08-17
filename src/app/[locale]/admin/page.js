'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', src: '', link: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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
      const response = await fetch('/api/resources?source=github');
      if (!response.ok) {
        throw new Error('Failed to fetch resources');
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

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedResources = [...resources];
      updatedResources[index] = { ...updatedResources[index], [name]: value };
      setResources(updatedResources);
    } else {
      setNewResource({ ...newResource, [name]: value });
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  const handleCancel = (index) => {
    setEditingIndex(null);
  };

  const handleSave = async (index) => {
    let updatedResources = [...resources];
    if (index === -1) {
      updatedResources.push(newResource);
      setNewResource({ name: '', src: '', link: '' });
    }
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedResources),
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-4">
        <Link href="/admin/articles">
          <Button>Manage Articles</Button>
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Category Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Src</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resources.map((resource, index) => (
            <TableRow key={index}>
              <TableCell>
                {editingIndex === index ? (
                  <Input name="name" value={resource.name} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  resource.name
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  <Input name="src" value={resource.src} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  resource.src
                )}
              </TableCell>
              <TableCell>
                {editingIndex === index ? (
                  <Input name="link" value={resource.link} onChange={(e) => handleInputChange(e, index)} />
                ) : (
                  resource.link
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
              <Input name="src" value={newResource.src} onChange={handleInputChange} placeholder="New category src" />
            </TableCell>
            <TableCell>
              <Input name="link" value={newResource.link} onChange={handleInputChange} placeholder="New category link" />
            </TableCell>
            <TableCell>
              <Button onClick={() => handleSave(-1)}>Add New</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}