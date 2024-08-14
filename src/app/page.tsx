// pages/index.js
import React from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevToolset - Open Source Developer Tools Navigator Without Database',
  description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
}

type categoryType = { 
  name: string; 
  src: string; 
  link: string; 
}


export default function Home() {
  // categories data
  const categories = getCategories();
  console.log('categories: ', categories)

  const allPostsData = getSortedPostsData().slice(0, 6)
  
  // deployment

  return (
    <div className="container mx-auto py-12 space-y-16 ">
      <section className="text-center space-y-4">
      <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-7xl tracking-tight">
            <span className="text-primary">Dev Toolset</span>
          </h1>
        <h2 className="text-2xl tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">Open Source Developer Tools Navigator Without Database</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Explore Every Essential Tool for Your Development Journey
        </p>
      </section>
      {categories.map((category: categoryType, index: React.Key | null | undefined) => (
        <ToolsList key={index} category={category} />
      ))}
      <div className='border-t'></div>
      <ArticleList articles={allPostsData} />
    </div>
  )
}