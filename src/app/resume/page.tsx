import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import Icons from './components/icons';
import Skills from './components/skills';
import Work from './components/work';
import SideProjects from './components/side-projects';

export const metadata = {
  title: 'Resume—Mike Gulline',
  description:
    'Frontend Engineer Resume of Mike Gulline (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Resume() {
  return (
    <GridContainer columns={3}>
      <div className=' lg:text-lg '>
        <div className='w-full px-5 lg:pr-20 relative mb-16'>
          <h1 className='text-5xl sm:text-9xl font-black mb-4'>Resume</h1>
          <BorderLeft>
            <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
              Creative Frontend Engineer
            </h2>
          </BorderLeft>
        </div>

        <div className='px-5  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Skills</h3>
          <Skills />
        </div>

        <div className='  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5 sm:pr-10'>
            Work History
          </h3>
          <Work />
        </div>

        <div className=' '>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5 sm:pr-10'>
            Side Projects
          </h3>
          <SideProjects />
        </div>

        <div className='px-5  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Summary</h3>
          <p className=''>
            Accomplished full-stack creative with over twenty years of
            experience designing and developing robust, highly-performant web
            applications. Skilled in a broad range of technologies, including
            HTML, CSS, JavaScript, TypeScript, React, and NextJS, coupled with a
            solid understanding of backend systems. Known for enhancing user
            experience and optimizing site performance through innovative design
            and development. Successfully leads projects independently,
            converting business needs into scalable technical solutions that
            boost engagement and sales. Demonstrated ability to innovate and
            mentor in diverse technical environments.
          </p>
        </div>

        <div className='px-5  mb-16'>
          <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Objective</h3>
          <p className=''>
            Aspiring to join a dynamic, cross-functional team where I can
            collaborate on innovative projects, share knowledge, and continue to
            grow as an engineer. Eager to expand my extensive design and
            frontend expertise into DevOps, CI/CD, Test-Driven Development
            (TDD), and end-to-end testing (E2E). Passionate about leveraging
            open-source technologies and advanced backend solutions to build
            future-proof software that not only meets but exceeds expectations.
            Committed to lifelong learning and embracing challenges to develop
            cutting-edge solutions. Interested in Fintech, AI, Web3 and Python.
          </p>
        </div>
      </div>
    </GridContainer>
  );
}
