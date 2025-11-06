import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import { Blog } from '@/types'

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
  console.log(filePath);

  if (!fs.existsSync(filePath)) return notFound()

  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  const { content, data } = matter(fileContent)
  //data is the metadata of the blog post & content is the actual mdx content

  return (
    <div className="prose dark:prose-invert container max-w-7xl mx-auto px-4">
      <article className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        {data.tags && (
          <div>
            {data.tags.map((tag: string) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
