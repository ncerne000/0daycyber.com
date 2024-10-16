// @ts-nocheck
import { Container, Title, Text, Card, Flex, Grid, Stack, Timeline, TimelineItem, GridCol, List, ListItem, ThemeIcon, rem } from '@mantine/core';
import { IconHomeLink, IconCode, IconCpu, IconWifi, IconNetwork, IconCloud  } from '@tabler/icons-react';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';
import TwoColumnFlexGridContainer from '../../../components/layout/FlexGridContainer';

export default function IoTSecurityPage() {
  return (
    <Container size="lg" py="xl">
        <Title align="center" mb="xl">
            IoT & Embedded Device Security Reviews
        </Title>
        <TwoColumnFlexGridContainer child1={
                    <Flex direction="column" my="50px">
                    <Title align="center" order={4}>
                        Uncover Security Flaws in Your Connected Devices
                    </Title>
                    <Text align="center" mb="lg">
                    The rapid growth of Internet of Things (IoT) devices has transformed industries and homes, but it has also opened up new attack surfaces for cybercriminals. From smart appliances to industrial control systems, IoT devices often lack robust security measures, making them prime targets for hackers. Our IoT & Embedded Device Hacking services help you stay ahead of emerging threats by identifying vulnerabilities before they can be exploited.
                    </Text>
                </Flex>
        } child2={
            <Flex justify="center">
                <IconHomeLink size="200px"/>
            </Flex>

        }/>
        <Flex direction="column">
            <Title>Our Approach to IoT Penetration Testing</Title>
            <Timeline active={5} bulletSize={36} lineWidth={2} my="30px">
                <TimelineItem bullet={<IconCode size={24} />} title="Firmware Analysis">
                    <Text c="dimmed" size="sm">We reverse-engineer firmware to uncover hidden vulnerabilities and backdoors, ensuring that your devices are safe from firmware-based exploits.</Text>
                </TimelineItem>

                <TimelineItem bullet={<IconCpu size={24} />} title="Hardware Security">
                    <Text c="dimmed" size="sm">We perform hardware-level penetration testing to assess how well your devices resist physical tampering, side-channel attacks, and other hardware-based threats.</Text>
                </TimelineItem>

                <TimelineItem title="Wireless Protocol Testing" bullet={<IconWifi size={24} />} lineVariant="dashed">
                    <Text c="dimmed" size="sm">IoT devices often rely on various wireless protocols like Zigbee, Bluetooth, Wi-Fi, and LoRa. We test the robustness of these communications to prevent unauthorized access and data leaks.</Text>
                </TimelineItem>

                <TimelineItem title="Network Security" bullet={<IconNetwork size={24} />}>
                    <Text c="dimmed" size="sm">We examine the broader network where your IoT devices operate, testing how they interact with cloud services, mobile apps, and other connected devices to identify security weaknesses.</Text>
                </TimelineItem>

                <TimelineItem title="IoT Platform Security" bullet={<IconCloud size={24} />}>
                    <Text c="dimmed" size="sm">We evaluate the security of the entire IoT ecosystem, including cloud platforms and APIs, to ensure data integrity and protection across all interfaces.</Text>
                </TimelineItem>
            </Timeline>
        </Flex>
        <ConsultationDialog title="Let’s Secure Your Connected Devices." description="Whether you're in manufacturing, healthcare, consumer tech, or any other industry, we can help you harden your systems against cyber threats. Contact us today to schedule a consultation and start safeguarding your IoT ecosystem."/>
  </Container>
);
};
