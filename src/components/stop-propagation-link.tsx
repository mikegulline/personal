'use client';
import Link from 'next/link';

export default function StopPropagationLink({
  children,
  href,
  className,
  title,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      onClick={(e) => e.stopPropagation()}
      className={className}
    >
      {children}
    </Link>
  );
}
