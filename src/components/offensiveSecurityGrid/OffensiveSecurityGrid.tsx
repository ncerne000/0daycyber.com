"use client"
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { OffensiveSecurityData } from './OffensiveSecurityData'
import CustomHoverCard from '../customHoverCards/CustomHoverCard';

export default function OffensiveSecurityGrid() {
    const cards = OffensiveSecurityData.map((article) => (
        <CustomHoverCard key={article.title} title={article.title} Icon={article.icon} content={article.description} href={article.link}>

        </CustomHoverCard>
    ))

    return (
        <Container>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
        </Container>
    )
}