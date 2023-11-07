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
      'Online retailer and direct mail marketer for health and immune system supplements ',
    city: 'Long Beach',
    state: 'CA',
    onsite: 'Remote',
    website: 'https://immunocorp.com/',
    title: 'Principle Front End Web Developer',
    type: 'Full-Time',
    start: '2000-09',
    end: 'Present',
    details: '',
    notes: [
      'Design, develop, deploy and maintain responsive e-commerce websites for various products and child companies using HTML, CSS, PHP, JavaScript, ReactJS.',
      'Collaborate with executive leadership to shape technology, branding, new business, products, email and direct mail marketing.',
      'A restriction in the companies CMS prevented them from offering their unique direct mail offers online. I presented a solution and implemented a CMS swap, data migration, website redesign and reproduce their offers online. The result was a 54% raise in the average order from $132 to $204.',
      'The company was not collecting user email for marketing purposes. I initiated and grew the their email newsletter list to over 150K subscribers. The newsletter now accounts for 35% of all online revenue.',
    ],

    properties: [
      ['hemplandusa.com', 'https://www.hemplandusa.com/'],
      ['arcticrubyoil.com', 'https://arcticrubyoil.com/'],
      ['iwantmycbd.org', 'https://iwantmycbd.org/'],
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
    title: 'Senior Front End Web Developer',
    type: 'Contract',
    start: '2023-01',
    end: '2023-04',
    details: '',
    notes: [
      'Designed and developed a custom e-commerce solution using React 18, Next 13, TailwindCSS, MongoDB, NextAuth, EasyPost, SendGrid and Headless E-commerce.',
      'Created an admin to unify third-party order and shipping APIs, streamlining the label printing, packing, shipping and return processes.',
      'Built a NextJS API web hook to provide users with up to date shipping notifications via SendGrid email client.',
      'Developed an automated CSV product export at build time to easily share store data with third party advertising channels like Google, Instagram and Facebook.',
      'Implemented automated build and deployment pipelines with Github and Vercel.',
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
    title: 'Front End Web Developer',
    type: 'Contract',
    start: '2008-07',
    end: '2011-04',
    details: '',
    notes: [
      'As the sole developer, I created a social media and tournament gaming platform for the PlayStation, Xbox and Nintendo entertainment systems, offering skill based challenges for cash and prizes.',
      'Users were able to create up to 128 player, single and double elimination tournament brackets with drag and drop advancement, live streaming, group chats, promotions, dispute arbitration and administrative moderation.',
      'Visionary behind the successful Beat-A-Pro web app where users could line up to play their favorite professional gamers in a live broadcast event.',
      'Increased user engagement over 10x by developing a custom chat system, enabling one-to-one, one-to-many and group chats.',
      "Extended Justin.tv's API (Twitch.tv), allowing users to live stream, edit and save gameplay to their user and tournament profile pages.",
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
      "Spearheaded the design and development of the company's real estate template website, resulting in an impactful online presence and improved user experience.",
      'Crafted custom HTML websites tailored specifically for real estate professionals, aligning with their unique branding and business requirements.',
      'Demonstrated expertise in building reusable template components, optimizing development efficiency and ensuring consistency across multiple projects.',
    ],
  },
  {
    company: 'A. L. B. B. Law',
    description: 'Minority owned law firm in San Diego, California',
    city: 'San Diego',
    state: 'CA',
    onsite: 'Remote',
    website: '',
    title: 'Designer, Full Stack Web Developer',
    type: 'Contract',
    start: '2004-04',
    end: '2006-06',
    notes: [
      "Designed and developed the company's minority owned law firm website highlighting each lawyer and their unique skills and achievements.",
      "Developed a custom CMS solution to effectively manage the company's blog, news, and awards sections, enabling seamless content updates and up-to-date information.",
      'Created a tailored newsletter solution with a backend manager and email builder, empowering the company to easily create and distribute professional newsletters, enhancing communication with clients and stakeholders.',
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
      'Established process standards for product and apparel masking in Photoshop, streamlining workflows and ensuring consistent and high-quality results in image editing.',
      'Produced engaging website intros and captivating business presentations by leveraging Flash, effectively capturing audience attention and enhancing brand messaging.',
      "Demonstrated versatility in web design, logo design, and print design for a diverse range of television shows, translating concepts into visually compelling assets that effectively represented each program's unique identity.",
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
      'Utilized Photoshop for product and apparel masking to create 3D spins in Flash.',
      'Exhibited proficiency in advanced photo manipulation and recreation techniques in Photoshop, transform images with precision and creativity.',
      'Developed custom Photoshop actions and implemented batch processes to automate repetitive tasks, optimizing workflow ensuring consistent and high-quality output.',
    ],
  },
];
