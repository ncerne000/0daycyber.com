import { getPosts, Post } from '../../lib/posts';
import Link from 'next/link';
import { Container, Title, Text, Image, Divider, Stack, Anchor } from '@mantine/core';
import { IconCalendar } from "@tabler/icons-react";

export default async function Blog() {
  let posts: Post[] = getPosts();
  posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (<>
      <Title order={2} mt="md">Blog</Title>
      <Divider w="100%" pb={"lg"}></Divider>
      <Stack gap={"32px"}>
      {posts.map((post) => (
        <div key={post.slug}>
          <Image src={post.image} alt={post.title} />
          {post.external ? (
            <Anchor href={post.external} target='_blank' rel='noopener noreferrer' underline='never'>
              <Title order={3}>{post.title}</Title>
            </Anchor>
          ) : (
            <Anchor href={`/blog/${post.slug}`} underline='never'>
              <Title order={3}>{post.title}</Title>
            </Anchor>
          )}
          <Text c="dimmed" size="md" style={{ display: 'flex', alignItems: 'center' }}>
            <IconCalendar style={{ marginRight: '5px' }} />
            {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(post.date))} | {post.author}
          </Text>
          <Text>{post.summary}</Text>
        </div>
      ))}</Stack>
  </>);
}