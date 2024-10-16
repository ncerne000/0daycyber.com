'use client';
import CustomHoverCard from "./CustomHoverCard";
import { IconSwords } from "@tabler/icons-react";

export default function OSHoverCard(){
    return(
        <CustomHoverCard href="/services" title="Offensive Security" Icon={IconSwords} content="Emulate real-world attacks on your web applications to identify and fix vulnerabilities before malicious actors can exploit them. Our expert team provides actionable recommendations to enhance your security and ensure compliance with industry standards. Partner with us to protect your sensitive data, maintain your reputation, and stay ahead of potential threats."/>
    )
}