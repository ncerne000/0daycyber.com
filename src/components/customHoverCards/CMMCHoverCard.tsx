'use client';
import CustomHoverCard from "./CustomHoverCard";
import { IconShieldHalf } from "@tabler/icons-react";

export default function CMMCHoverCard(){
    return(
        <CustomHoverCard href="/services/cmmc" title="CCAs for Hire" Icon={IconShieldHalf} content="          The CCAs at 0DayCyber conduct thorough CMMC assessments to ensure organization's adhere to the stringent cybersecurity standards required by the Department of Defense. Partner with us to conduct CMMC assessments and help OSCs maintain eligibility for defense contracts."/>
    )
}