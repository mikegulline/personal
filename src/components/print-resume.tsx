'use client';
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import { userData } from '@/data/resume';
import { useCompletion } from 'ai/react';
import { formatDate } from '@/utils/index';
import {
  Header,
  Footer,
  Section,
  PrintResumeProps,
} from '@/components/resume/index';

export default function PrintResume(props: PrintResumeProps) {
  const { company, title, description, companyKey } = props;
  const [jobTitle, setJobTitle] = useState(title);
  const [jobTitleOther, setJobTitleOther] = useState('Web Developer');
  const [isPrinting, setIsPrinting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const coverletterRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle:
      'Michael-Gulline-' +
      jobTitle.trim().replace(/ /gi, '-') +
      `-${companyKey}`,
  });
  const reactToPrintLeterFn = useReactToPrint({
    contentRef: coverletterRef,
    documentTitle: `Michael-Gulline-Cover-Letter-${companyKey}`,
  });
  const { completion, complete } = useCompletion({
    api: '/api/completion',
  });

  const prepJSON = {
    skills: {
      frontendDevelopment: [
        'HTML',
        'CSS',
        'TailwindCSS',
        'SASS',
        'LESS',
        'Flexbox',
        'Grid',
        'Animations',
      ],
      frameworksLibraries: [
        'JavaScript (ES6)',
        'TypeScript',
        'React',
        'NextJS',
        'Redux',
        'Zustand',
        'Web APIs',
      ],
      backendDatabases: [
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
      testingOptimization: [
        'Git',
        'Jest',
        'React Testing Library',
        'SEO',
        'Web Performance',
        'Optimization',
      ],
      uxUi: [
        'MUI',
        'Ant Design',
        'Shadcn',
        'Radix UI',
        'Bootstrap',
        'Storybook',
        'Responsive UI',
        'Accessibility',
      ],
      graphics: [
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
    workExperience: [
      {
        company: 'KumatoLabs',
        role: `Senior ${jobTitle}`,
        location: 'Signal Hill, CA',
        dates: 'Apr 2021 - Present',
        responsibilities: [
          `Migrated the company's defunct shopping cart to a modern e-commerce solution, leading the mobile-first website redesign that boosted user engagement and conversions by 300%.`,
          `Pioneered the introduction of React microfrontends and built an interactive “good, better, best” discount structure to align with customer retention efforts, leading to a 54% increase in the average order value from $134 to $206. `,
          `Integrated third-party analytics to monitor campaign engagement, track user activity, and A/B testing.`,
          `Implemented code splitting, tree shaking, lazy loading and image optimization, reducing page load times by 25%.`,
          `Generated AI-driven graphics using Midjourney, aligning brand identity and saving $300/month on Shutterstock.`,
        ],
      },
      {
        company: 'LoyalToFew',
        role: `Senior ${jobTitle}`,
        location: 'Oceanside, CA',
        dates: 'Dec 2020 - Mar 2021',
        responsibilities: [
          `Developed a headless e-commerce site with React, NextJS, TailwindCSS, and NextAuth, emphasizing modular architecture and minimal, user-friendly UX/UI.`,
          `Created an admin tool to integrate third-party shipping, labeling, and billing APIs, streamlining operations and reducing packing, and shipping times by 500%.`,
          `Enhanced site performance with mobile-first design, async image rendering, and CSV exports in NodeJS, boosting sales conversions by 25% and improving SEO.`,
        ],
      },
      {
        company: 'HempLandUSA',
        role: `Senior ${jobTitleOther}`,
        location: 'Signal Hill, CA',
        dates: 'Nov 2015 - Dec 2020',
        responsibilities: [
          `Led creative and development initiatives, covering branding, product packaging, and CMS development.`,
          `Collaborated with legal teams to navigate CBD regulations, ensuring compliance and seamless payment processing.`,
        ],
      },
      {
        company: 'Immunocorp',
        role: `${jobTitleOther}`,
        location: 'Long Beach, CA',
        dates: 'Mar 2011 - Sep 2015',
        responsibilities: [
          `Led the end-to-end design, development, and management of responsive e-commerce sites, blogs, and landing pages, ensuring brand consistency and optimizing user experience from concept to deployment.`,
          `Developed an interactive dashboard, enabling executive leadership and shareholders to visually consume complex data points across multiple initiatives using modern UX/UI.`,
        ],
      },
      {
        company: 'Galaxy4Gamers',
        role: `${jobTitleOther}`,
        location: 'Huntington Beach, CA',
        dates: 'Jun 2008 - Mar 2011',
        responsibilities: [
          `Built a social media and tournament gaming app for PlayStation, Xbox, and Nintendo using JavaScript, PHP, and MySQL, enhancing community engagement and competitive gaming with a sleek UI.`,
          `Developed double elimination brackets for up to 128 players, featuring drag-and-drop advancement, dispute resolution, promotions, and role-based management to improve security and user experience.`,
          `Integrated Justin.tv (now Twitch) API for live streaming and launched the Beat-A-Pro app, increasing engagement and visibility through innovative monetization and communication features.`,
        ],
      },
    ],
    education: [
      {
        institution: 'Western Governors University',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        location: 'Salt Lake City, UT',
        dates: 'Feb 2025 - July 2025',
      },
      {
        institution: 'Brooks College',
        degree: 'Associate of Science',
        fieldOfStudy: 'Graphic Design',
        location: 'Long Beach, CA',
        dates: 'Aug 1997 - Jan 1999',
      },
    ],
  };

  const prompt = `
You are a professional career assistant. Generate a well-structured, professional cover letter based on the following details. The response should only contain the text of the cover letter—no greetings, contact information, or extra formatting.

Name: Michael Gulline
Resume: ${JSON.stringify(prepJSON)}
Job Title: ${title}
Company: ${company}
Job Description: ${description}

The cover letter should be structured into at least three well-defined paragraphs:
1. **Opening Paragraph:** Clearly express enthusiasm for the position and company, mentioning how your skills and experience align with their mission.
2. **Body Paragraph(s):** Highlight key experiences, skills, and achievements that are directly relevant to the job description. Use specific examples from past work to demonstrate impact.
3. **Closing Paragraph:** Reaffirm interest in the role, express enthusiasm for a conversation, and thank the reader for their time.

Make sure the response is **formatted naturally**, with clear paragraph breaks.

Respond with only the cover letter text, no extra explanations or greetings.`;

  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-10'>
      <div className='flex gap-2'>
        <input
          type='text'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='px-2 flex h-10 border border-slate-400 border-solid rounded'
        />
        <input
          type='text'
          value={jobTitleOther}
          onChange={(e) => setJobTitleOther(e.target.value)}
          className='px-2 flex h-10 border border-slate-400 border-solid rounded'
        />
        <button
          onClick={() => {
            setIsPrinting(true);
            setTimeout(() => {
              reactToPrintFn();
              setIsPrinting(false);
            }, 10);
          }}
          className='px-4 py-1 bg-teal-500 text-white rounded hover:bg-slate-700'
        >
          Print
        </button>
      </div>
      <div className='h-[13.2in]'>
        <div
          ref={contentRef}
          style={{ transform: isPrinting ? '' : 'scale(1.2)' }}
          className=' text-black origin-top flex flex-col justify-between text-xs p-[0.5in] py-[0.25in]  w-[8.5in] h-[11in]  bg-white shadow-xl'
        >
          <Header>{jobTitle}</Header>

          <Section title='TECHNICAL SKILLS' gap={1}>
            {userData.skills.map(({ label, items }) => (
              <li key={label}>
                <p>
                  <strong>{label}:</strong> {items.join(', ')}
                </p>
              </li>
            ))}
          </Section>

          <Section title='PROFESSIONAL EXPERIENCE'>
            {userData.work.map((work) => (
              <li key={work.company}>
                <header className='mb-1 flex justify-between'>
                  <h4 className='font-bold'>
                    {work.title(jobTitle, jobTitleOther)}
                  </h4>
                  <p>
                    <strong>{work.company}</strong>, {work.city}, {work.state} •{' '}
                    {work.start} - {work.end}
                  </p>
                </header>
                <ul className='list-disc list-outside ml-4 flex flex-col gap-1'>
                  {work.items.map((item, i) => (
                    <li key={`${work.company}-${i}`}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Section>

          <Section title='Education' gap={1}>
            {userData.education.map((school) => (
              <li key={school.school} className='flex justify-between'>
                <h4 className='font-bold'>
                  {school.degree} in {school.study}
                </h4>
                <p>
                  <strong>{school.school}</strong>, {school.city},{' '}
                  {school.state}
                </p>
              </li>
            ))}
          </Section>

          <Footer companyKey={companyKey}>{jobTitle}</Footer>
        </div>
      </div>

      {!!description && (
        <form
          className='pt-10'
          onSubmit={(e) => {
            e.preventDefault();
            complete(prompt);
          }}
        >
          <button
            type='submit'
            className='px-4 py-1 bg-teal-500 text-white rounded hover:bg-slate-700'
          >
            Create Coverletter
          </button>
          {!!completion && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsPrinting(true);
                setTimeout(() => {
                  reactToPrintLeterFn();
                  setIsPrinting(false);
                }, 10);
              }}
              className='ml-2 px-4 py-1 bg-teal-500 text-white rounded hover:bg-slate-700'
            >
              Print
            </button>
          )}
        </form>
      )}

      <div className='h-[13.2in]'>
        <div
          ref={coverletterRef}
          style={{ transform: isPrinting ? '' : 'scale(1.2)' }}
          className=' text-black origin-top flex flex-col  text-xs px-[0.5in] py-[0.25in]  w-[8.5in] h-[11in]  bg-white shadow-xl'
        >
          <Header>{jobTitle}</Header>

          <section className='flex-grow py-10 px-10 text-xs'>
            <p className='mb-4'>
              <strong>To:</strong> Hiring Manager @ {company}
              <br />
              <strong>Re:</strong> Application for {title}
              <br />
              <strong>Date:</strong> {formatDate(new Date())}
            </p>
            <hr className='mb-4 border-slate-950' />
            {completion.split('\n\n').map((paragraph, index) => (
              <p key={index} className='mb-4'>
                {paragraph}
              </p>
            ))}
            <hr className='mb-4 border-slate-950' />
            <p>
              Looking forward to the opportunity,
              <br />
              Michael Gulline
            </p>
          </section>
          <Footer companyKey={companyKey}>{jobTitle}</Footer>
        </div>
      </div>

      <div className='max-w-3xl text-left my-10'>
        {description?.split('\n').map((paragraph, index) => {
          if (paragraph.trim())
            return (
              <p key={`p${index}`} className='mb-4'>
                {paragraph}
              </p>
            );
        })}
      </div>
    </div>
  );
}
