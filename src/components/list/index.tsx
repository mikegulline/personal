import { ReactNode } from 'react';
import Link from 'next/link';

function List() {}

interface ListWrapperProps {
  children: ReactNode;
}

const ListWrapper = ({ children }: ListWrapperProps) => {
  return <section className='p-5'>{children}</section>;
};

interface ListTitleProps {
  children: ReactNode;
}

const ListTitle = ({ children }: ListTitleProps) => {
  return (
    <header className='flex justify-between items-center mb-6'>
      <div className='flex items-baseline justify-start gap-4'>
        <h1 className='text-4xl text-gray-800 font-black '>{children}</h1>
      </div>
      <div>
        <a
          title='Add new company'
          className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          href='/admin/company'
        >
          + Add New
        </a>
      </div>
    </header>
  );
};

interface ListULProps {
  children: ReactNode;
}

const ListUL = ({ children }: ListULProps) => {
  return (
    <div>
      <ul className='border border-solid border-gray-200 rounded overflow-hidden'>
        {children}
      </ul>
    </div>
  );
};

interface ListItemProps {
  children: ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className='first:border-t-0 border-t border-solid border-gray-200 flex justify-between items-center p-6'>
      {children}
    </li>
  );
};

interface ListLinkProps {
  title: string;
  url: string;
}

const ListLink = ({ title, url }: ListLinkProps) => {
  return (
    <Link href={url} className='hover:text-teal-500'>
      {title}
    </Link>
  );
};

interface ListActionsProps {
  children: ReactNode;
}

const ListActions = ({ children }: ListActionsProps) => {
  return <div className='flex justify-end items-center gap-4'>{children}</div>;
};

List.Wrapper = ListWrapper;
List.Title = ListTitle;
List.UL = ListUL;
List.Item = ListItem;
List.Link = ListLink;
List.Actions = ListActions;

export default List;
