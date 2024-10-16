// @ts-nocheck
import { Container, Title, Text, Card, Flex, Grid, Stack, Timeline, TimelineItem, GridCol, List, ListItem, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconSearch, IconAccessPoint, IconBug, IconSpy, IconReport } from '@tabler/icons-react';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';

export default function RedTeamPage() {
  return (
    <Container size="lg" py="xl">
        <Flex direction="column" my="50px">
            <Title align="center" mb="xl">
                Red Teaming
            </Title>

            <Text align="center" mb="lg">
                At 0DayCyber, our Red Team Assessment services simulate real-world cyberattacks to identify and exploit vulnerabilities in your organization&apos;s security posture. By thinking and acting like a sophisticated attacker, our team provides a comprehensive evaluation of your defenses, helping you improve and strengthen your cybersecurity strategy.
            </Text>

            <Title align="center" order={3}>What is a Red Team Assessment?</Title>
        
            <Text align="center" mb="lg">
                    A Red Team Assessment is an advanced security exercise where our experts simulate an adversary attempting to breach your systems, evade defenses, and achieve their objectives. Unlike a traditional penetration test, Red Team Assessments are broader in scope and aim to challenge your entire organization—from your technical defenses to the response capabilities of your security team.
            </Text>
        </Flex>
        <Card shadow="sm" padding="lg" my="50px">
            <Stack>
                <Title order={3}>Why Choose Our Red Team?</Title>
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
                        <b>Experienced Red Team Operators:</b> We gather information about your network, services, and systems to identify potential entry points.
                    </ListItem>
                    <ListItem>
                        <b>Real-World Attack Simulations:</b> We mimic advanced persistent threat (APT) groups and insider threats, testing your ability to defend against sophisticated attacks.
                    </ListItem>
                    <ListItem>
                        <b>Exploitation:</b> Using ethical hacking techniques, we attempt to exploit identified vulnerabilities to determine the impact of a successful breach.
                    </ListItem>
                    <ListItem>
                        <b>Full-Spectrum Coverage:</b> From phishing and physical intrusions to network breaches and lateral movement, we assess every layer of your security stack.
                    </ListItem>
                    <ListItem>
                        <b>Tailored Assessments:</b> Each Red Team engagement is customized to meet the unique needs and risks of your business, ensuring we simulate the most relevant threats.
                    </ListItem>
                </List>
            </Stack>
        </Card>
        <Flex direction="column">
            <Title>Our Red Team Process</Title>
            <Timeline active={5} bulletSize={36} lineWidth={2} my="30px">
                <TimelineItem bullet={<IconSearch size={24} />} title="Reconnaissance">
                    <Text c="dimmed" size="sm">Our team conducts detailed research on your organization, identifying potential attack vectors and gathering intelligence for use in later phases.</Text>
                    <Text size="xs" mt={4}>Phase 1</Text>
                </TimelineItem>

                <TimelineItem bullet={<IconAccessPoint size={24} />} title="Initial Access">
                    <Text c="dimmed" size="sm">Using methods such as phishing, social engineering, or exploiting vulnerabilities, we attempt to gain an initial foothold in your network.</Text>
                    <Text size="xs" mt={4}>Phase 2</Text>
                </TimelineItem>

                <TimelineItem title="Exploitation & Escalation" bullet={<IconBug size={24} />} lineVariant="dashed">
                    <Text c="dimmed" size="sm">After gaining access, we exploit weaknesses to escalate privileges and move laterally through your environment to reach sensitive targets.</Text>
                    <Text size="xs" mt={4}>Phase 3</Text>
                </TimelineItem>

                <TimelineItem title="Persistence & Exfiltration" bullet={<IconSpy size={24} />}>
                    <Text c="dimmed" size="sm">We establish long-term persistence in your network and attempt to exfiltrate critical data, mimicking real-world attackers.</Text>
                    <Text size="xs" mt={4}>Phase 4</Text>
                </TimelineItem>

                <TimelineItem title="Reporting & Recommendations" bullet={<IconReport size={24} />}>
                    <Text c="dimmed" size="sm">After completing the assessment, we provide a detailed report of our findings, including exploited vulnerabilities, attack paths, and recommendations for improving your security posture.</Text>
                    <Text size="xs" mt={4}>Phase 5</Text>
                </TimelineItem>
            </Timeline>
        </Flex>
        <ConsultationDialog title="Ready to Test Your Defenses Against a Real-World Attacker?" description="Our experts are ready to help you fortify your networks and secure your business. Book a free consultation now and take the first step towards a safer digital environment."/>
  </Container>
);
};
