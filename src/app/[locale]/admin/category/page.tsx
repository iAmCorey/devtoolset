'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from "@/lib/i18n";
import { Button } from "@/components/ui/button";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function CategoryPage() {
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
  }, [checkAuth]);

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
      <div className='mt-6'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/category">Category</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-6">Category Management</h1>
      <div className="mb-4 pb-8 border-b flex gap-4">
        <Link href="/admin/category/en">
          <Button>en</Button>
        </Link>
        <Link href="/admin/category/zh">
          <Button>zh</Button>
        </Link>
      </div>
      <div className="my-8">
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}