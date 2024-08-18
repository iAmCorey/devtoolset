import { getPostData } from '@/lib/posts';
import { Link } from "@/lib/i18n";
import { ArrowLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {getTranslations} from 'next-intl/server';

type PostParams = {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostParams) {
  const postData = await getPostData(params.slug);
  return {
    title: `${postData.title}`,
    description: postData.description || `Read about ${postData.title} on DevToolset`,
  };
}



export default async function Post({ params }: PostParams) {
  const postData = await getPostData(params.slug);
  const t = await getTranslations('article');

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t('homeBtn')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/article">{t('articleBtn')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='capitalize'>{postData.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Meta information card */}
      <div className="bg-gray-100 rounded-lg p-6 my-6">
        {postData.date && (
          <p className="text-gray-600 mb-2">{new Date(postData.date).toLocaleDateString()}</p>
        )}
        {postData.description && (
          <p className="text-gray-800">{postData.description}</p>
        )}
      </div>

      {/* Article content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      {/* Back to articles link */}
      <div className="mt-12">
        <Link href="/article" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={20} />
          {t('backToArticles')}
        </Link>
      </div>
    </article>
  );
}