"use client";

import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { zeroDayCyberTheme } from "../../theme";
import { usePathname } from 'next/navigation';
import { Notifications } from "@mantine/notifications";
import Script from "next/script";

const metadata = {
  title: "0DayCyber",
  description: "0DayCyber, a leader in cybersecurity consulting services including CMMC assessments and penetration testing.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // TODO: Make this more robust. This is a quick fix to get the padding right on the homepage.
  const pathname = usePathname();
  const homePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/0daycyber-final-only-shield.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <MantineProvider theme={zeroDayCyberTheme} defaultColorScheme="light">
          <Script strategy="beforeInteractive" src="https://www.google.com/recaptcha/api.js?render=6LedfWIqAAAAADtDAXVxKS8VVRh0dbDbjke-2xZM"/>
          <Header />
          {children}
          <div style={{ marginTop: 'auto' }}>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}