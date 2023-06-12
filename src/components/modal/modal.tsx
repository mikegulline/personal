'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface modalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: modalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div
      className={`bg-teal-400 text-white fixed inset sm:inset-5 sm:rounded z-20 flex items-center justify-center ${
        loading
          ? ' translate-y-1/2 scale-50'
          : ' transition-all duration-500 scale-100 translate-y-0 ease-out'
      }`}
    >
      <button
        className={`w-12 h-12 top-4 right-4 fixed rounded-full bg-white flex justify-center items-center text-2xl text-teal-400`}
        onClick={() => router.back()}
        type='button'
      >
        X
      </button>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
