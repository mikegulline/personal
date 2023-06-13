'use client';
import Modal from '@/components/modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TfiLinkedin } from 'react-icons/tfi';

export default function ContactModal() {
  const router = useRouter();
  return (
    <Modal>
      <div className='flex items-center gap-2 text-2xl sm:text-4xl'>
        <span>Let&rsquo;s keep in touch </span>
        <Link
          href='https://www.linkedin.com/in/michael-gulline/'
          target='blank'
          title='Connect with me on LinkedIn'
          onClick={() => router.back()}
          className='flex w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 border-white hover:bg-teal-400 hover:text-white  bg-white text-teal-400 items-center justify-center cursor-pointer'
        >
          <TfiLinkedin />
        </Link>
      </div>
    </Modal>
  );
}
