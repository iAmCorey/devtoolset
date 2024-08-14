// pages/index.js
import React from 'react'; // 确保导入 React
import { getCategories } from '@/lib/data';

import { CategoryList } from '@/components/ToolsList';

export async function generateMetadata() {
  return {
    title: 'Categories',
    description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
  }
}

export default function Category() {
  // categories data
  const categories = getCategories();
  console.log('categories: ', categories)

  
  // deployment

  return (
    <div className="container mx-auto py-12 space-y-16 min-h-screen">
      <section className="text-center space-y-4">
      <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight">
            <span className="text-primary">Develop Tools Category</span>
          </h1>
        <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Find Every Developer Tools You Need Here</h2>
      </section>
      <CategoryList />
    </div>
  )
}