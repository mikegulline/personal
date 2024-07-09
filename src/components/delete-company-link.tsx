'use client';

import React from 'react';
import Link from 'next/link';
import { deleteCompanyById } from '@/app/admin/actions';

interface DeleteCompanyLinkProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const DeleteCompanyLink: React.FC<DeleteCompanyLinkProps> = ({
  id,
  children,
  className,
}) => {
  const handleDelete = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await deleteCompanyById(id);
      //await myRevalidatePath('/admin');
    } catch (error) {
      console.error('An error occurred while deleting the company:', error);
    }
  };

  return (
    <Link href='#' title='Delete' onClick={handleDelete} className={className}>
      {children}
    </Link>
  );
};

async function myRevalidatePath(path: string) {
  try {
    const res = await fetch('/api/cache/revalidate-path', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path }),
    });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error('Error revalidating path:', error.message);
  }
}

export default DeleteCompanyLink;
