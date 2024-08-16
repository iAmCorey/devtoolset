// components/ArticleList.tsx
import React from 'react'; // 确保导入 React
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  // ArrowLeftIcon,
  ChevronRightIcon
} from "lucide-react";

// @ts-ignore
const ArticleList = ({ articles, showMoreLink = true }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        {showMoreLink && (
          <Link href="/article" className="text-blue-600 hover:text-blue-800 transition-colors">
            More articles →
          </Link>
        )}
      </div>
      <div className="space-y-6">
        {/* @ts-expect-error */}
        {articles.map(({ id, title, description }) => (
          <Card key={id}>
            <CardHeader>
              <Link 
                href={`/article/${id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='mr-1'>{title}</CardTitle>
                →
              </Link>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

// @ts-ignore
const ArticlePage = ({ articles }) => {
  return (
    <section>
      <div className="flex flex-col justify-between items-center mb-6">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight">
          <span className="text-primary pt-10">Article</span>
        </h1>
        <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl my-6">Read More About DevToolset</h2>
      </div>
      <div className="space-y-6">
        {/* @ts-expect-error */}
        {articles.map(({ id, title, description }) => (
          <Card key={id}>
            <CardHeader>
              <Link 
                href={`/article/${id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='mr-1'>{title}</CardTitle>
                →
              </Link>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}


export { ArticleList, ArticlePage }