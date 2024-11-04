import { type IJob } from '../data/types';
import BorderLeft from '@/components/border-left';
import FromTo from './from-to';
import Link from 'next/link';

export default function Job({
  company,
  description,
  city,
  state,
  onsite,
  website,
  title,
  type,
  start,
  end,
  details,
  notes,
  properties,
}: IJob) {
  const CompanyLink = () => {
    if (website) {
      return (
        <Link
          href={website}
          target='_blank'
          className='text-teal-500 font-bold underline hover:text-black'
          title={`Visit ${company} website`}
        >
          {company}
        </Link>
      );
    }
    return <strong>{company}</strong>;
  };

  const Properties = () => {
    if (properties) {
      return (
        <p className='mt-4'>
          <strong>Properties:</strong>{' '}
          {properties.map((property, i) => (
            <span key={`${property[0]}`}>
              {i ? ', ' : ''}
              <Link
                href={property[1]}
                target='_blank'
                title={`Visit ${property[0]}`}
                className='text-teal-500 underline hover:text-black'
              >
                {property[0]}
              </Link>
            </span>
          ))}
        </p>
      );
    }
    return null;
  };
  return (
    <div className='mb-12 relative px-5'>
      <div className='md:flex justify-between '>
        <div>
          <BorderLeft>
            <h4 className='text-2xl font-bold md:leading-8'>{title} </h4>
          </BorderLeft>
          <p className=' md:leading-6'>
            <CompanyLink /> &middot; {city}, {state}
          </p>
        </div>
        <div className='flex justify-start gap-2 md:block mt-0.5 md:mt-0 md:text-right'>
          <p className='md:leading-8'>
            <FromTo from={start} to={end} />
          </p>
          <p className='md:hidden'>&middot;</p>
          <p className='mb-4 md:leading-6'>
            {type} &middot; {onsite}
          </p>
        </div>
      </div>

      {/* <p className='mb-4'>{description}</p> */}
      <ul className='list-disc list-outside'>
        {notes?.map((info, i) => {
          return (
            <li key={`${company}${i}`} className='ml-5'>
              {info}
            </li>
          );
        })}
      </ul>
      <Properties />
    </div>
  );
}
