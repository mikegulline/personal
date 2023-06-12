import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import Icons from './components/icons';
import Skills from './components/skills';
import Work from './components/work';

export const metadata = {
  title: 'Front End Engineer Resume (Mike Gulline)',
  description:
    'Front End Engineer Resume of Mike Gulline (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Resume() {
  return (
    <GridContainer columns={3}>
      <main className='py-20 md:py-40 lg:py-60 flex-col mt-24'>
        <div className='w-full px-5 relative mb-24 sm:pr-10'>
          <h1 className='text-5xl sm:text-9xl font-black mb-4'>Resume</h1>
          <BorderLeft>
            <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
              Mike Gulline—<em>Front End Engineer</em>
            </h2>
          </BorderLeft>
          <p className='text-xl leading-8  '>
            Full Stack Web Developer with over 24 years of experience building
            responsive web apps and e-commerce solutions from concept to
            completion. Motivated mentor, student and team player, excited to
            build scalable web apps with modern <em>JavaScript</em>,{' '}
            <em>TypeScript</em>, <em>React</em> and <em>Next JS</em>.
          </p>
          <Icons />
        </div>
        <div className='w-full lg:flex'>
          <div className='lg:w-2/3 '>
            <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5 sm:pr-10'>
              Work History
            </h3>
            <Work />
          </div>
          <div className='lg:w-1/3 pl-5 pr-5'>
            <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Skills</h3>
            <Skills />
          </div>
        </div>
      </main>
    </GridContainer>
  );
}
