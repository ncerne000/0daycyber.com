import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  content?: string;
  external?: string;
}

export const getPosts = (): Post[] => {
  const files = fs.readdirSync(path.join('blog'));

  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('blog', filename), 'utf-8');
    const { data: metadata, content } = matter(markdownWithMeta);

    return {
      slug: filename.replace('.md', ''),
      title: metadata.title,
      date: metadata.date,
      author: metadata.author,
      summary: metadata.summary,
      image: metadata.image,
      content: metadata.external ? undefined : content,
      external: metadata.external,
    } as Post;
  });
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const filePath = path.join('blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: metadata, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    author: metadata.author,
    summary: metadata.summary,
    image: metadata.image,
    content: metadata.external ? undefined : contentHtml,
    external: metadata.external,
  };
};

export async function getAllPostSlugs() {
  const posts = await getPosts();
  return posts.map((post) => post.slug);
}
