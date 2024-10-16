"use client";
import { ReactNode } from 'react';
import { Flex, Grid, GridCol } from '@mantine/core';

interface TwoColumnFlexGridContainerProps {
    child1: ReactNode;
    child2: ReactNode;
  }

export default function TwoColumnFlexGridContainer({child1, child2}: TwoColumnFlexGridContainerProps){

    return(
        <Flex w="100%" justify="center" align="center">
            <Grid grow gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} style={{ maxWidth: '1200px', padding: '20px' }}>
                <GridCol span={{ base: 12, md: 6, lg: 3 }}>{child1}</GridCol>
                <GridCol span={{ base: 12, md: 6, lg: 3 }}>{child2}</GridCol>
            </Grid>
        </Flex>
    )
}