import {
  getAllCompaniesWithActionCount,
  getAllViewedCompaniesWithActionCount,
} from './actions';
import Link from 'next/link';
import ClickableTr from '@/components/table/clickable-tr';
import { default as SPLink } from '@/components/stop-propagation-link';
import { LiaEdit } from 'react-icons/lia';
import { LiaEye } from 'react-icons/lia';
import { LiaTrashAlt } from 'react-icons/lia';
import DeleteCompanyLink from '@/components/delete-company-link';

interface AdminDashbordProps {
  searchParams: { [key: string]: string };
}

export default async function AdminDashboard({
  searchParams,
}: AdminDashbordProps) {
  const showViewed = searchParams?.views as string | undefined;
  const perPage: string = searchParams?.show ?? '5';
  const companies = showViewed
    ? await getAllViewedCompaniesWithActionCount(perPage, 0)
    : await getAllCompaniesWithActionCount(perPage, 0);

  return (
    <div className='fade-in-up  mx-4'>
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-baseline justify-start gap-4'>
          <h1 className='text-4xl text-gray-800 font-black mb-2'>Companies</h1>
          <div className='flex justify-start items-center text-sm gap-2'>
            <div className='font-bold'>
              {companies[0].total_matching || 0} total
            </div>
            <>|</>
            <div>
              <Link
                href={`/admin?${getParams(searchParams, 'views', '')}`}
                className={`${
                  !showViewed ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                Show All
              </Link>
            </div>

            <div>
              <Link
                href={`/admin?${getParams(searchParams, 'views', '1')}`}
                className={`${
                  showViewed ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                With Views
              </Link>
            </div>
            <>|</>
            <Link
              href={`/admin?${getParams(searchParams, 'show', '5')}`}
              className={`${
                perPage === '5' ? 'underline text-teal-500' : 'hover:underline'
              }`}
            >
              5
            </Link>
            <Link
              href={`/admin?${getParams(searchParams, 'show', '10')}`}
              className={`${
                perPage === '10' ? 'underline text-teal-500' : 'hover:underline'
              }`}
            >
              10
            </Link>
          </div>
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
              <th className='px-6 py-3'>Company/Position</th>
              <th className='px-6 py-3'>Salary</th>
              <th className='px-6 py-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(
              ({ id, key, name, date, salary, position, views }) => (
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
                    <div className='truncate block line-clamp-1 font-bold w-48'>
                      {name}
                    </div>
                    <div className='truncate block line-clamp-1 w-48'>
                      {position}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='line-clamp-1'>{salary && salary}</div>
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
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getParams(
  searchParams: { [key: string]: string },
  key: string,
  value: string
) {
  const newParams = { ...searchParams, [key]: value };
  return new URLSearchParams(newParams).toString();
}

function daysFromNow(dateString: string) {
  // Parse the input date string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Remove the time part from both dates for comparison
  const inputDateOnly: any = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  );
  const currentDateOnly: any = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  // Calculate the difference in days
  const diffInMilliseconds = inputDateOnly - currentDateOnly;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round(diffInMilliseconds / millisecondsPerDay);

  if (diffInDays === 0) {
    return (
      <div className='text-xs'>
        <div className='text-teal-700 font-bold'>Today</div>
        <div>
          {showDate(dateString)} @ {showTime(dateString)}
        </div>
      </div>
    );
  }
  if (diffInDays === -1) {
    return (
      <div className='text-xs'>
        <div className='text-orange-500 font-bold'>Yesterday</div>
        <div>
          {showDate(dateString)} @ {showTime(dateString)}
        </div>
      </div>
    );
  }
  return (
    <div className='text-xs'>
      <div>{Math.abs(diffInDays)} Days Ago</div>
      <div>
        {showDate(dateString)} @ {showTime(dateString)}
      </div>
    </div>
  );
}

function showDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
  });
}

function showTime(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Los_Angeles',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
