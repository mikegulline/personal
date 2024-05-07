import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import Icons from './components/icons';
import Skills from './components/skills';
import Work from './components/work';

export const metadata = {
  title: 'Frontend Web Developer Resume (Mike Gulline)',
  description:
    'Frontend Engineer Resume of Mike Gulline (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Resume() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 lg:pr-20 relative mb-24'>
        <h1 className='text-5xl sm:text-9xl font-black mb-4'>Resume</h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            Creative Frontend Developer/Engineer
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8'>
          Creative frontend engineer with a strong full-stack background and a
          passion for building responsive, user-centric applications. Expertise
          in leading design and development efforts, performance optimization
          and enhancing UX/UI through modern design patterns and principles.
          Looking for a cross functional team to learn with, mentor and build
          scaleable, future proof software that meets and exceeds all
          expectations.
        </p>
      </div>

      <div className='px-5  mb-24'>
        <h3 className='text-5xl sm:text-6xl mb-8 font-bold '>Skills</h3>
        <Skills />
      </div>

      <div className=' '>
        <h3 className='text-5xl sm:text-6xl mb-8 font-bold px-5 sm:pr-10'>
          Work History
        </h3>
        <Work />
      </div>
    </GridContainer>
  );
}
