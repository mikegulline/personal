import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import Skills from './components/skills';
import Work from './components/work';

export const metadata = {
  title: 'Michael Gulline Software Engineer Resume ',
  description:
    'Javascript, TypeScript, ReactJS, NextJS, NodeJS, SQL, NoSQL, PostgreSQL, MySQL, MongoDB, TailwindCSS',
};

export default function Resume() {
  return (
    <GridContainer columns={3}>
      <div className=' lg:text-lg '>
        <div className='w-full px-5 relative mb-16'>
          <h1 className='text-5xl sm:text-8xl font-black mb-4'>
            Michael Gulline
          </h1>
          <BorderLeft>
            <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
              Software Engineer—<em>Full-Stack/Frontend-Focused</em>
            </h2>
          </BorderLeft>
        </div>

        <div className='px-5  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Skills</h3>
          <Skills />
        </div>
        {/* <div className='px-5  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Summary</h3>
          <p className=''>
            Versatile software engineer with 25+ years of experience in frontend
            development and a solid foundation in backend systems. Adept at
            building high-performance applications using modern technologies
            like JavaScript, TypeScript, React, and Next.js, with proficiency in
            Node.js, SQL, and PHP, and a demonstrated ability to quickly learn
            new languages. Expert in translating design concepts into robust
            technical solutions, with a dedicated focus on scalable and
            maintainable code.
          </p>
        </div> */}

        <div className='  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5'>
            Work History
          </h3>
          <Work />
        </div>

        {/* <div className=' '>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5 sm:pr-10'>
            Side Projects
          </h3>
          <SideProjects />
        </div> */}
      </div>
    </GridContainer>
  );
}
