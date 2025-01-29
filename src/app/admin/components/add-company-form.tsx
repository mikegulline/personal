'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddCompanyForm() {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const startRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startRef.current) {
      startRef.current.focus();
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabled(true);
    setMessage('Adding company');
    const data = new FormData(event.target as HTMLFormElement);
    const response = await fetch('/admin/company/add', {
      method: 'POST',
      body: data,
    });
    try {
      const result = await response.json();
      setMessage(result.message);
      if (result.message === 'Company added successfully') {
        if (ref.current) {
          ref.current.classList.add('fade-out-up');
          router.prefetch(`/admin/company/${result.key}`);
          setTimeout(() => {
            router.push(`/admin/company/${result.key}`);
          }, 500);
        }
      }
    } catch (error: any) {
      console.log('log', error);
      setMessage(error.message);
    }
    setDisabled(false);
  };

  return (
    <div ref={ref}>
      <header className='flex justify-between items-center mb-6 px-4'>
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
      <form className={disabled ? 'opacity-25' : ''} onSubmit={handleSubmit}>
        <div className='flex'>
          <div className='w-1/2 flex flex-col justify-between px-4'>
            <input
              type='text'
              ref={startRef}
              name='position'
              id='position'
              placeholder='Title…'
              disabled={disabled}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
            />

            <input
              type='text'
              name='name'
              id='name'
              placeholder='Company…'
              disabled={disabled}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
            />
            <input
              type='text'
              name='salary'
              id='salary'
              placeholder='Salary…'
              disabled={disabled}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
            />
          </div>
          <div className='w-1/2 flex flex-col gap-4 px-4'>
            <div>
              {/* <label
                htmlFor='description'
                className='text-sm font-medium text-gray-800 block'
              >
                Description
              </label> */}
              <textarea
                name='description'
                id='description'
                placeholder='Description…'
                className='bg-gray-50 h-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              ></textarea>
            </div>
          </div>
        </div>

        <div className='p-4'>
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
