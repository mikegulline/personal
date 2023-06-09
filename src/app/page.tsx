import GridContainer from '@/components/grid-container/';
import Emoji from '@/components/emoji';
import BorderLeft from '@/components/border-left';
import Link from 'next/link';

export default function Home() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 relative text-left sm:text-center'>
        <h1 className='text-5xl sm:text-9xl font-black mb-4'>
          Don&rsquo;t Look
        </h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            <Emoji>🛠️</Emoji>I&rsquo;m working on my site rn!
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8 max-w-2xl m-auto'>
          Okay, take a <Emoji>🫣</Emoji>look around. My{' '}
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
    </GridContainer>
  );
}
