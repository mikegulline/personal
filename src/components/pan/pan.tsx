'use client';
import { useRef, useEffect, useState, ReactNode, useCallback } from 'react';

interface IPan {
  children: ReactNode;
}
export default function Pan({ children }: IPan) {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  // const animation = useCallback(() => {
  //   const x = ref.current?.getBoundingClientRect().left;
  //   const width = widthRef.current?.offsetWidth;

  //   if (typeof x === 'number' && ref.current && width && !hover) {
  //     if (-x >= width) {
  //       ref.current.style.left = '0px';
  //     } else {
  //       ref.current.style.left = x - 0.2 + 'px';
  //     }
  //   }

  //   animationRef.current = requestAnimationFrame(animation);
  // }, [hover]);

  // useEffect(() => {
  //   animationRef.current = requestAnimationFrame(animation);
  //   return () => cancelAnimationFrame(animationRef.current);
  // }, [animation]);

  return (
    <div
      ref={ref}
      className='relative select-none pan'
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div ref={widthRef} className='inline-block'>
        {children}
      </div>
      <div className='inline-block'>{children}</div>
    </div>
  );
}
