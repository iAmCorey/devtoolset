import React from 'react'; // 确保导入 React
import { ToolsPage } from '@/components/ToolsList'
import { getCategoryByLink } from '@/lib/data';
// import { Button } from '@/components/ui/button';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export async function generateMetadata({ params: { category } }: CategoryPageProps) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return {
    title: capitalize(category) + ' Developer Tools',
    description: 'Explore Every Essential Developer Tools You Need For Your Development Journey',
  }
}

type CategoryPageProps = {
  params: {
    category: string;
  };
}

export default function Tool({ params: { category } }: CategoryPageProps) {
  const categoryData = getCategoryByLink(category)

  return (
    <div className="container mx-auto py-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='capitalize'>{category}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ToolsPage category={categoryData} />
    </div>
  )
}