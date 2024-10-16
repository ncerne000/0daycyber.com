import {
    IconBook,
    IconCloudLock,
    IconCertificate,
    IconUsers,
    IconAppWindow,
    IconNetwork,
    IconCpu,
    IconSwords,
  } from '@tabler/icons-react';


  export const blogData = [
    {
      icon: IconCertificate,
      title: 'CMMC & the Defense Industrial Base.',
      description: 'Get the latest on CMMC news and compliance with DoD contract requirements.',
      link: '/blog/cmmc'
    },
    {
      icon: IconCloudLock,
      title: 'Blog',
      description: 'See our cutting edge security research blog and learn about threats that could affect your organization.',
      link: '/blog'
    }
  ];
  
  export const aboutData = [
    {
      icon: IconBook,
      title: 'About Us',
      description: 'A brief overview of our company and it\'s history.',
      link: '/about'
    },
    {
      icon: IconUsers,
      title: 'Meet the Team',
      description: 'Get to know our leadership.',
      link: '/about/leadership'
    }
  ];

  export const servicesData = [
    {
      icon: IconCertificate,
      title: 'CMMC Certification Assessments',
      description: 'Partner with us to conduct CMMC assessments and help OSCs maintain eligibility for defense contracts.',
      link: '/services/cmmc'
    },
    {
      icon: IconAppWindow,
      title: 'Application Security',
      description: 'We identify application vulnerabilities before the hackers do, providing you with actionable insights to fortify your defenses and protect your sensitive data.',
      link: '/services/application-penetration-testing'
    },
    {
        icon: IconCloudLock,
        title: 'Cloud Security Review',
        description: 'Safeguard your cloud infrastructure with our expert cloud security reviews.',
        link: '/services/cloud-security-review'
    },
    {
        icon: IconNetwork,
        title: 'Network Security',
        description: 'We simulate real-world attacks to identify and exploit vulnerabilities in your network infrastructure.',
        link: '/services/network-penetration-testing'
    },
    {
        icon: IconCpu,
        title: 'Embedded Devices & IoT Security',
        description: 'Ensure your embedded device & IoT infrastructure is resilient, compliant, and secure against evolving cyber threats with our expert guidance.',
        link: '/services/embedded-security'
    },
    {
        icon: IconSwords,
        title: 'Red Team',
        description: 'Elevate your security posture with our advanced Red Teaming services. We simulate sophisticated cyber attacks to test your defenses and response capabilities.',
        link: '/services/red-team-operations'
    }
  ];