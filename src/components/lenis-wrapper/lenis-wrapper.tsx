'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useState } from 'react';

interface ILenis {
  scroll: number;
  direction: number;
  velocity: number;
  start: number;
  stop: number;
}

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [s, setScroll] = useState<number>(0);

  useLenis(({ scroll, direction, velocity, start, stop }: ILenis) => {
    setScroll(scroll);
  });
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  );
}
