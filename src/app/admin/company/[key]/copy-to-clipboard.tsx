'use client';
import { useState } from 'react';

const handleCopyToClipboard = (text: string) =>
  navigator.clipboard
    .writeText(text)
    .then(() => console.log(`Text (${text}) copied to clipboard`))
    .catch((e) => console.error('Error copying text to clipboard', e));

const CopyButton = ({ link, k }: { link: string; k: string }) => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <span className='grid relative group'>
      <button
        className='col-start-1 row-start-1  flex gap-1 items-center justify-center '
        onClick={() => {
          setClick(true);
          setCount((c) => c + 1);
          handleCopyToClipboard(`https://www.gulline.com/v1/${k}/${link}`);
        }}
      >
        <span className='text-teal-600 underline hover:text-black'>{link}</span>

        <span className='w-5 h-5 flex no-underline justify-center items-center text-xs text-white bg-teal-500 group-hover:bg-black rounded-full'>
          {count}
        </span>
      </button>
      <span
        onAnimationEnd={() => {
          setTimeout(() => setClick(false), 1500);
        }}
        className={`${
          click
            ? ' animate-popup'
            : ' transition-all duration-100 opacity-0 -translate-y-1/2'
        } whitespace-nowrap pointer-events-none -translate-x-1/2 px-1 py-0.5 text-white rounded bg-gray-800 absolute top-1/2 left-1/2 col-start-1 row-start-1  flex items-center justify-center text-xs`}
      >
        Coppied
      </span>
    </span>
  );
};

const CopyToClipboard = ({ links, k }: { links: string[]; k: string }) => {
  return (
    <span className='flex justify-start gap-2'>
      {links.map((link: string) => (
        <CopyButton key={link} link={link} k={k} />
      ))}
    </span>
  );
};

export default CopyToClipboard;
