// components/ResourceList.tsx
import React from 'react'; // 确保导入 React
import { Link } from "@/lib/i18n";
import { ExternalLink, ArrowRightIcon } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";

import { getDataList } from '@/lib/data';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Favicon } from "favicon-stealer";
import { CategoryListProps, CategoryProps, type ToolProps, type ToolsListProps } from '@/lib/type';




const ToolsList = ({ category, locale, showMoreLink = true }: ToolsListProps) => {
  const t = useTranslations('toolsList');
  const srcList = getDataList(category.src, locale)

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight capitalize">{category.name}</h2>
        {showMoreLink && (
          <Link href={`/category/${category.link}`} className="capitalize text-blue-600 hover:text-blue-800 transition-colors hover:underline">
            {t('more')} <span className='capitalize font-bold'>{category.name}</span> {t('tools')} →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {srcList.slice(0,8).map((resource: ToolProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 '>
            <CardHeader>
              <a 
                href={`${resource.url}?utm_source=devtoolset.net`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='border border-gray-200 p-1 rounded-md mr-1 bg-white'>
                  {/* <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} /> */}
                  { resource.icon_url ?
                    // <img width="20" height="20" src={resource.icon_url}  alt={`${resource.name} favicon`} />
                    <Image width={20} height={20} src={resource.icon_url}  alt={`${resource.name} favicon`} loading='lazy'/>
                    :
                    <Favicon url={resource.url} size={24} lazy={true} />
                    // <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} loading='lazy'/>
                  }
                </div>
                <CardTitle className='capitalize tracking-tighter'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1 tracking-tight text-start'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                    {resource.tags.slice(0,3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className='text-xs pb-1 mr-1 mt-2 tracking-tighter'>{tag}</Badge>
                    ))}
                  </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

const ToolsPage = ({ category, locale }: { category: CategoryProps, locale: string }) => {
  const srcList = getDataList(category.src, locale);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {srcList.map((resource: ToolProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`${resource.url}?utm_source=devtoolset.net`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='border border-gray-200 p-1 rounded-md mr-1 bg-white'>
                  {/* <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} /> */}
                  { resource.icon_url ?
                    <Image width={20} height={20} src={resource.icon_url}  alt={`${resource.name} favicon`} loading='lazy'/>
                    :
                    <Favicon url={resource.url} size={24} lazy={true} />
                    // <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} loading='lazy'/>
                  }
                </div>
                <CardTitle className='capitalize tracking-tighter'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1 tracking-tight text-start'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                  {resource.tags.slice(0,3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className='text-xs pb-1 mr-1 mt-2 tracking-tighter'>{tag}</Badge>
                  ))}
                </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

type searchPageProps = {
  searchData: ToolProps[]
}

const SearchPage = ({ searchData }: searchPageProps) => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {searchData.map((resource: ToolProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`${resource.url}?utm_source=devtoolset.net`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='border border-gray-200 p-1 rounded-md mr-1 bg-white'>
                  {/* <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} /> */}
                  { resource.icon_url ?
                    <Image width={20} height={20} src={resource.icon_url}  alt={`${resource.name} favicon`} loading='lazy'/>
                    :
                    <Favicon url={resource.url} size={24} lazy={true} />
                    // <img width="20" height="20" src={`https://favicon.im/${resource.url}?larger=true`} alt={`${resource.name} favicon`} loading='lazy'/>
                  }
                </div>
                <CardTitle className='capitalize tracking-tighter'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1 tracking-tight text-start'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                  {resource.tags.slice(0,3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className='text-xs pb-1 mr-1 mt-2 tracking-tighter'>{tag}</Badge>
                  ))}
                </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}


const CategoryList = ({ categories }: CategoryListProps) => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category: CategoryProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`/category/${category.link}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='capitalize'>{category.name}</CardTitle>
                <ArrowRightIcon size={16} className='ml-2'/>
              </a>
              <CardDescription className='flex flex-col justify-between'>
                <div className='h-[40px] line-clamp-2 mt-4 tracking-tight text-start'>
                {category.description}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { ToolsList, ToolsPage, CategoryList, SearchPage };