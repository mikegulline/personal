'use client';
import { useState, useRef } from 'react';

export default function LoginForm({ handleHide }: { handleHide: () => void }) {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabled(true);
    setMessage('Verifying user');
    const data = new FormData(event.target as HTMLFormElement);
    const response = await fetch('/admin/login', {
      method: 'POST',
      body: data,
    });
    try {
      const result = await response.json();
      setMessage(result.message);
      if (result.message === 'Logged in successfully') {
        if (ref.current) {
          ref.current.classList.add('fade-out-up');
          setTimeout(handleHide, 500);
        }
      }
    } catch (error: any) {
      console.log('log', error);
    }
    setDisabled(false);
  };

  return (
    <div className='px-4 ' ref={ref}>
      <h1 className='text-4xl text-gray-800 font-black mb-2'>Please Login</h1>
      {message && <p className='my-4'>{message}</p>}
      <form
        className={`flex flex-col gap-4 w-2/4 ${disabled ? 'opacity-25' : ''}`}
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor='email'
            className='text-sm font-medium text-gray-800 block'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            disabled={disabled}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500'
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='text-sm font-medium text-gray-800 block'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Your Password'
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
