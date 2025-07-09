import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
  category: string
}

export type BlogListType = {
  [category: string]: BlogType[];
};

async function importBlog(
  filePath: string,
): Promise<BlogType> {
  const [category,blogFilename] = filePath.split('/');
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog', filePath),
    'utf-8'
  )
  
  const { data } = matter(source)
  
  // @ts-expect-error
  
  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    ...data,
    category,
  }
}

export async function getAllBlogs(): Promise<BlogListType> {
  const blogFilePaths = await glob('**/*.mdx', {
    cwd: './src/content/blog',
  });
  const blogs = await Promise.all(blogFilePaths.map(importBlog));

  return blogs.reduce<BlogListType>((acc, blog) => {
      if (!acc[blog.category]) {
        acc[blog.category] = [];
      }
      acc[blog.category].push(blog);
      acc[blog.category].sort((a, z) => 
        new Date(z.date).getTime() - new Date(a.date).getTime()
      );
    return acc;
  }, {});
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}