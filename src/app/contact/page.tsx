import Link from 'next/link';
import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import { TfiLinkedin } from 'react-icons/tfi';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Mike Gulline—Full Stack Web Developer (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Contact() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 relative text-left sm:text-center'>
        <h1 className='text-7xl sm:text-9xl font-black mb-4'>Contact</h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            <span>Let&rsquo;s keep in touch </span>
          </h2>
        </BorderLeft>
        <Link
          href='https://www.linkedin.com/in/michael-gulline/'
          target='blank'
          title='Connect with me on LinkedIn'
          className='m-auto flex w-16 h-16 rounded-full border-2 border-slate-700 hover:bg-white hover:text-teal-400 hover:border-teal-400  bg-slate-700 text-white items-center justify-center cursor-pointer'
        >
          <TfiLinkedin />
        </Link>
      </div>
    </GridContainer>
  );
}
