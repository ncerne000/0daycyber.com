import { Image, Container, Title, Button, Group, Text, List, ListItem, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './cmmc.module.css';
import Link from 'next/link';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            CCAs for Hire
          </Title>
          <Text c="dimmed" mt="md">
          The CCAs at 0DayCyber conduct thorough CMMC assessments to ensure organization&apos;s adhere to the stringent cybersecurity standards required by the Department of Defense. Partner with us to conduct CMMC assessments and help OSCs maintain eligibility for defense contracts.
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
              <b>Quality Assessments</b> – we strive to deliver the highest quality CMMC assessments and reports
            </ListItem>
            <ListItem>
              <b>Strong Communication</b> – we emphasize strong communication to ensure full transparency with our clients during an assessment
            </ListItem>
            <ListItem>
              <b>Efficiency</b> – we work efficiently and effectively to offer our clients competitive prices 
            </ListItem>
          </List>

          <Group mt={30}>
            <Link href="/services/cmmc">
              <Button radius="xl" size="md" className={classes.control}>
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Contact
              </Button>
            </Link>
          </Group>
        </div>
        <Image alt="Department of Defense Seal" src="/seal_DoD.svg" className={classes.image} />
      </div>
    </Container>
  );
}