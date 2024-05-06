'use client';
import { ReactNode, useRef, useCallback, RefObject } from 'react';
import useDistanceFromElement from '@/hooks/useDistanceFromElement';

export default function Icon({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const refInner = useRef<HTMLDivElement>(null);
  const distance = useDistanceFromElement(300, ref);

  const scale = useCallback(
    (ref: RefObject<HTMLDivElement>, amount: number) => {
      if (!ref.current) return;
      ref.current.style.transform = `scale(${1 + amount * distance})`;
    },
    [distance]
  );

  // scale(ref, 0.2);
  scale(refInner, 0.9);

  return (
    <div
      ref={ref}
      className='transition-transform duration-500 ease-out w-12 h-12 sm:w-20 sm:h-20 rounded-md  bg-white flex items-center justify-center text-2xl sm: text-slate-500 border  border-slate-300'
    >
      <div ref={refInner}>{children}</div>
    </div>
  );
}
