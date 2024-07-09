'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddCompanyForm() {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (keyRef.current) {
      keyRef.current.value = generateRandomString();
    }
    function generateRandomString() {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabled(true);
    setMessage('Verifying user');
    const data = new FormData(event.target as HTMLFormElement);
    const response = await fetch('/admin/company/add', {
      method: 'POST',
      body: data,
    });
    try {
      const result = await response.json();
      setMessage(result.message);
      if (result.message === 'Logged in successfully') {
        if (ref.current) {
          ref.current.classList.add('fade-out-up');
          router.prefetch('/admin');
          setTimeout(() => {
            router.push('/admin');
          }, 500);
        }
      }
    } catch (error: any) {
      console.log('log', error);
    }
    setDisabled(false);
  };

  return (
    <div className='px-4 ' ref={ref}>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl text-gray-800 font-black mb-2'>Add Company</h1>
        <div>
          <Link
            href='/admin'
            title='Back to Comanies'
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            {'<'} Back
          </Link>
        </div>
      </header>
      {message && <p className='my-4'>{message}</p>}
      <form
        className={`flex flex-col gap-4 w-2/4 ${disabled ? 'opacity-25' : ''}`}
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor='key'
            className='text-sm font-medium text-gray-800 block'
          >
            Key
          </label>
          <input
            ref={keyRef}
            type='text'
            name='key'
            id='key'
            maxLength={5}
            placeholder='Company Key'
            disabled={disabled}
            className='bg-gray-50 w-28 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
          />
        </div>
        <div>
          <label
            htmlFor='Company'
            className='text-sm font-medium text-gray-800 block'
          >
            Company
          </label>
          <input
            type='text'
            name='Company'
            id='Company'
            placeholder='Company'
            disabled={disabled}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
          />
        </div>
        <div>
          <label
            htmlFor='Title'
            className='text-sm font-medium text-gray-800 block'
          >
            Title
          </label>
          <input
            type='text'
            name='Title'
            id='Title'
            placeholder='Title'
            disabled={disabled}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
          />
        </div>
        <div>
          <button
            type='submit'
            disabled={disabled}
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            Add Company
          </button>
        </div>
      </form>
    </div>
  );
}
//description
//salary
//website
//post_link
