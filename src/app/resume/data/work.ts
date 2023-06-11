export interface IJob {
  company: string;
  description: string;
  city: string;
  state: string;
  onsite: 'Onsite' | 'Remote' | 'Hybrid';
  website: string;
  title: string;
  type: string;
  start: string;
  end: string;
  details?: string;
  notes: string[];
  properties?: string[][];
}

export const work: IJob[] = [
  {
    company: 'Immunocorp®',
    description:
      'Hired as a graphic designer, I was quickly promoted to front-end web developer for Immunocorp®. Principal creative and technical lead in the start-up and growth of the ARO Company (2012) and HempLand® USA (2014)',
    city: 'Long Beach',
    state: 'CA',
    onsite: 'Hybrid',
    website: 'https://immunocorp.com/',
    title: 'Senior Front End Engineer',
    type: 'Full-Time',
    start: '2000-09',
    end: 'Present',
    details: '',
    notes: [
      'Communicate daily with the founder/CEO—able to effectively collaborate, multitask, prioritize and deliver a broad range of tasks; web design/development, email marketing, page speed optimization, search engine optimization, and graphic design',
      'Extended the product page to match the companies Good, Better, Best acquisition offers, increasing the average web order from $132 to $196',
      'Initialized and grew the companies email newsletter lists to over 90,000 subscribers',
      'Increased internet revenue over 200% by sending customer retention and abandoned cart emails with MailChimp',
    ],

    properties: [
      ['immunocorp.com', 'https://immunocorp.com/'],
      ['arcticrubyoil.com', 'https://arcticrubyoil.com/'],
      ['hemplandusa.com', 'https://hemplandusa.com/'],
      ['ijat.org', 'https://ijat.org/'],
    ],
  },
  {
    company: 'Loyal to Few®',
    description: 'Custom e-commerce solution for a boutique clothing start up',
    city: 'Oceanside',
    state: 'CA',
    onsite: 'Remote',
    website: 'https://loyaltofew.com/',
    title: 'Full Stack Developer',
    type: 'Contract',
    start: '2023-01',
    end: '2023-04',
    details: '',
    notes: [
      'Built using React 18, NextJS 13 (pages directory) and deployed on Vercel via GitHub',
      'Added and customized SnipCart headless e-commerce solution ',
      'Consume SnipCart webhooks with NextJS API endpoints to retrieve shipping options from Easypost',
      'Consume EasyPost webhooks to provide customer with order tracking updates',
      'Created a custom shipping admin to unify and streamline the order packing and shipping process',
      'Created a custom returns admin to unify and streamline the returns process',
      'Added SendGrid for email communication',
    ],
  },
  {
    company: 'Galaxy4Gamers',
    description:
      'Social/gaming platform, hosting skill based competitions for cash and prizes on the PlayStation, Xbox, and Nintendo entertainment systems',
    city: 'Huntington Beach',
    state: 'CA',
    onsite: 'Remote',
    website: '',
    title: 'Co-Founder, CTO',
    type: 'Contract',
    start: '2008-07',
    end: '2011-04',
    details: '',
    notes: [
      'Developed live single and double elimination tournament brackets with drag and drop advancement',
      'Built a custom Ajax chat system for one-to-one, one-to-many and group chats, increasing user engagement over 10x',
      "Incorporated and extended Justin.tv's API (now Twitch.tv) allowing users to broadcast, edit and save video to their profile",
      'Sponsored professional gamers and held the first Beat-a-Pro competitions where users could pay to play their favorite pros',
    ],
  },
  {
    company: 'DiverseSolutions',
    description: 'Custom MLS website solutions for Real Estate professionals',
    city: 'Rancho Santa Margarita',
    state: 'CA',
    onsite: 'Remote',
    website: '',
    title: 'Front End Web Developer',
    type: 'Contract',
    start: '2006-08',
    end: '2008-02',
    notes: [
      "Designed and implemented the company's real estate template website",
      'Developed custom HTML websites for real estate professionals',
      'Directed and created print campaigns, direct mail, trade show displays and signage',
    ],
  },
  {
    company: 'A. L. B. B. Law',
    description: 'Minority owned law firm in San Diego, California',
    city: 'San Diego',
    state: 'CA',
    onsite: 'Remote',
    website: '',
    title: 'Designer, Web Developer',
    type: 'Contract',
    start: '2004-04',
    end: '2006-06',
    notes: [
      "Designed and hand coded the company's minority law firm website",
      'Created a custom newsletter solution with backend manager and builder',
      'Directed all print campaigns, direct mail, trade show displays and signage',
    ],
  },
  {
    company: 'AsSeenIn',
    description:
      'Product placement and virtual “on set” shopping for TV shows on FOX',
    city: 'Hollywood',
    state: 'CA',
    onsite: 'Onsite',
    website: '',
    title: 'Graphic Designer',
    type: 'Full-Time',
    start: '1999-05',
    end: '2000-07',
    notes: [
      'Instituted process standards for product and apparel masking in PhotoShop',
      'Animated website intros and business presentations using Flash',
      'Web design, logo design and print design for various television shows',
    ],
  },
  {
    company: 'eVox Productions',
    description: 'Large scale photo production studio for online retailers',
    city: 'Rancho Dominguez',
    state: 'CA',
    onsite: 'Onsite',
    website: '',
    title: 'Graphic Production Artist',
    type: 'Full-Time',
    start: '1999-01',
    end: '1999-04',
    notes: [
      'Product and apparel masking in PhotoShop for 3D spins in Flash',
      'Advanced photo manipulation and recreation in PhotoShop',
      'Wrote custom PhotoShop actions and batch processes for optimal output',
    ],
  },
];
