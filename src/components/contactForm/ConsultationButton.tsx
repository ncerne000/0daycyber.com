'use client';
import { NavLink } from "@mantine/core";
  import { IconChevronRight } from "@tabler/icons-react";
  
  export default function ConsultationButton() {
    return(
        <NavLink
                w={{base: "60%", md: "40%", lg: "40%"}}
                href="/contact"
                style={{marginTop: "10px"}}
                active
                label="Book a Free Consultation"
                rightSection={
                    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                }
                />
    )
  }