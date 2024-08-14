import React from 'react'; // 确保导入 React
import { ToolsPage } from '@/components/ToolsList'
import { getCategoryByLink } from '@/lib/data';
// import { Button } from '@/components/ui/button';
import Link from 'next/link'
import {
  // ArrowLeftIcon,
  ChevronRightIcon
} from "lucide-react";


export async function generateMetadata({ params: { category } }: CategoryPageProps) {
  return {
    title: category + '',
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
      <div>
        {/* Breadcrumb navigation */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRightIcon className="mx-2" size={16} />
          <span className="text-gray-900">{category}</span>
        </nav>
      </div>
      <ToolsPage category={categoryData} />
    </div>
  )
}