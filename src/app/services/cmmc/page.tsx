// @ts-nocheck
import React from 'react';
import { Flex, Divider, Title, Text, List, ListItem } from '@mantine/core';
import { IconCircleCheck, IconUsersGroup} from '@tabler/icons-react';
import TwoColumnFlexGridContainer from '../../../components/layout/FlexGridContainer';
import ConsultationDialog from '../../../components/contactForm/ConsultationDialog';

export default function CMMC() {
  return (
    <Flex direction="column" w="100%">
        <Flex my="50px">
            <TwoColumnFlexGridContainer child1={
                    <Flex direction="column" align="center" w="100%">
                        <Title order={1}>CCAs For Hire</Title>
                        <Flex direction="column">
                        <Text ta="left">
                            At 0DayCyber, We understand training pipelines for CCAs can take a long time. Augment your team with our certified assessors to handle increased workloads without the overhead of full-time staff.</Text>
                        <p/>
                        <Text ta="left">We specialize in providing experienced Certified CMMC Assessors (CCAs) to support C3PAOs in delivering high-quality CMMC assessments. Additionally, we bring a strong background in consulting and reporting to ensure thorough evaluations and excellence in our work.</Text>
                    </Flex>
            </Flex>
                } child2={
            <Flex justify="center">
                <IconUsersGroup size="200px"></IconUsersGroup>
            </Flex>
            }/>
        </Flex>
        <Divider my="20px" align="center"/>
        <Flex my="50px">
            <Flex direction="column" my="100px" align="center">
              <Title align="center" mb="md"> Guarantees</Title>
              <List spacing="sm" size="md" center icon={
                    <IconCircleCheck size={16} />
                }>
                    <ListItem><span style={{fontWeight: "bold", fontSize: "20px"}}>Strong Communication:</span> We are attentive to our partners in collaboration to ensure each engagement runs smoothly and in a timely fashion.</ListItem>
                    <ListItem><span style={{fontWeight: "bold", fontSize: "20px"}}>High-Quality Reporting:</span> We emphasize the importance of writing quality reports to ensure quality and client satisfaction.</ListItem>
                    <ListItem><span style={{fontWeight: "bold", fontSize: "20px"}}>Flexibility:</span> Whether you need short-term assistance or long-term support, our CCAs are available to fit your project&apos;s needs.</ListItem>
                </List>
            </Flex>
        </Flex>
        <ConsultationDialog title="Ready to Collaborate on CMMC Assessments?" description="Our experts are ready to help you conduct thorough and attentive CMMC assessments. Book a free consultation now."/>
    </Flex>
  );
};