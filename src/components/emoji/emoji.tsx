'use client';

import { ReactNode } from 'react';

// show emojis on Mac only

export default function Emoji({ children }: { children: ReactNode }) {
  if (!window.navigator.userAgent.includes('Mac')) return null;
  return <>{children} </>;
}
