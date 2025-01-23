'use client';
import Link from 'next/link';
import { deleteActionsByCompanyId } from '@/app/admin/actions';

interface DeleteActionsLinkProps {
  children?: React.ReactNode;
  companyKey: string;
}

export default function DeleteActionsLink({
  children,
  companyKey,
}: DeleteActionsLinkProps) {
  const handleDeleteActions = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await deleteActionsByCompanyId(companyKey);
    } catch (error) {
      console.error('An error occurred while deleting actions:', error);
    }
  };
  return (
    <Link
      href='#'
      onClick={handleDeleteActions}
      className='p-2 w-10 h-10 flex justify-center items-center rounded-full hover:text-white hover:bg-teal-500'
    >
      {children}
    </Link>
  );
}
