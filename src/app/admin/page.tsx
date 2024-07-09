import { getAllCompaniesWithActionCount } from './actions';
import Link from 'next/link';
import ClickableTr from '@/components/table/clickable-tr';
import StopPropagationLink from '@/components/stop-propagation-link';
import { LiaEdit } from 'react-icons/lia';
import { LiaEye } from 'react-icons/lia';
import { LiaTrashAlt } from 'react-icons/lia';
import DeleteCompanyLink from '@/components/delete-company-link';

export default async function AdminDashboard() {
  const companies = await getAllCompaniesWithActionCount();
  const SPLink = StopPropagationLink;

  return (
    <div className='fade-in-up  mx-4'>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl text-gray-800 font-black mb-2'>Companies</h1>
        <div>
          <Link
            href='/admin/company'
            title='Add new company'
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            + Add New
          </Link>
        </div>
      </header>
      <div className='border border-gray-200 dark:border-gray-900 overflow-hidden rounded'>
        <table className='table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-500'>
            <tr>
              <th className='px-6 py-3'>Key</th>
              <th className='px-6 py-3 text-center'>Views</th>
              <th className='px-6 py-3'>Company</th>
              <th className='px-6 py-3'>Job Title</th>
              <th className='px-6 py-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(({ id, key, name, position, views }) => (
              <ClickableTr
                key={id}
                link={`/admin/company/${key}`}
                className='bg-white hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700'
              >
                <td className='pl-6 py-4'>{key}</td>
                <td className='px-6 py-4 text-center'>{views}</td>
                <td className='px-6 py-4 truncate'>
                  <strong>{name}</strong>
                </td>
                <td className='px-6 py-4'>{position}</td>
                <td className='px-6 py-4 text-center'>
                  <div className='flex justify-center items-center text-xl'>
                    <SPLink
                      href={`/admin/company/${key.trim()}`}
                      className='p-2 rounded-full hover:text-white hover:bg-teal-500'
                      title='View'
                    >
                      <LiaEye />
                    </SPLink>
                    <SPLink
                      href={`/admin/company/${key.trim()}/edit`}
                      className='p-2 rounded-full hover:text-white hover:bg-teal-500'
                      title='Edit'
                    >
                      <LiaEdit />
                    </SPLink>
                    <DeleteCompanyLink
                      className='p-2 rounded-full hover:text-white hover:bg-teal-500'
                      id={id}
                    >
                      <LiaTrashAlt />
                    </DeleteCompanyLink>
                  </div>
                </td>
              </ClickableTr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
