// components/ArticleList.tsx
import React from 'react'; // 确保导入 React
import { Link } from "@/lib/i18n";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { useTranslations } from 'next-intl';

// @ts-ignore
const ArticleList = ({ articles, showMoreLink = true }) => {
  const t = useTranslations('articleList');
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{t('h2')}</h2>
        {showMoreLink && (
          <Link href="/article" className="text-blue-600 hover:text-blue-800 transition-colors">
            {t('moreArticles')} →
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