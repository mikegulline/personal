'use client';
import { useRef } from 'react';
import Link from 'next/link';
import useSnappyFollow from '@/hooks/use-snappy-follow';

export default function CTA() {
  const outer = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useSnappyFollow(5, outer, inner);

  return (
    <Link
      href='/contact'
      ref={outer}
      className='transition-transform duration-500 ease-out inline-flex font-semibold px-6 py-2 rounded-full bg-slate-700 border-2 border-slate-700 text-white items-center justify-center'
    >
      <span
        ref={inner}
        className='block transition-transform duration-100 ease-out'
      >
        Contact
      </span>
    </Link>
  );
}
