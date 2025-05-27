import Link from 'next/link';
import { HeaderProps } from './types';
import { Redact } from '@/components/redact';

export const Header = (props: HeaderProps) => (
  <header className='bg-black text-white px-4 py-3 -mt-4 -mx-4 rounded '>
    <div className='flex justify-between items-baseline'>
      <h1 className='text-2xl font-bold'>
        <Redact value='Its me the mayor'>Michael Gulline</Redact>
      </h1>
      <p>
        (<Redact value='XXX'>949</Redact>) <Redact value='XXX'>290</Redact>-
        <Redact value='XXXX'>8705</Redact> |{' '}
        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/mail`}
          title='Email'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          <Redact value='name-redacted'>michaelgulline</Redact>@gmail.com
        </Link>
      </p>
    </div>
    <div className='flex justify-between items-baseline'>
      <h2 className='text-sm font-medium'>Senior {props.children}</h2>
      <p>
        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/linkedin`}
          title='LinkedIn'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          linkedin.com/in/
          <Redact value='name-redacted'>mikegulline</Redact>/
        </Link>
        {' | '}

        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/github`}
          title='Github'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          github.com/<Redact value='name-redacted'>mikegulline</Redact>/
        </Link>
        {' | '}

        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/portfolio`}
          title='Portfolio'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          <Redact value='name-redacted'>gulline</Redact>.com/
        </Link>
      </p>
    </div>
  </header>
);

// export const Header = ({ children }: HeaderProps) => (
//   <header className='-mx-[0.25in] px-[0.25in] rounded  bg-slate-950 text-white pt-3 pb-4 '>
//     <h1 className='text-2xl font-bold'>Michael Gulline</h1>
//     <div className='flex justify-between'>
//       <h2 className='font-medium'>{children}</h2>
//       <p>
//         949-290-8705 | michaelgulline@gmail.com | linkedin.com/in/mikegulline/
//       </p>
//     </div>
//   </header>
// );
