// category/page.tsx
import React from 'react'; // 确保导入 React
import { getCategories } from '@/lib/data';

import { CategoryList } from '@/components/ToolsList';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {getTranslations, getLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';


export async function generateMetadata() {
  const t = await getTranslations('category');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function Category() {
  const locale = await getLocale();
  // categories data
  const categories = getCategories(locale);
  console.log('categories: ', categories)

  const t = await getTranslations('category');

  return (
    <div className="container mx-auto py-12 space-y-16 min-h-screen">
      <section className="text-center space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t('categoryBtn')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
          <span className="">{t('h1')}</span>
        </h1>
        <h2 className="mx-auto max-w-[700px] opacity-60 md:text-xl">{t('h2')}</h2>
      </section>
      <CategoryList categories={categories} />
    </div>
  )
}