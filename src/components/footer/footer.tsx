import Link from 'next/link';
import Pan from '@/components/pan';
import CTA from '@/components/cta';
import { SiGithub } from 'react-icons/si';
import { TfiLinkedin } from 'react-icons/tfi';

export default function Footer() {
  return (
    <>
      <div className=' bg-slate-700 text-slate-400 overflow-hidden py-2'>
        <div className='flex whitespace-nowrap items-center text-xl font-medium'>
          <Pan>
            <>
              {[
                'Michael Gulline',
                'JavaScript',
                'TypeScript',
                'React',
                'Next JS',
                'TailWindCSS',
                'Node',
                'UI',
                'CMS',
                'WordPress',
                'CSS3',
                'VS Code',
                'HTML5',
                'NPM',
                'SASS',
                'MySQL',
                'API',
                'GitHub',
                '{less}',
                'Mongo DB',
                'JSX',
                'PHP',
                'UX',
              ].map((item, i) => (
                <span key={`strip${i}`}>
                  <span
                    key={`strip${i}`}
                    className='inline-block px-4 py-2 mx-1 rounded-full hover:bg-white hover:text-slate-700 cursor-pointer'
                  >
                    {item}
                  </span>
                  <span>•</span>
                </span>
              ))}
            </>
          </Pan>
        </div>
      </div>
      <footer className='bg-white w-full px-5'>
        <div className='mx-auto container xl:max-w-5xl  justify-between flex gap-6 items-center h-24'>
          <p>&copy; {new Date().getFullYear()} Gulline.com</p>
          <div className='flex items-center gap-6'>
            <Link
              href='https://www.linkedin.com/in/Michaelgulline/'
              target='blank'
              className='text-slate-800 hover:text-teal-400 scale-125'
            >
              <TfiLinkedin />
            </Link>
            {/* <Link
              href='https://github.com/Michaelgulline'
              target='blank'
              className='text-slate-800 hover:text-teal-400 scale-125'
            >
              <SiGithub />
            </Link> */}
            <CTA />
          </div>
        </div>
      </footer>
    </>
  );
}
