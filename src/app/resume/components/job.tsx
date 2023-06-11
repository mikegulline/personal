import { IJob } from '../data/work';
import BorderLeft from '@/components/border-left';
import FromTo from './from-to';

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
  return (
    <div className='mb-12 relative px-5 sm:pr-10'>
      <BorderLeft>
        <h4 className='text-2xl font-bold '>{title}</h4>
      </BorderLeft>
      <p>
        <strong>{company}</strong> &middot; {type}
      </p>
      <p className='text-slate-500'>
        <FromTo from={start} to={end} />
      </p>
      <p className='mb-4 text-slate-500'>
        {city}, {state} &middot; {onsite}
      </p>
      <p className='mb-4'>{description}</p>
      <ul className='list-disc list-outside'>
        {notes.map((info, i) => {
          return (
            <li key={`${company}${i}`} className='ml-5'>
              {info}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
