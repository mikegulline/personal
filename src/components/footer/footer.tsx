import Link from 'next/link';
import { GoMarkGithub } from 'react-icons/go';
import { TfiLinkedin } from 'react-icons/tfi';

export default function Footer() {
  return (
    <>
      <footer className='bg-white w-full border-t'>
        <div className='mx-auto container xl:max-w-5xl  justify-between flex gap-6 items-center h-24'>
          <p>MikeGulline.com</p>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className='text-slate-800 hover:text-teal-400 scale-125'
            >
              <TfiLinkedin />
            </Link>
            <Link
              href='/'
              className='text-slate-800 hover:text-teal-400 scale-125'
            >
              <GoMarkGithub />
            </Link>

            <Link
              href='/contact'
              className='inline-flex font-semibold px-6 py-2 rounded-full  bg-slate-800 border-2 border-slate-800 hover:border-teal-400 hover:text-teal-400 hover:bg-white text-white items-center justify-center'
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
