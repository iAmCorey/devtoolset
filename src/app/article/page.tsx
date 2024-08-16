import { ArticlePage } from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: 'Articles',
  description: 'Read our latest articles on newest developer tools and best practices.',
};

export default function Articles() {
  const allPostsData = getSortedPostsData();


  return (
    <div className="container mx-auto py-12">
      <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Article</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      <ArticlePage articles={allPostsData} />
    </div>
  )
}

