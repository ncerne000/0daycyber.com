// @ts-nocheck
import { Container, Text, Stack } from '@mantine/core';
import ConsultationButton from '../../components/contactForm/ConsultationButton';

type BookConsultationProps = {
    title: string,
    description: string
}

export default function BookConsultation({ title, description}: BookConsultationProps) {
  return (
    <Container size="md" py="xl" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <Stack align="center" spacing="lg">
        <Text size="lg" weight={500}>
          {title}
        </Text>
        <Text color="dimmed">
            {description}
        </Text>

        <ConsultationButton/>
      </Stack>
    </Container>
  );
}
