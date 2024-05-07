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
    company: 'Loyal to Few®',
    description: 'Custom e-commerce solution for a boutique clothing start up',
    city: 'Oceanside',
    state: 'CA',
    onsite: 'Remote',
    website: 'https://loyaltofew.com/',
    title: 'Contract Creative Developer',
    type: 'Contract',
    start: '2023-01',
    end: '2023-04',
    details: '',
    notes: [
      'Designed and developed a headless e-commerce website using React 18, NextJS 13, TailwindCSS, and NextAuth.',
      'Integrated third-party order and shipping APIs, optimizing label printing, packing, shipping and return processes.',
      'Optimized for page speeds, sales conversions, search engine ranking SEO and responsive mobile first architecture.',
      'Created an async predev script to generate base64 string blur data for dynamically rendered images in NextJS.',
      'Built a CSV product export in NodeJS to seamlessly integrate with Google, Instagram, and Facebook advertising.',
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
    title: 'Founding Creative Developer',
    type: 'Contract',
    start: '2008-07',
    end: '2011-04',
    details: '',
    notes: [
      'Created a social media and tournament gaming platform for the PlayStation, Xbox, and Nintendo systems.',
      'Developed single and double elimination tournament bracketing systems for up to 128 players and or teams.',
      'Implemented role based accounts and administration for users, teams, admins, monitors and event promoters.',
      'Created a custom chat system for one to one, one to many and group chats, increasing user engagement 10 times.',
      'Integrated Justin.tv API (Twitch.tv) allowing users to stream, edit, and archive gameplay on tournament pages.',
      'Creator of the Beat-A-Pro web application, allowing users to pay to play pro gamers in a weekly live stream.',
    ],
  },
  {
    company: 'Immunocorp®',
    description:
      'Online retailer and direct mail marketer for health and immune system supplements ',
    city: 'Long Beach',
    state: 'CA',
    onsite: 'Remote',
    website: 'https://immunocorp.com/',
    title: 'Principle Creative Developer',
    type: 'Full-Time',
    start: '2011-05',
    end: 'Present',
    details: '',
    notes: [
      'Led the development of responsive e-commerce websites, blogs and landing pages for nutritional supplements.',
      'Collaborated directly with the C-Suite executives, contributing to new business growth and product development.',
      'Redesigned the product page discount structure, achieving a 54% boost in the average order from $132 to $204.',
      'Initiated and managed the e-newsletter, growing the subscriber base to 150K, accounting for 46% of online sales.',
    ],

    properties: [
      ['cho-wa.com', 'https://www.cho-wa.com/'],
      ['arcticrubyoil.com', 'https://arcticrubyoil.com/'],
      ['ijat.org', 'https://ijat.org/'],
    ],
  },
  {
    company: 'HempLand USA',
    description: 'Hemp CBD products made and manufactured in the USA.',
    city: 'Huntington Beach',
    state: 'CA',
    onsite: 'Hybrid',
    website: 'https://www.hemplandusa.com/',
    title: 'Founding Creative Developer',
    type: 'Full-Time',
    start: '2014-12',
    end: 'Present',
    details: '',
    notes: [
      'Creative lead for all identity, branding, packaging, B2C and e-newsletter marketing in a startup environment.',
      'Designed, developed and maintained a hemp compliant e-commerce CMS with WordPress and WooCommerce.',
      'Developed custom hooks to apply unique discount options and time sensitive offers boosting conversion rates.',
    ],
  },

  // {
  //   company: 'DiverseSolutions',
  //   description: 'Custom MLS website solutions for Real Estate professionals',
  //   city: 'Rancho Santa Margarita',
  //   state: 'CA',
  //   onsite: 'Remote',
  //   website: '',
  //   title: 'Front End Web Developer',
  //   type: 'Contract',
  //   start: '2006-08',
  //   end: '2008-02',
  //   notes: [
  //     "Spearheaded the design and development of the company's real estate template website, resulting in an impactful online presence and improved user experience.",
  //     'Crafted custom HTML websites tailored specifically for real estate professionals, aligning with their unique branding and business requirements.',
  //     'Demonstrated expertise in building reusable template components, optimizing development efficiency and ensuring consistency across multiple projects.',
  //   ],
  // },
  // {
  //   company: 'A. L. B. B. Law',
  //   description: 'Minority owned law firm in San Diego, California',
  //   city: 'San Diego',
  //   state: 'CA',
  //   onsite: 'Remote',
  //   website: '',
  //   title: 'Designer, Full Stack Web Developer',
  //   type: 'Contract',
  //   start: '2004-04',
  //   end: '2006-06',
  //   notes: [
  //     "Designed and developed the company's minority owned law firm website highlighting each lawyer and their unique skills and achievements.",
  //     "Developed a custom CMS solution to effectively manage the company's blog, news, and awards sections, enabling seamless content updates and up-to-date information.",
  //     'Created a tailored newsletter solution with a backend manager and email builder, empowering the company to easily create and distribute professional newsletters, enhancing communication with clients and stakeholders.',
  //   ],
  // },
  // {
  //   company: 'AsSeenIn',
  //   description:
  //     'Product placement and virtual “on set” shopping for TV shows on FOX',
  //   city: 'Hollywood',
  //   state: 'CA',
  //   onsite: 'Onsite',
  //   website: '',
  //   title: 'Graphic Designer',
  //   type: 'Full-Time',
  //   start: '1999-05',
  //   end: '2000-07',
  //   notes: [
  //     'Established process standards for product and apparel masking in Photoshop, streamlining workflows and ensuring consistent and high-quality results in image editing.',
  //     'Produced engaging website intros and captivating business presentations by leveraging Flash, effectively capturing audience attention and enhancing brand messaging.',
  //     "Demonstrated versatility in web design, logo design, and print design for a diverse range of television shows, translating concepts into visually compelling assets that effectively represented each program's unique identity.",
  //   ],
  // },
  // {
  //   company: 'eVox Productions',
  //   description: 'Large scale photo production studio for online retailers',
  //   city: 'Rancho Dominguez',
  //   state: 'CA',
  //   onsite: 'Onsite',
  //   website: '',
  //   title: 'Graphic Production Artist',
  //   type: 'Full-Time',
  //   start: '1999-01',
  //   end: '1999-04',
  //   notes: [
  //     'Utilized Photoshop for product and apparel masking to create 3D spins in Flash.',
  //     'Exhibited proficiency in advanced photo manipulation and recreation techniques in Photoshop, transform images with precision and creativity.',
  //     'Developed custom Photoshop actions and implemented batch processes to automate repetitive tasks, optimizing workflow ensuring consistent and high-quality output.',
  //   ],
  // },
];
