// pages/index.js
import React from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'
import { Metadata } from 'next'

import { Search } from '@/components/Search';


export const metadata: Metadata = {
  title: 'DevToolset: Open-Source Database-free Developer Tools Navigator',
  description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
}

type categoryType = { 
  name: string; 
  src: string; 
  description: string;
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
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-7xl tracking-tighter">
          <span className="">Dev Toolset</span>
        </h1>
        <h2 className="text-2xl tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">Open-Source & Database-Free Developer Tools Navigator</h2>
        <p className="mx-auto max-w-[700px] md:text-xl tracking-tight">
          Find Every Essential Developer Tools for Your Development Journey
        </p>
        <div className='w-full px-2 pt-10 lg:w-1/2'>
          <Search />
        </div>
      </section>
      
      {categories.map((category: categoryType, index: React.Key | null | undefined) => (
        <ToolsList key={index} category={category} />
      ))}
      <div className='border-t'></div>
      <ArticleList articles={allPostsData} />
    </div>
  )
}