'use client';
import Link from 'next/link';

export default function StopPropagationLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} onClick={(e) => e.stopPropagation()}>
      {children}
    </Link>
  );
}
