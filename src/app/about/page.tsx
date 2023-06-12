import GridContainer from '@/components/grid-container/';
import BorderLeft from '@/components/border-left';
import Pan from '@/components/pan';
import Link from 'next/link';
import sealion from '@/public/images/a-sea-lion.jpg';
import plants from '@/public/images/plants.jpg';
import golf from '@/public/images/golf.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'About',
  description:
    'About Mike Gulline—Frontend Engineer (TailwindCSS, TypeScript, React Js, Next JS)',
};

const images = [
  {
    src: sealion,
    alt: 'A sea lion',
  },
  {
    src: plants,
    alt: 'Plants',
  },
  {
    src: golf,
    alt: 'Golf',
  },
];

export default function About() {
  return (
    <>
      <GridContainer columns={3}>
        <main className='py-20 md:py-40 lg:py-60 flex-col lg:flex lg:flex-row mt-24'>
          <div className='lg:w-1/2 px-5'>
            <h1 className='text-5xl sm:text-9xl font-black mb-4'>About</h1>
            <BorderLeft>
              <h2 className='text-2xl sm:text-3xl mb-8 font-bold'>
                Hi, my name is Mike 🤘🏻
              </h2>
            </BorderLeft>
            <p className='text-xl leading-8'>
              Thank you for taking the time to learn more about me. Aside from
              the{' '}
              <Link
                href='/resume'
                className='text-teal-400 underline hover:text-slate-800'
              >
                work
              </Link>{' '}
              stuff, I am a happily married father of three. I love plants,
              golf, food, and crushing my kids at 🎮 video games{' '}
              <em>(for now)</em>. I almost got a kiss from a sea lion when I was
              seven. And my favorite color is green. Now you know everything.
            </p>
          </div>
          <div className='lg:w-1/2 mt-12 lg:mt-0'>
            <div className='lg:absolute lg:h-full lg:top-0 lg:w-1/2 flex items-center lg:overflow-hidden'>
              <div className='flex gap-10 px-5'>
                {images.map(({ src, alt }, i) => (
                  <div
                    key={`hero-${i}`}
                    className='lg:w-[472px] lg:h-[472px] bg-white rounded-lg overflow-hidden'
                  >
                    <Image src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </GridContainer>
      <div className=' bg-slate-700 text-slate-400 overflow-hidden py-2'>
        <div className='flex whitespace-nowrap items-center text-xl font-medium'>
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
