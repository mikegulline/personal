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
        <strong>
          <Link
            href={website}
            target='_blank'
            className='text-teal-500 underline hover:text-black'
            title={`Visit ${company} website`}
          >
            {company}
          </Link>
        </strong>
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
      <div className='flex justify-between items-baseline'>
        <BorderLeft>
          <h4 className='text-2xl font-bold '>{title} </h4>
        </BorderLeft>
        <p className='text-slate-500'>
          <FromTo from={start} to={end} />
        </p>
      </div>
      <div className='flex justify-between items-baseline'>
        <p>
          <CompanyLink /> &middot; {city}, {state}
        </p>
        <p className='mb-4 text-slate-500'>
          {type} &middot; {onsite}
        </p>
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
