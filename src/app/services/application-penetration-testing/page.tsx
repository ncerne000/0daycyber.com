// @ts-nocheck
import { Container, Title, Text, Card, Grid, Stack, GridCol } from '@mantine/core';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';

export default function PenetrationTestingPage() {
  return (
    <Container size="lg" py="xl">
      <Title align="center" mb="xl">
        Application Penetration Testing Services
      </Title>

      <Text align="center" mb="lg">
        Our application penetration testing services cover a range of applications including web, hybrid, and mobile applications. We use industry-leading tools and techniques to uncover vulnerabilities, ensuring your applications are secure and compliant.
      </Text>

      <Grid gutter="lg">
        <GridCol span={12} md={4}>
          <Card shadow="sm" padding="lg">
            <Stack>
              <Title order={3}>Application Penetration Testing</Title>
              <Text>
                We conduct comprehensive penetration testing for web-based applications to identify and exploit vulnerabilities. Our team simulates real-world attacks to assess your application&apos;s security posture, helping you secure sensitive data and comply with industry regulations.
              </Text>
            </Stack>
          </Card>
        </GridCol>

        <GridCol span={12} md={4}>
          <Card shadow="sm" padding="lg">
            <Stack>
              <Title order={3}>Hybrid Application Assessments</Title>
              <Text>
                Our hybrid application assessments target both web and mobile application layers, ensuring security across the entire tech stack. We focus on identifying vulnerabilities that might exist between these environments to provide a holistic security overview.
              </Text>
            </Stack>
          </Card>
        </GridCol>

        <GridCol span={12} md={4}>
          <Card shadow="sm" padding="lg">
            <Stack>
              <Title order={3}>Mobile Application Assessments</Title>
              <Text>
                We offer thorough penetration testing for mobile applications on both iOS and Android platforms. Our assessments include testing for insecure data storage, improper session handling, weak authentication, and vulnerabilities in mobile-specific APIs.
              </Text>
            </Stack>
          </Card>
        </GridCol>
      </Grid>

      <ConsultationDialog title="Ready to Secure Your Application?" description="Our experts are ready to help you fortify your application and secure your business. Book a free consultation now and take the first step towards a safer digital environment."/>
    </Container>
  );
};
