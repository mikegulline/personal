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
    onsite: 'Hybrid',
    website: 'https://immunocorp.com/',
    title: 'Design Director, Full Stack Web Developer',
    type: 'Full-Time',
    start: '2000-09',
    end: 'Present',
    details: '',
    notes: [
      'Hired as a designer and Flash developer, I quickly evolved into a full stack web developer.',
      'Design, develop and maintain responsive e-commerce websites for multiple companies using Adobe Suite, Figma, HTML, CSS3, SCSS, React.js, TypeScript, JavaScript, jQuery, Ajax, PHP, MySQL, Shopify, WordPress, WooCommerce, MailChimp, Klaviyo.',
      'Collaborate closely with a remote copywriting team and the owner/CEO to effectively translate their vision into reality.',
      "Developed a custom discount plug-in for the company's unique online pricing options.",
      'Fully integrated online newsletters using the MailChimp API, with custom sign-up forms, campaign automation and tracking.',
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
    title: 'Full Stack Web Developer',
    type: 'Contract',
    start: '2023-01',
    end: '2023-04',
    details: '',
    notes: [
      'Built with React 18 and Next.js 13, deployed on Vercel via GitHub.',
      'Integrated and customized SnipCart headless e-commerce solution.',
      'Utilized Next.js API endpoints to consume SnipCart webhooks for retrieving EasyPost shipping options and to consume EasyPost webhooks for providing order tracking updates. Also created custom shipping and returns admins to streamline the corresponding processes. Additionally, integrated SendGrid for email communication.',
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
    title: 'Co-Founder, CTO, Full Stack Web Developer',
    type: 'Contract',
    start: '2008-07',
    end: '2011-04',
    details: '',
    notes: [
      'Created live tournament brackets featuring single and double elimination formats with intuitive drag and drop functionality for seamless advancement.',
      'Engineered a custom chat system that significantly enhanced user engagement, enabling one-to-one, one-to-many, and group conversations within the platform.',
      "Extended the functionality of Justin.tv's API (Twitch.tv), empowering users to live stream, edit, and save their gameplay videos directly to their profiles.",
      'Sponsored professional gamers, organized and hosted the first live Beat-a-Pro competitions, where users could pay to play their favorite professional gamer.',
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
