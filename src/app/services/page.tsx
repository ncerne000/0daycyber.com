import { Flex, Title } from "@mantine/core";
import { HeroBullets } from "../../components/cmmcHeader/cmmcBullets";
import OffensiveSecurityGrid from "../../components/offensiveSecurityGrid/OffensiveSecurityGrid";

export default function Services(){
    return (
        <Flex direction="column">
            <HeroBullets/>
            <Flex  bg="virtualColor1" direction="column" align="center">
                <Title order={1} my="50px">
                    Offensive Security
                </Title>
                <OffensiveSecurityGrid/>
            </Flex>
        </Flex>
    )
}