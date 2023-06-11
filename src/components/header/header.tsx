import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from '@/public/mikegulline.svg';

import { GoMarkGithub } from 'react-icons/go';
import { TfiLinkedin } from 'react-icons/tfi';

interface ILink {
  title: string;
  link: string;
}
const menu: ILink[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Works',
    link: '/works',
  },
  {
    title: 'Resume',
    link: '/resume',
  },
];

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <header className='backdrop-blur-md bg-white/30 fixed top-0 w-full z-10 border-b border-dashed border-slate-300 px-5'>
      <div className='py-3 sm:py-0 mx-auto container xl:max-w-5xl sm:flex gap-6 items-center sm:h-24'>
        {children}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href='/' className='block text-center sm:flex sm:text-left'>
      <Image
        src={LogoSVG}
        alt='Mike Gulline Logo'
        className='mx-auto w-60 sm:w-auto pt-1 sm:pt-0'
      />
      <h1 className='sr-only'>Mike Gulline</h1>
      <p className='sr-only'>Front End Engineer</p>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className='flex-grow items-center pt-2 px-5 sm:px-0 sm:pt-0'>
      <ul className='flex sm:gap-8 md:gap-10 justify-between sm:justify-end items-center'>
        {menu.map(({ title, link }) => (
          <li key={link}>
            <Link
              href={link}
              className=' text-lg sm:text-base text-slate-800 hover:text-teal-400 font-semibold'
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Contact() {
  return (
    <div className='hidden lg:flex items-center gap-6 border-l border-dashed border-slate-300 pl-6'>
      <Link
        href='https://www.linkedin.com/in/michael-gulline/'
        target='blank'
        className='text-slate-800 hover:text-teal-400 scale-125'
      >
        <TfiLinkedin />
      </Link>
      <Link
        href='https://github.com/mikegulline'
        target='blank'
        className='text-slate-800 hover:text-teal-400 scale-125'
      >
        <GoMarkGithub />
      </Link>
      <Link
        href='/contact'
        className='inline-flex font-semibold px-6 py-2 rounded-full bg-slate-800 border-2 border-slate-800 hover:border-teal-400 hover:text-teal-400 hover:bg-white text-white items-center justify-center'
      >
        <span>Contact</span>
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Contact />
    </Wrapper>
  );
}
