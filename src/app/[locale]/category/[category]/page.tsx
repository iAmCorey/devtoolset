import React from 'react'; // 确保导入 React
import { ToolsPage } from '@/components/ToolsList'
import { getCategoryByLink } from '@/lib/data';
import { notFound } from 'next/navigation';
// import { Button } from '@/components/ui/button';

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

export async function generateMetadata({ params: { category } }: CategoryPageProps) {
  const t = await getTranslations('category');

  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return {
    title: capitalize(category) + ' Developer Tools',
    description: t('meta_description'),
  }
}

type CategoryPageProps = {
  params: {
    category: string;
  };
}

export default async function Tool({ params: { category } }: CategoryPageProps) {
  const locale = await getLocale();
  const categoryData = getCategoryByLink(category, locale);
  const t = await getTranslations('category');

  if (!categoryData) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">{t('categoryBtn')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='capitalize'>{categoryData.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight capitalize lg:text-5xl pt-10">{categoryData.name}</h1>
        <h2 className="text-md mt-2 opacity-60 lg:text-xl">{categoryData.description}</h2>
        
      </div>
      <ToolsPage category={categoryData} locale={locale} />
      <div className="flex flex-col justify-between items-center mt-12">
        <h2 className='text-sm mt-2 opacity-60 lg:text-md'>{t('h2description')}</h2>
      </div>
    </div>
  )
}