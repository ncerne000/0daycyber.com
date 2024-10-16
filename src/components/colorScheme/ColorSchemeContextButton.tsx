'use client'
import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function ColorSchemeToggle() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const toggleColorScheme = () => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
      };
  
    return (
      <Group>
        <ActionIcon color="none" variant="subtle" onClick={toggleColorScheme}>
          {colorScheme === 'light' ? <IconMoonStars /> : <IconSun />}
        </ActionIcon>
      </Group>
    );
  }