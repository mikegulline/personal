'use client';
import { useRedact } from '@/state/redact-state';

export const Redact = ({
  children,
  value,
}: {
  children: string;
  value?: string;
}) => {
  const redact = useRedact();

  if (!redact) return <>{children}</>;
  return (
    <>
      {value
        ? value
        : children?.split('')?.map((el) => (el === ' ' ? ' ' : '•'))}
    </>
  );
};
