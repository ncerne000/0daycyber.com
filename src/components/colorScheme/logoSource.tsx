import { useMantineColorScheme } from '@mantine/core';

export default function useLogoSource(lightSrc: string, darkSrc: string) {
  const { colorScheme } = useMantineColorScheme();
  return colorScheme === 'light' ? lightSrc : darkSrc;
}

