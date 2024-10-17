// @ts-nocheck
import { getPosts, Post } from '../../lib/posts';
import { Grid, GridCol, Title, Text, Image, Divider, Stack, Anchor, Card, CardSection, Flex } from '@mantine/core';
import { IconCalendar } from "@tabler/icons-react";

export default async function Blog() {
  let posts: Post[] = getPosts();
  posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Separate the latest post from the rest
  const [latestPost, ...remainingPosts] = posts;

  return (
    <>
      {/* Featured Latest Post */}
      <Stack align="center" gap="64px">
        <Flex w="80%" key={latestPost.slug} align="center" direction={{ base: 'column', md: 'row' }}>
          
          {/* Text Section on the Left */}
          <Stack w="60%" pr="lg" spacing="xs">
          <Title order={2}>Latest Post</Title>
          <Divider/>
            <Anchor href={latestPost.external} target='_blank' rel='noopener noreferrer' underline='never'>
              <Title order={3}>{latestPost.title}</Title>
            </Anchor>

            <Text c="dimmed" size="md" style={{ display: 'flex', alignItems: 'center' }}>
              <IconCalendar style={{ marginRight: '5px' }} />
              {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(latestPost.date))} | {latestPost.author}
            </Text>
            <Text>{latestPost.summary}</Text>
          </Stack>

          {/* Image Section on the Right */}
          <Anchor href={latestPost.external} target='_blank' rel='noopener noreferrer' underline='never'>
            <Image src={latestPost.image} alt={latestPost.title} width="100%" />
          </Anchor>
        </Flex>

        {/* Smaller Post Cards */}
        <Grid gutter="md">
          {remainingPosts.map((post) => (
            <GridCol key={post.slug} xs={12} sm={6} md={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder w="500px">
                <CardSection>
                <Anchor href={post.external} target='_blank' rel='noopener noreferrer' underline='never'>
                  <Image src={post.image} alt={post.title} height={160} />
                </Anchor>
                </CardSection>

                <Stack spacing="xs" mt="sm">
                  {post.external ? (
                    <Anchor href={post.external} target='_blank' rel='noopener noreferrer' underline='never'>
                      <Title order={3}>{post.title}</Title>
                    </Anchor>
                  ) : (
                    <Anchor href={`/blog/${post.slug}`} underline="never">
                      <Title order={3}>{post.title}</Title>
                    </Anchor>
                  )}

                  <Text c="dimmed" size="sm" style={{ display: 'flex', alignItems: 'center' }}>
                    <IconCalendar style={{ marginRight: '5px' }} />
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(post.date))} | {post.author}
                  </Text>
                  <Text>{post.summary}</Text>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
