import GridContainer from '@/components/grid-container/';
import BorderLeft from '@/components/border-left';
import Pan from '@/components/pan';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'About Mike Gulline—Frontend Engineer (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function About() {
  return (
    <>
      <GridContainer>
        <main className='py-60 flex mt-24'>
          <div className='w-1/2 px-5'>
            <h1 className='text-9xl font-black mb-4 text-slate-700'>About</h1>
            <BorderLeft>
              <h2 className='text-3xl mb-8 font-bold'>
                Hi, my name is Mike 🤘🏻
              </h2>
            </BorderLeft>
            <p className='text-xl leading-8 text-slate-500'>
              Thank you for taking the time to learn more about me. Aside from
              the{' '}
              <Link
                href='/resume'
                className='text-teal-400 underline hover:text-slate-800'
              >
                work stuff
              </Link>
              , I am a happily married father of three. I love plants, art,
              food, golf, and crushing my kids at video games <em>(for now)</em>
              . I almost got a kiss from a sea lion when I was seven. And my
              favorite color is green.
            </p>
          </div>
          <div className='w-1/2'>
            <div className='absolute h-full top-0 w-1/2 flex items-center overflow-hidden'>
              <div className='flex gap-10 px-5'>
                {[1, 1, 1].map((_, i) => (
                  <div
                    key={`hero-${i}`}
                    className='w-[472px] h-[472px] bg-white rounded shadow-[0_20px_40px_-60px_rgba(50,50,93,0.24),_0_10px_30px_-10px_rgba(0,0,0,0.3)]'
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </GridContainer>
      <div className=' bg-slate-700 text-slate-400 overflow-hidden py-2'>
        <div className='flex whitespace-nowrap items-center text-xl font-medium'>
          {/* animate-[pan_100s_infinite_linear] */}
          <Pan>
            <>
              {[
                'Mike Gulline',
                'JavaScript',
                'TypeScript',
                'React',
                'Next JS',
                'TailWindCSS',
                'Node',
                'UI',
                'CSS',
                'NPM',
                'SASS',
                'MySQL',
                'API',
                '{less}',
                'Mongo DB',
                'JSX',
                'PHP',
                'UX',
                'Mike Gulline',
                'JavaScript',
                'TypeScript',
                'React',
                'Next JS',
                'TailWindCSS',
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
    </>
  );
}
