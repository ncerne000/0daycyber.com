import TwoColummGridContainer from "../components/layout/FlexGridContainer";
import { Title, Text, Flex, NavLink, Image, Container, Card } from "@mantine/core";
import OSHoverCard from "../components/customHoverCards/OSHoverCard";
import CMMCHoverCard from "../components/customHoverCards/CMMCHoverCard";
import classes from "./index.module.css"
import ContactForm from "../components/contactForm/ContactForm";
import ConsultationButton from "../components/contactForm/ConsultationButton";

export default function HomePage() {
  return (
  <Flex direction="column">
    <Flex h={{lg: "70vh"}}>
      <TwoColummGridContainer  
        child1={
          <Flex direction="column" align={{base: "center", md: "normal", lg: "normal"}}>
            <Title order={1} className={classes.title}>
              <span style={{ color: "#4169E1" }}>Zeroing</span> in on Security.
            </Title>
            <Text className={classes.text} fw="600">Providing Comprehensive CMMC Compliance Assessments and Cutting-Edge Penetration Testing services to secure your infrastructure.</Text>
            <ConsultationButton/>     
          </Flex>
        } 
        child2={
        <Flex direction="column" align="center">
            <Image alt="logo" h={400} w={400} src="/0daycyber-final-only-shield.svg"/>
        </Flex>} 
      />
    </Flex>
    <Flex direction="column" bg="virtualColor1" align="center" justify="center">
        <Title order={1} size="35">
              Our Core Service Lines
        </Title>
      <Flex h={{md: "60vh", lg: "60vh"}}>
        <TwoColummGridContainer  
          child1={
            <Container w={{base: "90%", lg: "70%"}} style={{padding: 0}}>
              <CMMCHoverCard />
            </Container>
          } 
          child2={
            <Container w={{base: "90%", lg: "70%"}}  style={{padding: 0}}>
              <OSHoverCard />
            </Container>
          } 
        />
      </Flex>
    </Flex>
    <Flex justify="center" align="center">
    <TwoColummGridContainer  
          child1={
            <Flex direction="column" h="100%" w={{base: "90%", lg: "70%"}} justify="center" my={{base: "40px"}} style={{padding: 0}}>
              <Title className={classes.titleSmall} order={3}>At 0Day<span style={{ color: "#4169E1" }}>Cyber</span>, we commit to <span style={{ color: "#4169E1" }}>you.</span></Title>
              <Text className={classes.text}>We are committed to delivering excellent and attentive services to our clients, ensuring they have the best possible experience. Additionally, effective communication is our top priority, as we believe it is essential to achieving success for our clients.</Text>
            </Flex>
          } 
          child2={
            <Container my={{base: "40px"}} w={{base: "90%", lg: "70%"}}  style={{padding: 0}}>
              <Card shadow="lg">
                <ContactForm/>
              </Card>
            </Container>
          } 
        />
    </Flex>
  </Flex>
  );
}
