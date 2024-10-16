import { IconCalendar } from '@tabler/icons-react';
import { getPostBySlug, getAllPostSlugs, Post } from '../../../lib/posts';
import { Title, Text, Image } from '@mantine/core';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Generate the static parameters for the blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(); // Function that retrieves all post slugs

  return slugs.map((slug: any) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Image src={post.image} alt={post.title} />
      <Title order={2} mt="md">{post.title}</Title>
      <Text c="dimmed" size="md" style={{ display: 'flex', alignItems: 'center' }}>
        <IconCalendar style={{ marginRight: '5px' }} />
        {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(post.date))} | {post.author}
      </Text>
      {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
  </>);
}
