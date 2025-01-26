'use client';
import Link from 'next/link';
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import QRCode from 'react-qr-code';

const userData = {
  header: {
    name: 'Michael Gulline',
    contact: {
      city: 'Eastvale',
      state: 'CA',
      phone: '949-290-8705',
    },
    links: [
      (key: string) => ({
        label: 'Portfolio',
        url: `https://www.gulline.com/v1/${key}/portfolio`,
      }),
      '•',
      (key: string) => ({
        label: 'LinkedIn',
        url: `https://www.gulline.com/v1/${key}/linkedin`,
      }),
      '•',
      (key: string) => ({
        label: 'GitHub',
        url: `https://www.gulline.com/v1/${key}/github`,
      }),
      '•',
      (key: string) => ({
        label: 'michaelgulline@gmail.com',
        url: `https://www.gulline.com/v1/${key}/mail`,
      }),
    ],
  },
  skills: [
    {
      label: 'Frontend Development',
      items: [
        'HTML',
        'CSS',
        'TailwindCSS',
        ' SASS',
        'LESS',
        'Flexbox',
        'Grid',
        'Animations',
      ],
    },
    {
      label: 'Frameworks & Libraries',
      items: [
        'JavaScript (ES6)',
        'TypeScript',
        'React',
        'NextJS',
        'Redux',
        'Zustand',
        'Web APIs',
      ],
    },
    {
      label: 'Backend & Databases',
      items: [
        'NodeJS',
        'Express',
        'PHP',
        'Python',
        'Java',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'GraphQL',
      ],
    },
    {
      label: 'Testing & Optimization',
      items: [
        'Git',
        'Jest',
        'React Testing Library',
        'SEO',
        'Web Performance',
        'Optimization',
      ],
    },
    {
      label: 'UX/UI',
      items: [
        'MUI',
        'Ant Design',
        'Shadcn',
        'Radix UI',
        'Bootstrap',
        'Storybook',
        'Responsive UI',
        'Accessibility',
      ],
    },
    {
      label: 'Graphics',
      items: [
        'Figma',
        'Adobe Suite',
        'PhotoShop',
        'Illustrator',
        'InDesign',
        'Express',
        'AfterEffects',
        'MidJourney',
      ],
    },
  ],
  work: [
    {
      company: 'KumatoLabs',
      title: (title: string) => `Lead ${title}`,
      city: 'Signal Hill',
      state: 'CA',
      start: 'Apr 2021',
      end: 'Present',
      url: (key: string) => `https://www.gulline.com/v1/${key}/kumato`,
      items: [
        `Migrated the company's defunct shopping cart to a modern e-commerce solution, leading the mobile-first website redesign that boosted user engagement and conversions by 300%.`,
        `Pioneered the introduction of React microfrontends and built an interactive “good, better, best” discount structure to align with customer retention efforts, leading to a 54% increase in the average order value from $134 to $206.`,
        `Integrated third-party analytics to monitor campaign engagement, track user activity, and A/B testing.`,
        `Implemented code splitting, tree shaking, lazy loading and image optimization, reducing page load times by 25%.`,
        `Generated AI-driven graphics using Midjourney, aligning brand identity and saving $300/month on Shutterstock.`,
      ],
    },
    {
      company: 'LoyalToFew',
      title: (title: string) => `Senior ${title}`,
      city: 'Oceanside',
      state: 'CA',
      start: 'Dec 2020',
      end: 'Mar 2021',
      url: (key: string) => `https://www.gulline.com/v1/${key}/loyaltofew`,
      items: [
        `Developed a headless e-commerce site with React 18, NextJS 13, TailwindCSS, and NextAuth, emphasizing modular architecture and minimal, user-friendly UX/UI.`,
        `Created an admin tool to integrate third-party shipping, labeling, and billing APIs, streamlining operations and reducing packing, and shipping times by 500%.`,
        `Enhanced site performance with mobile-first design, async image rendering, and CSV exports in NodeJS, boosting sales conversions by 25% and improving SEO.`,
      ],
    },
    {
      company: 'HempLandUSA',
      title: (title: string) => `Senior ${title}`,
      city: 'Signal Hill',
      state: 'CA',
      start: 'Nov 2015',
      end: 'Dec 2020',
      url: (key: string) => `https://www.gulline.com/v1/${key}/hemplandusa`,
      items: [
        `Directed all creative and development initiatives, spanning branding, product packaging, responsive web design, custom CMS, e-commerce, and email marketing.`,
        `Worked with copywriters and FDA compliance to navigate CBD regulations, maintaining compliance and quickly resolving issues with banks and payment processors during service suspensions.`,
      ],
    },
    {
      company: 'Immunocorp',
      title: (title: string) => `${title}`,
      city: 'Long Beach',
      state: 'CA',
      start: 'Mar 2011',
      end: 'Sep 2015',
      url: (key: string) => `https://www.gulline.com/v1/${key}/immunocorp`,
      items: [
        `Led the end-to-end design, development, and management of responsive e-commerce sites, blogs, and landing pages, ensuring brand consistency and optimizing user experience from concept to deployment.`,
        `Developed an interactive dashboard, enabling executive leadership and shareholders to visually consume complex data points across multiple initiatives using modern UX/UI.`,
      ],
    },
    {
      company: 'Galaxy4Gamers',
      title: (title: string) => `${title}`,
      city: 'Huntington Beach',
      state: 'CA',
      start: 'Jun 2008',
      end: 'Mar 2011',
      items: [
        `Built a social media and tournament gaming app for PlayStation, Xbox, and Nintendo using JavaScript, PHP, and MySQL, enhancing community engagement and competitive gaming with a sleek UI.`,
        `Developed double elimination brackets for up to 128 players, featuring drag-and-drop advancement, dispute resolution, promotions, and role-based management to improve security and user experience.`,
        `Integrated Justin.tv (now Twitch) API for live streaming and launched the Beat-A-Pro app, increasing engagement and visibility through innovative monetization and communication features.`,
      ],
    },
  ],
  education: [
    {
      school: 'Western Governors University',
      degree: 'Bachelor of Science',
      study: 'Computer Science',
      city: 'Salt Lake City',
      state: 'UT',
      start: 'Feb 2025',
      end: 'July 2025',
    },
    {
      school: 'Brooks College',
      degree: 'Associate of Science',
      study: 'Graphic Design',
      city: 'Long Beach',
      state: 'CA',
      start: 'Aug 1997',
      end: 'Jan 1999',
    },
  ],
};

