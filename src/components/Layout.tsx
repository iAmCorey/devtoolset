// components/Layout.tsx
import React from 'react'; // 确保导入 React
import { Navigation } from './Navigation'
import { Footer } from '@/components/Footer'
import { getCategories } from '@/lib/data';
import { getLocale } from 'next-intl/server';

// @ts-expect-error
export async function Layout({ children }) {
  const locale = await getLocale();
  // categories data
  const categories: { name: string, src: string, description: string, link: string }[] = getCategories(locale);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation categories={categories}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}