// @ts-nocheck
import { Container, Title, Text, Card, Grid, Stack, GridCol, List, ListItem, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';

export default function CloudSecurityReviewPage() {
  return (
    <Container size="lg" py="xl">
    <Title align="center" mb="xl">
      Cloud Security Reviews
    </Title>

    <Text align="center" mb="lg">
      Our cloud security reviews provide a comprehensive analysis of your cloud infrastructure, ensuring your environment is secure and compliant with industry standards. From infrastructure reviews to configuration assessments, we help you mitigate cloud-based risks.
    </Text>

    <Grid gutter="lg">
      <GridCol span={12} md={4}>
        <Card shadow="sm" padding="lg">
          <Stack>
            <Title order={3}>Cloud Penetration Testing</Title>
                <Text>
                Our Cloud Penetration Testing service provides a thorough examination of your cloud infrastructure by simulating real-world attacks to identify security weaknesses and vulnerabilities. Whether you&apos;re using AWS, Azure, or Google Cloud, our team of experts performs comprehensive tests on:
                </Text>
            <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
                <ListItem>
                <b>Cloud-based applications:</b> We assess vulnerabilities in applications hosted in the cloud, focusing on potential risks in data storage, authentication, and API security.
                </ListItem>
                <ListItem>
                <b>Network security:</b> We analyze your cloud network architecture, looking for misconfigurations, insecure firewalls, and open ports that could be exploited by attackers.
                </ListItem>
                <ListItem>
                <b>Identity and access management:</b> We evaluate the security of user accounts, permissions, and roles to ensure that only authorized users can access sensitive resources.
                </ListItem>
            </List>
          </Stack>
        </Card>
      </GridCol>

      <GridCol span={12} md={4}>
      <Card shadow="sm" padding="lg">
          <Stack>
            <Title order={3}>Cloud Configuration Reviews</Title>
                <Text>
                Our Cloud Configuration Review service ensures that your cloud environment is configured according to industry best practices, reducing the likelihood of a security breach due to misconfigurations. We perform detailed reviews of:
                </Text>
            <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
                <ListItem>
                <b>Account and permission settings:</b> We examine your cloud accounts and user roles, identifying over-permissioned accounts, inactive users, and unnecessary access that could be exploited.
                </ListItem>
                <ListItem>
                <b>Storage security:</b> We evaluate the configuration of cloud storage services such as S3 buckets, ensuring that data is properly secured, encrypted at rest, and not publicly accessible by default.
                </ListItem>
                <ListItem>
                <b>Logging and monitoring:</b> We verify that appropriate logging and monitoring are in place to detect suspicious activity, ensuring that potential security incidents can be identified and acted upon quickly.
                </ListItem>
            </List>
          </Stack>
        </Card>
      </GridCol>
      <ConsultationDialog title="Ready to Secure Your Cloud Environment?" description="Our experts are ready to help you fortify your cloud environment and secure your business. Book a free consultation now and take the first step towards a safer digital environment."/>
    </Grid>
  </Container>
);
};
