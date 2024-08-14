// components/ArticleList.js
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

// @ts-ignore
export default function ArticleList({ articles, showMoreLink = true }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        {showMoreLink && (
          <Link href="/posts" className="text-blue-600 hover:text-blue-800 transition-colors">
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
                href={`/posts/${id}`}
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