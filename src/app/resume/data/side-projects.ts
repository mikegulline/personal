import { type IJob } from './types';

export const sideProjects: IJob[] = [
  {
    company: 'Loyal to Few',
    description: '',
    city: 'Oceanside',
    state: 'CA',
    onsite: 'Remote',
    website: 'https://www.loyaltofew.com/',
    title: 'Principal Software Engineer',
    type: 'Contract',
    start: '2022-12',
    end: '2023-03',
    details: '',
    notes: [
      'Designed and developed a headless e-commerce website using React 18, NextJS 13, and TailwindCSS, with NextAuth for authentication, focusing on modular architecture and usability.',
      'Built a backend admin system integrating third-party order and shipping APIs, improving operational efficiency and reducing processing times by streamlining labeling, packing, shipping, and returns.',
      'Optimized site performance with a responsive, mobile-first design, asynchronous image rendering, and CSV product export in Node.js, leading to a 25% increase in sales conversions and improved SEO.',
    ],
  },
  {
    company: 'Galaxy4Gamers',
    description:
      'Social/gaming platform, hosting skill based competitions for cash and prizes',
    city: 'Huntington Beach',
    state: 'CA',
    onsite: 'Remote',
    website: '',
    title: 'CTO/Founding Software Engineer',
    type: 'Founder',
    start: '2008-07',
    end: '2011-04',
    details: '',
    notes: [
      'Developed a multi-platform social media and tournament gaming web application for PlayStation, Xbox, and Nintendo systems, facilitating community engagement and competitive gaming.',
      'Engineered single and double elimination tournament systems capable of managing up to 128 players or teams, with drag and drop advancement, dispute arbitration, monitoring, and customizable promotions.',
      'Implemented role-based account management and administrative controls for users, teams, administrators, monitors, and event promoters, enhancing platform security and user experience.',
      'Designed and deployed a multifunctional chat system supporting individual, broadcast, and group communications, which increased user engagement tenfold.',
      'Integrated the Justin.tv (now Twitch.tv) API to enable live streaming, editing, and archiving of gameplay directly on tournament and user profile pages, enriching user interaction and content availability.',
      'Launched the Beat-A-Pro web application, enabling users to engage in live-streamed games against professional gamers, which monetized user interactions and increased platform visibility.',
    ],
  },
];
