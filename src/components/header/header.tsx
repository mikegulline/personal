import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from '@/public/michaelgulline.svg';
import CTA from '@/components/cta';
import { SiGithub } from 'react-icons/si';
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
  // {
  //   title: 'Resume',
  //   link: '/resume',
  // },
];

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <header className=' bg-white  w-full z-10 border-b  border-slate-200 px-5'>
      <div className='py-3 sm:py-0 mx-auto container xl:max-w-5xl sm:flex gap-6 items-center sm:h-24'>
        {children}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link
      href='/'
      className='flex h-8 items-center justify-center gap-2 m-auto'
    >
      <Image
        src={LogoSVG}
        alt='Michael Gulline Logo'
        className='w-8 h-8'
        width={32}
        height={32}
        priority={true}
      />
      <h1 className='font-bold whitespace-nowrap text-2xl'>Michael Gulline</h1>
      <p className='sr-only'>Front Endengineer</p>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className='flex-grow items-center pt-2 sm:pt-0'>
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
        <li className='sm:visible md:hidden'>
          <Link
            href='/resume'
            className=' text-lg sm:text-base text-slate-800 hover:text-teal-400 font-semibold'
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Contact() {
  return (
    <div className='hidden md:flex items-center gap-6 border-l border-dashed border-slate-300 pl-6'>
      <Link
        href='https://www.linkedin.com/in/mikegulline/'
        target='blank'
        className='text-slate-800 hover:text-teal-400 scale-125'
      >
        <TfiLinkedin />
      </Link>
      {/* <Link
        href='https://github.com/mikegulline'
        target='blank'
        className='text-slate-800 hover:text-teal-400 scale-125'
      >
        <SiGithub />
      </Link> */}
      <CTA />
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
