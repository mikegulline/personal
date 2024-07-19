import { getAllCompaniesWithActionCount } from './actions';
import Link from 'next/link';
import ClickableTr from '@/components/table/clickable-tr';
import { default as SPLink } from '@/components/stop-propagation-link';
import { LiaEdit } from 'react-icons/lia';
import { LiaEye } from 'react-icons/lia';
import { LiaTrashAlt } from 'react-icons/lia';
import DeleteCompanyLink from '@/components/delete-company-link';

export default async function AdminDashboard() {
  const companies = await getAllCompaniesWithActionCount(30, 0);

  return (
    <div className='fade-in-up  mx-4'>
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-center justify-start gap-4'>
          <h1 className='text-4xl text-gray-800 font-black mb-2'>Companies</h1>
          <div>{companies[0].total_matching || 0} total</div>
        </div>
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
      <div className='border border-gray-200 dark:border-gray-900 overflow-hidden rounded bg-white'>
        <table className='table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-500'>
            <tr>
              <th className='px-6 py-3'>Key</th>
              <th className='px-6 py-3 text-center'>Applied</th>
              <th className='px-6 py-3 text-center'>Views</th>
              <th className='px-6 py-3'>Company</th>
              <th className='px-6 py-3'>Job Title</th>
              <th className='px-6 py-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(({ id, key, name, date, position, views }) => (
              <ClickableTr
                key={id}
                link={`/admin/company/${key}`}
                className={`${
                  views == 0
                    ? 'bg-white/20 hover:bg-gray-200/20 dark:hover:bg-gray-900'
                    : 'bg-teal-100/20 hover:bg-teal-200/20 dark:hover:bg-teal-950'
                }cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className='pl-6 py-4'>{key}</td>
                <td className='px-6 py-4 text-center'>{daysFromNow(date)}</td>
                <td className='px-6 py-4 text-center'>{views}</td>
                <td className='px-6 py-4'>
                  <strong className='truncate block line-clamp-1 w-32'>
                    {name}
                  </strong>
                </td>
                <td className='px-6 py-4'>
                  <div className='truncate block line-clamp-1'>{position}</div>
                </td>
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

function daysFromNow(dateString: string) {
  // Parse the input date string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMilliseconds = inputDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(
    Math.abs(diffInMilliseconds) / millisecondsPerDay
  );

  if (diffInDays === 0) {
    return (
      <div className='text-xs'>
        <div className='text-teal-700 font-bold'>Today</div>
        <div>@ {showTime(dateString)}</div>
      </div>
    );
  }
  if (diffInDays === 1) {
    return (
      <div className='text-xs'>
        <div className='text-orange-500 font-bold'>Yesterday</div>
        <div>@ {showTime(dateString)}</div>
      </div>
    );
  }
  return (
    <div className='text-xs'>
      <div>{diffInDays} Days Ago</div>
      <div>@ {showTime(dateString)}</div>
    </div>
  );
}

function showTime(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Los_Angeles', // Ensure this is set correctly
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
