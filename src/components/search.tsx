'use client';
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ChangeEvent,
} from 'react';
import { useRouter } from 'next/navigation';

export default function Search({ children }: { children: ReactNode }) {
  const [input, setInput] = useState('');
  const [updating, setUpdating] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdating(true);
    setInput(e.target.value);
  };

  return (
    <>
      <input
        id='search'
        ref={ref}
        placeholder='Search…'
        className='bg-gray-50 w-full max-w-md border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
        type='text'
        name='search'
        onChange={handleChange}
      />
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
