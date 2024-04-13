// import { redirect } from 'next/navigation';
// export default async function Home({ params }) {
//   redirect('/hello-nextjs');
// }

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioTracker() {
  const { push } = useRouter();

  useEffect(() => {
    push('/resume');
  }, [push]);
  return <div>tracking</div>;
}
