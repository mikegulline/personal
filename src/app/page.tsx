import GridContainer from '@/components/grid-container/';
import BorderLeft from '@/components/border-left';
import Link from 'next/link';

export default function Home() {
  return (
    <GridContainer columns={3}>
      <main className='py-20 md:py-40 lg:py-60 flex-col mt-24'>
        <div className='w-full px-5 relative sm:pr-10 text-left sm:text-center'>
          <h1 className='text-7xl sm:text-9xl font-black mb-4'>
            Don&rsquo;t Look
          </h1>
          <BorderLeft>
            <h2 className='text-1xl sm:text-3xl mb-8 font-bold '>
              🛠️ I&rsquo;m working on my site right now!
            </h2>
          </BorderLeft>
          <p className='text-xl leading-8 max-w-2xl m-auto'>
            Okay, take a 🫣 look around. My{' '}
            <Link
              href='/resume'
              className='text-teal-400 underline hover:text-slate-800'
            >
              resume
            </Link>{' '}
            is up-to-date and there might be a little bit{' '}
            <Link
              href='/about'
              className='text-teal-400 underline hover:text-slate-800'
            >
              about
            </Link>{' '}
            me. If something is missing or out-of-place…{' '}
            <em>I&rsquo;m working on it!!!</em>
          </p>
        </div>
      </main>
    </GridContainer>
  );
}
