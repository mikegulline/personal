'use client';
import Link from 'next/link';
import { updateStatus } from '@/app/admin/actions';
type Status = 'applied' | 'viewed' | 'rejected';

interface UpdateStatusLinkProps {
  children?: React.ReactNode;
  companyKey: string;
  status: Status;
}

export default function UpdateCompanyStatusLink({
  children,
  companyKey,
  status,
}: UpdateStatusLinkProps) {
  const handleUpdateCompanyStatus = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await updateStatus(companyKey, status);
    } catch (error) {
      console.error('An error occurred while updating status:', error);
    }
  };
  return (
    <Link
      href='#'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
        handleUpdateCompanyStatus(event)
      }
      className='p-2 rounded-full hover:text-white hover:bg-teal-500'
    >
      {children}
    </Link>
  );
}
