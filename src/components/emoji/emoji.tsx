'use client';

import { ReactNode, useEffect, useState } from 'react';

// show emojis on Mac only

export default function Emoji({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.navigator.userAgent.includes('Mac')) setShow(true);
  }, []);

  if (!show) return null;

  return <>{children} </>;
}
