'use client'
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Image
  } from '@mantine/core';
  import useLogoSource from '../colorScheme/logoSource';
  import { useDisclosure } from '@mantine/hooks';
  import { IconChevronDown } from '@tabler/icons-react';
  import classes from './Header.module.css';
  import { aboutData, blogData, servicesData } from './HeaderData';
  import ColorSchemeToggle from '../colorScheme/ColorSchemeContextButton';
  
  export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [aboutLinksOpened, { toggle: toggleAboutLinks }] = useDisclosure(false);
    const [servicesLinksOpened, { toggle: toggleServicesLinks }] = useDisclosure(false);
    const [blogLinksOpened, { toggle: toggleBlogLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const logoSrc = useLogoSource('/0daycyber-final-light.svg', '/0daycyber-final.svg');
  
    const aboutLinks = aboutData.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <a href={item.link} className={classes.link}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                    {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                    {item.description}
                    </Text>
                </div>
            </Group>
        </a>
      </UnstyledButton>
    ));

    const blogLinks = blogData.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
          <a href={item.link} className={classes.link}>
              <Group wrap="nowrap" align="flex-start">
                  <ThemeIcon size={34} variant="default" radius="md">
                      <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                  </ThemeIcon>
                  <div>
                      <Text size="sm" fw={500}>
                      {item.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                      {item.description}
                      </Text>
                  </div>
              </Group>
          </a>
        </UnstyledButton>
      ));

      const servicesLinks = servicesData.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
          <a href={item.link} className={classes.link}>
              <Group wrap="nowrap" align="flex-start">
                  <ThemeIcon size={34} variant="default" radius="md">
                      <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                  </ThemeIcon>
                  <div>
                      <Text size="sm" fw={500}>
                      {item.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                      {item.description}
                      </Text>
                  </div>
              </Group>
          </a>
        </UnstyledButton>
      ));
  
    return (
      <Box>
        <header className={classes.header}>
          <Group className={classes.responsiveGroup} h="100%">
            <a href="/" style={{display: "flex"}}>
                <Image alt="logo" h={50} w={200} src={logoSrc}/>
            </a>
  
            <Group h="100%" gap={0} visibleFrom="sm">

               {/* Start of About HoverCard */}
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="/about" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        About
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>About</Text>
                    <Anchor href="/about" fz="xs">
                      Overview
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {aboutLinks}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>

              {/* Start of Services HoverCard */}
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="/services" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Services</Text>
                    <Anchor href="/services" fz="xs">
                      Overview
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {servicesLinks}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Get a free consultation for any of our services
                        </Text>
                      </div>
                      <Button variant="default"><a href="/contact" className={classes.link}>Get started</a></Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              {/* Start of Blog HoverCard */}
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="/blog" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Blog
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Blog</Text>
                    <Anchor href="/blog" fz="xs">
                      Overview
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {blogLinks}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="/contact" className={classes.link}>
                Contact
              </a>
              <ColorSchemeToggle/>
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            {/* About Nav */}
            <UnstyledButton className={classes.link} onClick={toggleAboutLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  About
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={aboutLinksOpened}>{aboutLinks}</Collapse>

            {/* Services Nav */}
            <UnstyledButton className={classes.link} onClick={toggleServicesLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Services
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={servicesLinksOpened}>{servicesLinks}</Collapse>

            {/* Blog Nav */}
            <UnstyledButton className={classes.link} onClick={toggleBlogLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Blog
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={blogLinksOpened}>{blogLinks}</Collapse>

            <a href="/contact" className={classes.link}>
              Contact
            </a>
  
            <Divider my="sm" />
  
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }