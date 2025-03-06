'use client';
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ChangeEvent,
} from 'react';
import { ImCommand } from 'react-icons/im';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Search({ children }: { children: ReactNode }) {
  const [input, setInput] = useState('');
  const [enter, setEnter] = useState(true);
  const [updating, setUpdating] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const s = useSearchParams().get('s');

  useEffect(() => {
    if (enter) {
      setEnter(false);
      return;
    }
    let timerId = setTimeout(() => {
      if (!input) router.push(`?`);
      else router.push(`?s=${input}`);
      setUpdating(false);
    }, 200);

    return () => clearTimeout(timerId);
  }, [input]);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  useEffect(() => {
    if (ref.current && !s) ref.current.value = '';
  }, [s]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdating(true);
    setInput(e.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push(`?`);
    ref.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`?`);
      ref.current?.focus();
    }
  };

  return (
    <>
      <div className='w-1/2 pr-4'>
        <div className='flex gap-4  mb-4'>
          <input
            id='search'
            ref={ref}
            placeholder='Search…'
            className='bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
            type='text'
            name='search'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleClick}
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className={` transition-opacity duration-500 ${
          updating ? 'opacity-20' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
