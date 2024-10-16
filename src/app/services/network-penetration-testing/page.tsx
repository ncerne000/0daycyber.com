// @ts-nocheck
import { Container, Title, Text, Card, Grid, Stack, GridCol, List, ListItem, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';

export default function NetworkPenetrationTestingPage() {
  return (
    <Container size="lg" py="xl">
    <Title align="center" mb="xl">
      Network Penetration Testing
    </Title>

    <Text align="center" mb="lg">
    In today&apos;s digital landscape, network security is critical. Cybercriminals constantly evolve their tactics, making it essential to ensure your network is secure against unauthorized access, data breaches, and potential service disruptions. At 0DayCyber, we provide comprehensive network penetration testing services to identify and address vulnerabilities before they can be exploited.    </Text>

    <Grid gutter="lg">
      <GridCol span={12} md={4}>
        <Card shadow="sm" padding="lg">
          <Stack>
            <Title order={3}>Our Approach</Title>
                <Text>
                    Our network penetration testing follows a rigorous, structured approach to provide a complete view of your network&apos;s security posture:
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
                <b>Reconnaissance and Discovery:</b> We gather information about your network, services, and systems to identify potential entry points.
                </ListItem>
                <ListItem>
                <b>Vulnerability Assessment:</b> We perform a thorough scan to identify known vulnerabilities and misconfigurations.
                </ListItem>
                <ListItem>
                <b>Exploitation:</b> Using ethical hacking techniques, we attempt to exploit identified vulnerabilities to determine the impact of a successful breach.
                </ListItem>
                <ListItem>
                <b>Post-Exploitation:</b> We analyze the consequences of the exploit, such as data access, privilege escalation, or service disruption.
                </ListItem>
                <ListItem>
                <b>Exploitation:</b> A detailed report is provided, outlining the vulnerabilities found, their risk level, and actionable steps for remediation.
                </ListItem>
            </List>
          </Stack>
        </Card>
      </GridCol>
      <ConsultationDialog title="Ready to Secure Your Network?" description="Our experts are ready to help you fortify your network and secure your business. Book a free consultation now and take the first step towards a safer digital environment."/>
    </Grid>
  </Container>
);
};
