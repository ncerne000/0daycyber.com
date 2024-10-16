'use client';
import React from 'react';
import { Card, CardSection, Flex, Text, Divider, Anchor, NavLink } from '@mantine/core';
import { IconProps, IconChevronRight } from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';

interface CustomHoverCardProps {
    href: string;
    Icon: React.ComponentType<IconProps>;
    title: string;
    content: string;
  }

const CustomHoverCard: React.FC<CustomHoverCardProps> = ({ href, Icon, title, content }) => {
    const { hovered, ref } = useHover();

  return (
    <Anchor href={href} style={{ textDecoration: 'none' }}>
      <Card
        h="400px"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        ref={ref}
        style={{
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.2s ease',
        }}
      >
        <CardSection>
          <Flex justify="center">
            <Icon color="#4169E1" size={80} />
          </Flex>
        </CardSection>
        <CardSection>
          <Flex justify="center">
            <Text fw={700}>{title}</Text>
          </Flex>
          <Divider my="md" />
        </CardSection>
        <Flex justify="center">
          <Text>
            {content}
          </Text>
        </Flex>
      </Card>
    </Anchor>
  );
}

export default CustomHoverCard;