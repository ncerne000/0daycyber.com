// @ts-nocheck
import React from 'react';
import { Accordion, Text } from '@mantine/core';
import Link from 'next/link';

const AccordionLinks = ({ accordionLinks }) => {
  return (
    <Accordion>
      {accordionLinks.map((link, index) => (
        <Accordion.Item key={index} value={link.label}>
          <Link href={link.link}>
            <Text>{link.description}</Text>
          </Link>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionLinks;