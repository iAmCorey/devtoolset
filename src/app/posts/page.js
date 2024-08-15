import { ArticlePage } from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: 'Articles',
  description: 'Read our latest articles on newest developer tools and best practices.',
};

export default function Articles() {
  const allPostsData = getSortedPostsData();


  return (
    <div className="container mx-auto py-12">
      <ArticlePage articles={allPostsData} />
    </div>
  )
}

