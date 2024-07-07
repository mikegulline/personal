'use client';
import { useRouter } from 'next/navigation';

interface ClickableTr {
  children: React.ReactNode;
  link: string;
  className?: string;
}

const ClickableTr: React.FC<ClickableTr> = ({ children, link, className }) => {
  const router = useRouter();

  return (
    <tr onClick={() => router.push(link)} className={className}>
      {children}
    </tr>
  );
};

export default ClickableTr;
