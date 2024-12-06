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
import {getTranslations, getLocale} from 'next-intl/server';

export async function generateMetadata({ params: { keyword } }: CategoryPageProps) {
  const t = await getTranslations('tools');

  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const decodeKeyword = decodeURIComponent(keyword)

  return {
    title: capitalize(decodeKeyword) + ' Developer Tools',
    description: t('meta_description')
  }
}

type CategoryPageProps = {
  params: {
    keyword: string;
  };
}

export default async function Tool({ params: { keyword } }: CategoryPageProps) {
  const decodeKeyword = decodeURIComponent(keyword)

  const locale = await getLocale();
  const searchData = searchDataByKeyword(decodeKeyword, locale)
  const t = await getTranslations('tools');

  return (
    <div className="container mx-auto py-12">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='capitalize'>{decodeKeyword}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight uppercase lg:text-5xl  pt-10">{decodeKeyword}</h1>
        <h2 className='text-sm mt-2 opacity-60 lg:text-lg'>{t('h2_1')} <span className='uppercase'>{decodeKeyword}</span>{t('h2_2')}</h2>
      </div>
      {searchData && <SearchPage searchData={searchData} />}
    </div>
  )
}