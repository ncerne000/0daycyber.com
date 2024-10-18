import React from 'react';
import { Flex, Title, Text, Image, Anchor } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export default function About() {
  return (
    <Flex direction="column" w="100%">
      <Flex my="100px">
            <Flex direction="column" align="center" w="100%">
              <Title order={1}>Get to <span style={{color: "#4169E1"}}>Know Us</span></Title>
              <Flex w={{base: "75%", md: "25%"}}>
                <Text ta="center">
                  0DayCyber LLC was founded by two brothers who are alumni of Virginia Tech with backgrounds in industry-leading offensive security firms.
                </Text>
              </Flex>
            </Flex>
        </Flex>
        <Flex bg="virtualColor1" w="100%" justify="center">
            <Flex direction="column" my="100px" w="70%" align="center">
              <Title order={2}>Experience</Title>
              <Text ta="center" mb="50px">
              During our tenure, we have identified numerous high and critical-risk vulnerabilities affecting our clients. Additionally, we have 
              made significant contributions to security research, including reverse engineering a Traeger grill and uncovering a high-risk vulnerability that 
              allowed potential attackers to remotely control customer grills. We have also actively participated in various bug bounty programs, including 
              identifying a critical remote code execution vulnerability in a Department of State website.
              </Text>
              <Flex w="100%" justify="center">
                <NavLink
                  w={{base: "60%", md: "40%", lg: "40%"}}
                  href="/blog"
                  style={{marginTop: "10px"}}
                  active
                  label="Read More"
                  rightSection={
                      <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                  }
                  />
              </Flex>
            </Flex>
          </Flex>
        <Flex direction="column" align="center"  my="100px">
          <Title order={2}>Mission</Title>
          <Flex w="70%">
            <Text style={{textAlign: "center"}}>
              Our mission is simple - to help our clients and the Defense Industrial Base (DIB) safeguard their data from
              bad actors. Whether we are providing CMMC assessments or penetration testing services, we will provide an 
              earnest effort in helping our clients secure their infrastructure and data.
            </Text>  
          </Flex>
        </Flex>
        <Flex direction="column" align="center" my="100px">
          <Title order={2} mb="lg">Accreditations</Title>
          <Flex w="70%" justify="center" align="center" gap="xl" direction={{base: "column", md: "row"}}>
            <Anchor href="https://0daycyber.com" target="_blank">
              <Image w="250px" h="250px" alt="cca" src="/images/cca.png" />
            </Anchor>
            <Anchor href="https://www.credential.net/50e33530-6061-4f1b-8cd5-e87266c3c492" target="_blank">
              <Image w="250px" h="250px" alt="oswe" src="/images/oswe.png" />
            </Anchor>
            <Anchor href="https://images.credential.net/embed/bbutduhv.png" target="_blank">
              <Image w="250px" h="250px" alt="oscp" src="/images/oscp.png" />
            </Anchor>
          </Flex>
        </Flex>
    </Flex>
  );
};