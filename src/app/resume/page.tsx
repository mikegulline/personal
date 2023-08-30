import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import Icons from './components/icons';
import Skills from './components/skills';
import Work from './components/work';

export const metadata = {
  title: 'Full Stack Web Developer Resume (Mike Gulline)',
  description:
    'Full Stack Web Developer Resume of Mike Gulline (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Resume() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 lg:pr-20 relative mb-24'>
        <h1 className='text-5xl sm:text-9xl font-black mb-4'>Resume</h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            Mike Gulline—<em>Full Stack Web Developer</em>
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8  '>
          Creative professional with 25 years of design and full-stack web
          development experience. Proficient in taking projects from idea to
          completion with minimal over-site. Looking to apply my full-stack
          skills in a team environment building modern, scalable web apps.
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
    </GridContainer>
  );
}
