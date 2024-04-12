'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioTracker() {
  const { push } = useRouter();

  useEffect(() => {
    push('/resume');
  }, []);
  return <div>tracking</div>;
}
