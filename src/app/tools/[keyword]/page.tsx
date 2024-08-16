import React from 'react'; // 确保导入 React
import { SearchPage } from '@/components/ToolsList'
import { searchDataByKeyword } from '@/lib/data';
// import { Button } from '@/components/ui/button';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export async function generateMetadata({ params: { keyword } }: CategoryPageProps) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return {
    title: capitalize(keyword) + ' Developer Tools',
    description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
  }
}

type CategoryPageProps = {
  params: {
    keyword: string;
  };
}

export default function Tool({ params: { keyword } }: CategoryPageProps) {
  const searchData = searchDataByKeyword(keyword)
  // console.log(searchData)

  return (
    <div className="container mx-auto py-12">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='capitalize'>{keyword}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight uppercase lg:text-5xl  pt-10">{keyword}</h1>
        <h2 className='text-sm mt-2 opacity-60 lg:text-lg'>All developer tools related to <span className='uppercase'>{keyword}</span></h2>
      </div>
      {searchData && <SearchPage searchData={searchData} />}
    </div>
  )
}