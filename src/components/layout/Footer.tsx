"use client";
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Company Overview', link: '/about' },
      { label: 'Leadership', link: '/about/leadership' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'CMMC Compliance Assessments', link: '/services/cmmc' },
      { label: 'Application Security', link: '/services/application-penetration-testing' },
      { label: 'Cloud Security Review', link: '/services/cloud-security-review' },
      { label: 'Network Security', link: '/services/network-penetration-testing' },
      { label: 'IoT Security', link: '/services/embedded-security' },
      { label: 'Red Team', link: '/services/red-team-operations' }
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'CMMC & the Defense Industrial Base', link: '/blog/cmmc' },
      { label: 'Security Research', link: '/blog' }
    ],
  },
];


export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>

      
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text>0DayCyber</Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            Premier cybersecurity consulting firm specializing in penetration testing and Cybersecurity Maturity Model Certification (CMMC) assessments. 
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 0DayCyber LLC. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}