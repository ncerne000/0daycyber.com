import React from 'react';
import { Flex, Title, Text, Image, Divider } from '@mantine/core';
import TwoColumnFlexGridContainer from '../../../components/layout/FlexGridContainer';
import Link from 'next/link';

export default function Leadership() {
  return (
    <Flex direction="column" align="center">
      <Title order={1}>Leadership</Title>
      <Flex my="80px"  w="100%">
        <TwoColumnFlexGridContainer 
          child1={
            <Flex direction="column">
              <Title style={{color: "#4169E1"}} order={1}>Nicholas Cerne</Title>
              <Text>
                Nicholas Cerne is a certified offensive security and cybersecurity audit professional. Nicholas Cerne formerly worked at BishopFox as a Security Consultant III where
                he specialized in several areas of offensive security. He also enjoys conducting IoT security research as a hobby. Nicholas currently holds the Offensive Security Certified 
                Professional (OSCP), Offensive Security Web Expert (OSWE), and Security+ certifications. He graduated with a B.S. in Cybersecurity from Virginia Tech, where he formerly served
                as president of the <Link href="https://cybervt.org">university&apos;s Cybersecurity club</Link>. 
              </Text>
            </Flex>
          }
          child2={
            <Flex justify="center">
                <Image alt="chris-cerne-headshot" radius="md" h="300" w="300" src="/images/chris-headshot.png"/>
            </Flex>
          }/>
        </Flex>
        <Divider w="100%"></Divider>
        <Flex my="80" w="100%">
            <TwoColumnFlexGridContainer 
            child1={
                <Flex direction="column">
                    <Title style={{color: "#4169E1"}} order={1}>Christopher Cerne</Title>
                    <Text>
                        Christopher Cerne has over a decade of experience in computer technology and is recognized in the security community for finding numerous 0-day vulnerabilities with responsible
                        disclosures. While obtaining a B.S. degree in Computer Science at Virginia Tech (VT), Christopher studied embedded device security, worked as a teaching assistant in the Department 
                        of Computer Science, and joined the <Link href="https://cybervt.org">VT Cybersecurity Club</Link> (CyberVT) where he learned the basics of vulnerability research and competed in CTFs. Christopher holds a Junior Penetration Tester Certification (eJPT).
                    </Text>
                </Flex>
            }
            child2={
                <Flex justify="center">
                    <Image alt="chris-cerne-headshot" radius="md" h="300" w="300" src="/images/chris-headshot.png"/>
                </Flex>
            }/>
        </Flex>      
    </Flex>
  );
};