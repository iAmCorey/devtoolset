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
import {getTranslations} from 'next-intl/server';
import {useTranslations} from 'next-intl';

export async function generateMetadata() {
  const t = await getTranslations('article');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}


export default function Articles() {
  const allPostsData = getSortedPostsData();
  const t = useTranslations('article');

  return (
    <div className="container mx-auto py-12">
      <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t('articleBtn')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col justify-between items-center mb-6">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight">
            <span className="pt-10">{t('h1')}</span>
          </h1>
          <h2 className="mx-auto max-w-[700px] opacity-60 md:text-xl my-6">{t('h2')}</h2>
        </div>
      <ArticlePage articles={allPostsData} />
    </div>
  )
}