type PrintResumeProps = {
  title: string;
  companyKey: string;
};

export default function PrintResume({ title, companyKey }: PrintResumeProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [jobTitle, setJobTitle] = useState(title);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle:
      'Michael-Gulline-' + jobTitle.replace(/ /gi, '-') + `-${companyKey}`,
  });
  const contact = `${userData.header.contact.city}, ${userData.header.contact.state} •  ${userData.header.contact.phone}`;
  const links = () => (
    <>
      {userData.header.links.map((fn, i) => {
        if (typeof fn === 'string') {
          return <span key={`${fn}-${i}`}> {fn} </span>;
        }
        const { label, url } = fn(companyKey);
        return (
          <Link
            key={label}
            href={url}
            target='_blank'
            className='underline text-white hover:text-teal-200'
          >
            {label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-10'>
      <div className='w-96 flex gap-2'>
        <input
          type='text'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='px-2 flex flex-grow h-10 border border-slate-400 border-solid rounded'
        />
        <button
          onClick={() => reactToPrintFn()}
          className='px-4 py-1 bg-teal-500 text-white rounded hover:bg-slate-700'
        >
          Print
        </button>
      </div>
      <div
        ref={contentRef}
        className=' flex flex-col justify-between text-xs px-[0.5in] py-[0.25in]  w-[8.5in] h-[11in]  bg-white shadow-xl'
      >
        <div className='flex gap-4 -mx-4 bg-slate-700 items-center rounded '>
          <header className=' flex flex-grow flex-col text-center pt-3 pb-4 text-white'>
            <h1 className='text-4xl font-bold'>{userData.header.name}</h1>
            <h2 className='font-medium text-lg text-teal-100'>
              <strong>{jobTitle}</strong> • {contact}
            </h2>
            <p className='font-medium'>{links()}</p>
          </header>
        </div>

        <section>
          <h3 className='uppercase font-bold text-[18px] border-b border-slate-800 mb-2 pb-1'>
            Skills
          </h3>
          <ul className='flex flex-col gap-1'>
            {userData.skills.map(({ label, items }) => (
              <li key={label}>
                <strong>{label}:</strong> {items.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className='uppercase font-bold text-[18px] border-b border-slate-800 mb-2 pb-1'>
            Work
          </h3>
          <ul className='flex flex-col gap-2'>
            {userData.work.map((work) => (
              <li key={work.company}>
                <h4 className='flex justify-between mb-1'>
                  <strong>
                    {work.url ? (
                      <Link
                        href={work.url(companyKey)}
                        target='_blank'
                        className='text-teal-500 underline hover:text-black'
                      >
                        {work.company}
                      </Link>
                    ) : (
                      work.company
                    )}{' '}
                    • {work.title(jobTitle)}
                  </strong>
                  <strong>
                    {work.city}, {work.state} • {work.start} - {work.end}
                  </strong>
                </h4>
                <ul className='list-disc list-outside marker:text-teal-500 ml-4'>
                  {work.items.map((item, i) => (
                    <li key={`${work.company}-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className='uppercase font-bold text-[18px] border-b border-slate-800 mb-2 pb-1'>
            Education
          </h3>
          <ul className='flex flex-col'>
            {userData.education.map((school) => (
              <li key={school.school}>
                <h4 className='flex justify-between'>
                  <strong>
                    {school.school} • {school.degree} • {school.study}
                  </strong>
                  <span>
                    <strong>
                      {school.city}, {school.state} • {school.start} -{' '}
                      {school.end}
                    </strong>
                  </span>
                </h4>
              </li>
            ))}
          </ul>
        </section>
        <footer className='rounded bg-slate-700 text-white py-3 px-4 -mx-4 text-right flex justify-between'>
          <span>
            &copy; {new Date().getFullYear()} <strong>Michael Gulline</strong>,{' '}
            {jobTitle}. All Rights Reserved.
          </span>
          <span className='text-teal-100'>
            <strong>Resume ID:</strong> {companyKey}
          </span>
        </footer>
      </div>
    </div>
  );
}
