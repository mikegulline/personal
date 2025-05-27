'use client';
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import { userData, userDataWP } from '@/data/resume';
import { useCompletion } from 'ai/react';
import { formatDate } from '@/utils/index';
import { Header, Section, PrintResumeProps } from '@/components/resume/index';
import { useRedact, useSetRedact } from '@/state/redact-state';

export default function PrintResume(props: PrintResumeProps) {
  const { company, title, description, companyKey } = props;
  const [jobTitle, setJobTitle] = useState(title);
  const [jobTitleOther, setJobTitleOther] = useState('Web Developer');
  const [isPrinting, setIsPrinting] = useState(false);
  const [wordpress, setWordpress] = useState(false);
  const resumeData = wordpress ? userDataWP : userData;
  const setRedact = useSetRedact();
  const redact = useRedact();
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
          `Led the transition from an outdated shopping cart to a modern eCommerce CMS, implementing a mobile-first responsive website redesign that enhanced user experience and increased conversions by 300%.`,
          `Designed and implemented an interactive "good, better, best" discount tool with React, aligning with outbound customer acquisition and retention strategies to increase average order value by 54%, from $134 to $206.`,
          `Built and trained an AI-powered chat agent to equip off-site call center agents with accurate product and company information, improving customer satisfaction, operational efficiency, and after-hours conversion rates.`,
          `Created AI-generated graphics using Midjourney to visually align with brand identity, cutting design costs and eliminating a $300/month Shutterstock subscription.`,
        ],
      },
      {
        company: 'LoyalToFew',
        role: `Senior ${jobTitle}`,
        location: 'Oceanside, CA',
        dates: 'Dec 2020 - Mar 2021',
        responsibilities: [
          `Designed and built a custom eCommerce site with React, Next.js, TailwindCSS, and NextAuth, integrating a headless shopping cart to improve scalability, performance, and user experience.`,
          `Leveraged Static Site Generation (SSG) in Next.js to dynamically generate static pages and metadata for all products, leading to increased organic traffic and achieving first-page Google rankings above competitors.`,
          `Created a backend admin panel in Next.js to automate shipping, labeling, billing, and email notification workflows, using webhooks to integrate third-party APIs and enhance operational efficiency, reducing order processing time by 500%.`,
          `Developed an automated CSV generation tool in Node.js to export product data for social media and ad platforms, improving data consistency and reducing time-to-market across multiple channels.`,
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
          `Built a social media and tournament gaming platform for PlayStation, Xbox, and Nintendo using JavaScript, PHP, and MySQL, enhancing community engagement and competitive gaming with a sleek UI.`,
          `Developed custom tournament brackets for up to 128 players, featuring drag-and-drop advancement, dispute resolution, and role-based access, improving security and user experience.`,
          `Integrated Justin.tv (now Twitch) API for live streaming and launched the Beat-A-Pro app, increasing engagement and visibility through monetization and real-time communication features.`,
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

Do not site years of experience.

Make sure the response is **formatted naturally**, with clear paragraph breaks.

Respond with only the cover letter text, no extra explanations or greetings.`;

  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-10'>
      <div className='flex gap-2'>
        <input
          type='checkbox'
          checked={wordpress}
          onChange={() => setWordpress((wp) => !wp)}
        />
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
        <button
          onClick={() => setRedact((r) => !r)}
          className='px-4 py-1 bg-teal-500 text-white rounded hover:bg-slate-700'
        >
          {redact ? 'unredact' : 'redact'}
        </button>
      </div>
      <div>
        <div
          ref={contentRef}
          className=' text-black origin-top flex flex-col justify-between text-xs px-[0.5in] pt-[0.5in] pb-[0.35in] w-[8.5in] min-h-[11in] overflow-scroll  bg-white shadow-xl'
        >
          <Header companyKey={companyKey}>{jobTitle}</Header>

          <Section title='PROFESSIONAL EXPERIENCE'>
            {resumeData.work.map((work) => (
              <li key={work.company}>
                <header className='mb-1 flex justify-between font-bold'>
                  <h4>
                    {work.title(jobTitle, jobTitleOther)} @ {work.company}
                  </h4>
                  <p>
                    {work.city}, {work.state} | {work.start} - {work.end}
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

          <Section title='TECHNICAL SKILLS' gap={1}>
            {resumeData.skills.map(({ label, items }) => (
              <li key={label}>
                <p>
                  <strong>{label}:</strong> {items.join(', ')}
                </p>
              </li>
            ))}
          </Section>

          <Section title='Education' gap={1}>
            {resumeData.education.map((school) => (
              <li
                key={school.school}
                className='flex justify-between font-bold'
              >
                <h4>
                  {school.degree} in {school.study} @ {school.school}
                </h4>
                <p>
                  {school.city}, {school.state}
                </p>
              </li>
            ))}
          </Section>

          {/* <Footer companyKey={companyKey}>{jobTitle}</Footer> */}
        </div>
      </div>

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

      <div className='h-[13.2in]'>
        <div
          ref={coverletterRef}
          style={{ transform: isPrinting ? '' : 'scale(1.2)' }}
          className=' text-black origin-top flex flex-col  text-xs p-[0.5in]  w-[8.5in] h-[11in]  bg-white shadow-xl'
        >
          {/* <Header companyKey={companyKey}>{jobTitle}</Header> */}

          <section className='flex-grow py-10 px-10 text-xs'>
            <p className='mb-4'>
              <strong>To:</strong> Hiring Manager @ {company}
              <br />
              <strong>Re:</strong> Application for {title}
              <br />
              <strong>Date:</strong> {formatDate(new Date())}
            </p>
            <hr className='mb-4 border-slate-950' />
            {completion
              .split('\n\n')
              .map((paragraph: string, index: number) => (
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
          {/* <Footer companyKey={companyKey}>{jobTitle}</Footer> */}
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
