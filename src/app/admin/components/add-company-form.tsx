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
    const getKey = async () => {
      const response = await fetch('/admin/company/get-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!keyRef?.current) return;
      const { key } = await response.json();
      keyRef.current.value = key;
    };
    getKey();
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
          router.prefetch('/admin');
          setTimeout(() => {
            router.push('/admin');
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
          <div className='w-1/2 flex flex-col gap-4 px-4'>
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
                maxLength={4}
                placeholder='Company Key'
                disabled={disabled}
                className='bg-gray-50 w-28 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
            <div>
              <label
                htmlFor='post_link'
                className='text-sm font-medium text-gray-800 block'
              >
                Job Link
              </label>
              <input
                type='text'
                name='post_link'
                id='post_link'
                placeholder='Link to job posting'
                disabled={disabled}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
            <div>
              <label
                htmlFor='position'
                className='text-sm font-medium text-gray-800 block'
              >
                Job Title
              </label>
              <input
                type='text'
                name='position'
                id='position'
                placeholder='Frontend Engineer'
                disabled={disabled}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
            <div>
              <label
                htmlFor='name'
                className='text-sm font-medium text-gray-800 block'
              >
                Company
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Company name'
                disabled={disabled}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
            <div>
              <label
                htmlFor='website_link'
                className='text-sm font-medium text-gray-800 block'
              >
                Company Link
              </label>
              <input
                type='text'
                name='website_link'
                id='website_link'
                placeholder='Link to company website'
                disabled={disabled}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
            <div>
              <label
                htmlFor='salary'
                className='text-sm font-medium text-gray-800 block'
              >
                Salary
              </label>
              <input
                type='text'
                name='salary'
                id='salary'
                placeholder='Salary range'
                disabled={disabled}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
              />
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-4 px-4'>
            <div>
              <label
                htmlFor='description'
                className='text-sm font-medium text-gray-800 block'
              >
                Description
              </label>
              <textarea
                name='description'
                id='description'
                placeholder='Job description…'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
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
