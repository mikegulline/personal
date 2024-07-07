import { getCompanyByKey, getActionsByCompanyId } from '../../actions';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function CompanyByKey({
  params,
}: {
  params: { key: string };
}) {
  const { key } = params;
  const company = await getCompanyByKey(key);
  const actions = await getActionsByCompanyId(company.id);

  return (
    <div className='fade-in-up  mx-4'>
      <header className='flex justify-between items-center mb-2'>
        <h1 className='text-4xl text-gray-800 font-black mb-2'>
          {company.name} ({company.key.trim()})
        </h1>
        <div>
          <Link
            href='/admin'
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            {'<'} Back
          </Link>
        </div>
      </header>
      <p className='mb-6'>
        <strong>Job Title: {company.title}</strong>
      </p>
      {actions.length === 0 ? (
        <p className='mt-4'>No actions yet :(</p>
      ) : (
        <div className='border border-gray-200 dark:border-gray-900 overflow-hidden rounded'>
          <table className='table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-500'>
              <tr>
                <th className='px-6 py-3'>Link</th>
                <th className='px-6 py-3'>Date</th>
                <th className='px-6 py-3'>Location</th>
                <th className='px-6 py-3'>Infos</th>
              </tr>
            </thead>
            <tbody>
              {actions.map(
                ({
                  id,
                  date: d,
                  redirectkey,
                  redirectlink,
                  ip,
                  useragent,
                  country,
                  region,
                  city,
                }) => {
                  const date = new Date(d);
                  const formatDate = format(date, 'P p');
                  return (
                    <tr
                      key={id}
                      className='bg-white border-b dark:bg-gray-800 dark:hover:bg-gray-900 cursor-pointer dark:border-gray-700'
                    >
                      <td className='pl-6 py-4'>
                        <Link
                          href={redirectlink}
                          title={redirectlink}
                          className='font-bold'
                        >
                          {redirectkey}
                        </Link>
                      </td>
                      <td className='px-6 py-4 '>{formatDate}</td>
                      <td className='px-6 py-4'>
                        {city}, {region}, {country}
                      </td>
                      <td className='px-6 py-4 max-w-sm'>
                        <strong>{ip}</strong> {useragent}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
