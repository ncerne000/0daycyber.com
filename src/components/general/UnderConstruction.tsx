import { Container, Text, Title, Button, Group } from '@mantine/core';
import { IconTools } from '@tabler/icons-react';

export default function UnderConstruction() {
  return (
    <Container size="md" style={{ textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <IconTools size={64} stroke={1.5} color="gray" />
      <Title order={2} mt="md">
        Page Under Construction
      </Title>
      <Text color="dimmed" size="lg" mt="md">
        We&apos;re working hard to get this page ready. Please check back later!
      </Text>
        <Button m="lg" variant="filled" size="md" component="a" href="/">
          Return to Home
        </Button>
    </Container>
  );
}