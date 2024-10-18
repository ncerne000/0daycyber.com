import React from 'react';
import { Flex, Container, Title, Text, Card } from '@mantine/core';
import FlexGridContainer from '../../components/layout/FlexGridContainer';
import ContactForm from '../../components/contactForm/ContactForm';
import classes from "../index.module.css"

export default function Contact() {
  return (
    <Flex direction="column">
          <FlexGridContainer  
          child1={
            <Flex direction="column" h="100%" w={{base: "100%", lg: "70%"}} justify="center" my={{base: "40px"}} style={{padding: 0}}>
              <Title className={classes.titleSmall} order={3}>Book a Free <span style={{ color: "#4169E1" }}>Consultation</span></Title>
              <Text className={classes.text}>We will get back to you within one business day.</Text>
            </Flex>
          } 
          child2={
            <Container my={{base: "40px"}} w={{base: "100%", lg: "70%"}}  style={{padding: 0}}>
              <Card shadow="lg">
                <ContactForm/>
              </Card>
            </Container>
          } 
        />
    </Flex>
  );
};