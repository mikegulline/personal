import Link from 'next/link';
import { HeaderProps } from './types';

export const Header = (props: HeaderProps) => (
  <header className='bg-black text-white px-4 py-3 -mt-4 -mx-4 rounded '>
    <div className='flex justify-between items-baseline'>
      <h1 className='text-2xl font-bold'>Michael Gulline</h1>
      <p>
        (949) 290-8705 |{' '}
        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/mail`}
          title='Email'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          michaelgulline@gmail.com
        </Link>
      </p>
    </div>
    <div className='flex justify-between items-baseline'>
      <h2 className='text-sm font-medium'>{props.children}</h2>
      <p>
        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/linkedin`}
          title='LinkedIn'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          linkedin.com/in/mikegulline/
        </Link>
        {' | '}

        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/github`}
          title='Github'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          github.com/mikegulline/
        </Link>
        {' | '}

        <Link
          href={`https://www.gulline.com/v1/${props.companyKey}/portfolio`}
          title='Portfolio'
          className='underline'
          target='_blank'
          rel='noreferrer'
        >
          gulline.com/
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
