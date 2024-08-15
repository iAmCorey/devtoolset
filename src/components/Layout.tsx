// components/Layout.tsx
import React from 'react'; // 确保导入 React
import { Navigation } from './Navigation'
import { Footer } from '@/components/Footer'
import { getCategories } from '@/lib/data';

// @ts-expect-error
export function Layout({ children }) {
  // categories data
  const categories: { name: string, src: string, description: string, link: string }[] = getCategories();

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation categories={categories}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}