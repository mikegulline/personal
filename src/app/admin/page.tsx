import {
  getAllCompaniesWithActionCount,
  getAllViewedCompaniesWithActionCount,
  getAllRejectedCompaniesWithActionCount,
  getRecentWithActionCount,
} from './actions';
import DeleteActionsLink from '@/components/delete-actions-link';
import UpdateCompanyStatusLink from '@/components/update-company-status-link';
import Link from 'next/link';
import ClickableTr from '@/components/table/clickable-tr';
import { default as SPLink } from '@/components/stop-propagation-link';
import { LiaEdit } from 'react-icons/lia';
import { FaBomb } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import { HiOutlineFaceFrown } from 'react-icons/hi2';
import { LiaTrashAlt } from 'react-icons/lia';
import DeleteCompanyLink from '@/components/delete-company-link';

export default async function AdminDashboard({
  searchParams,
  ...others
}: {
  searchParams: Promise<{
    [key: string]: string;
  }>;
}) {
  const params = await searchParams;
  const showRecent = params?.recent as string | '';
  const showRejected = params?.rejected as string | '';
  const showViewed = params?.views as string | '';
  const showAll = !showViewed && !showRejected && !showRecent;
  const itemsPerPage: number = +(params?.show ?? '20');
  const offset: number = +(params?.page ?? '1');

  let companies;
  if (showRecent) {
    companies = await getRecentWithActionCount(itemsPerPage, offset);
  } else if (showViewed) {
    companies = await getAllViewedCompaniesWithActionCount(
      itemsPerPage,
      offset
    );
  } else if (showRejected) {
    companies = await getAllRejectedCompaniesWithActionCount(
      itemsPerPage,
      offset
    );
    console.log(companies, 'here');
  }
  if (!companies) {
    companies = await getAllCompaniesWithActionCount(itemsPerPage, offset);
  }

  const totalItems = companies[0]?.total_matching;
  const pagination = getPagination(totalItems, itemsPerPage, offset);

  const viewCountArgs = {
    params,
    totalItems,
    itemsPerPage,
    offset,
  };

  return (
    <div
      className='fade-in-up  mx-4'
      key={`show-${showViewed}-per-${itemsPerPage}-cur-${offset}`}
    >
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-baseline justify-start gap-4'>
          <h1 className='text-4xl text-gray-800 font-black mb-2'>Companies</h1>
          <div className='flex justify-start items-center text-sm gap-2'>
            <div className='font-bold'>{totalItems || 0} total</div>
            <>|</>
            <div>
              <Link
                href={`/admin?${getParams(params, {
                  views: '',
                  page: '1',
                  rejected: '',
                  recent: '1',
                })}`}
                className={`${
                  showRecent ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                Recent
              </Link>
            </div>

            <div>
              <Link
                href={`/admin?${getParams(params, {
                  views: '',
                  page: '1',
                  rejected: '',
                  recent: '',
                })}`}
                className={`${
                  showAll ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                All
              </Link>
            </div>

            <div>
              <Link
                href={`/admin?${getParams(params, {
                  views: '1',
                  page: '1',
                  rejected: '',
                  recent: '',
                })}`}
                className={`${
                  showViewed ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                Viewed
              </Link>
            </div>
            <div>
              <Link
                href={`/admin?${getParams(params, {
                  views: '',
                  rejected: '1',
                  page: '1',
                  recent: '',
                })}`}
                className={`${
                  showRejected ? 'underline text-teal-500' : 'hover:underline'
                }`}
              >
                Rejected
              </Link>
            </div>
            <>|</>
            <ViewCountLink {...viewCountArgs} itemsToShow={5} />
            <ViewCountLink {...viewCountArgs} itemsToShow={10} />
            <ViewCountLink {...viewCountArgs} itemsToShow={20} />
            <ViewCountLink {...viewCountArgs} itemsToShow={50} />
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
              ({ id, key, name, date, salary, position, status, views }) => {
                let classes =
                  'bg-white/20 hover:bg-gray-200/20 border-gray-200';
                if (+views) {
                  classes =
                    'bg-teal-100/20 hover:bg-teal-200/20 border-teal-600/20';
                }
                if (status === 'rejected') {
                  classes =
                    'bg-red-100/20 hover:bg-red-200/20 border-red-700/10';
                }
                return (
                  <ClickableTr
                    key={id}
                    link={`/admin/company/${key}`}
                    className={`${classes} cursor-pointer border-b`}
                  >
                    <td className='pl-6 py-4'>{key}</td>
                    <td className='px-6 py-4 text-center'>
                      {daysFromNow(date)}
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <DeleteActionsLink companyKey={id}>
                        {views}
                      </DeleteActionsLink>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='truncate block line-clamp-1 font-bold w-48'>
                        {name}
                      </div>
                      <div className='truncate block line-clamp-1 w-48'>
                        {position}
                      </div>
                      <div
                        className={`text-[0.6rem] leading-[0.95rem] uppercase font-medium ${
                          status === 'rejected' && 'text-red-600'
                        }`}
                      >
                        {status}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='line-clamp-1'>{salary && salary}</div>
                    </td>
                    <td className='px-6 py-4 text-center'>
                      <div className='flex justify-center items-center text-xl'>
                        {status !== 'interviewing' && (
                          <UpdateCompanyStatusLink
                            companyKey={key}
                            status='interviewing'
                          >
                            <GoThumbsup />
                          </UpdateCompanyStatusLink>
                        )}
                        <UpdateCompanyStatusLink
                          companyKey={key}
                          status={
                            status === 'rejected' ? 'applied' : 'rejected'
                          }
                        >
                          {status === 'rejected' ? (
                            <HiOutlineFaceFrown />
                          ) : (
                            <FaBomb />
                          )}
                        </UpdateCompanyStatusLink>
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
                );
              }
            )}
          </tbody>
        </table>
        <div className='flex gap-1 text-sm p-3 items-baseline'>
          {pagination.map((page, i) => {
            if (page < 0) return <span key={`...${i}`}>…</span>;

            return (
              <Link
                href={`/admin?${getParams(params, {
                  page: page.toString(),
                })}`}
                title={`Page ${page}`}
                key={`page-${page}`}
                className={` w-8 h-8 flex items-center justify-center rounded border ${
                  page === offset
                    ? 'border-teal-500 text-white bg-teal-500'
                    : 'border-gray-200'
                }`}
              >
                {page}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ViewCountLinkProps {
  params: {
    [key: string]: string;
  };
  totalItems: number;
  itemsPerPage: number;
  offset: number;
  itemsToShow: number;
}
function ViewCountLink({
  params,
  totalItems,
  itemsPerPage,
  itemsToShow,
  offset,
}: ViewCountLinkProps) {
  // default params
  // totalItems = all items
  // itemsToShow = update "show"
  // itemsPerPage = "show"
  // offset = current "page"
  let newParams, page;
  if (itemsToShow * offset > totalItems) {
    page = Math.ceil(totalItems / itemsToShow);
    newParams = getParams(params, {
      show: itemsToShow.toString(),
      page: page.toString(),
    });
  } else {
    newParams = getParams(params, { show: itemsToShow.toString() });
  }

  return (
    <Link
      href={`/admin?${newParams}`}
      className={`${
        itemsPerPage === itemsToShow
          ? 'underline text-teal-500'
          : 'hover:underline'
      }`}
    >
      {itemsToShow}
    </Link>
  );
}

function getPagination(count: number, show: number, offset: number) {
  let build = [];
  const pages = Math.ceil(count / show);
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(offset - i) < 3) build.push(i);
  }
  if (build[1] - build[0] > 1) build.splice(1, 0, -1);
  if (build[build.length - 1] - build[build.length - 2] > 1)
    build.splice(build.length - 1, 0, -1);

  return build;
}

function getParams(
  params: { [key: string]: string },
  update: { [key: string]: string }
) {
  const newParams = removeEmptyProperties({ ...params, ...update });
  return new URLSearchParams(newParams).toString();
}

function removeEmptyProperties(obj: { [key: string]: any }) {
  // Iterate over each property in the object
  for (const key in obj) {
    // Check if the property value is null, undefined, or an empty string
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key]; // Remove the property from the object
    }
  }
  return obj; // Return the modified object
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
