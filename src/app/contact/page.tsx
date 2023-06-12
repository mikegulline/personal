import Link from 'next/link';
import GridContainer from '@/components/grid-container';
import BorderLeft from '@/components/border-left';
import { TfiLinkedin } from 'react-icons/tfi';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Mike Gulline—Front End Engineer (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Contact() {
  return (
    <GridContainer columns={3}>
      <main className='py-20 md:py-40 lg:py-60 flex-col mt-24'>
        <div className='w-full px-5 relative mb-12 sm:mb-24 sm:pr-10 text-left sm:text-center'>
          <h1 className='text-7xl sm:text-9xl font-black mb-4'>Contact</h1>
          <BorderLeft>
            <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
              <span>Let&rsquo;s keep in touch </span>
            </h2>
          </BorderLeft>
          <Link
            href='https://www.linkedin.com/in/michael-gulline/'
            target='blank'
            title='LinkedIn'
            className='m-auto flex w-16 h-16 rounded-full border-2 border-slate-700 hover:bg-white hover:text-teal-400 hover:border-teal-400  bg-slate-700 text-white items-center justify-center cursor-pointer'
          >
            <TfiLinkedin />
          </Link>
        </div>
      </main>
    </GridContainer>
  );
}
