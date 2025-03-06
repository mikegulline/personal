import { HeaderProps } from './types';

export const Header = ({ children }: HeaderProps) => (
  <header>
    <h1 className='text-2xl font-bold border-b border-slate-950 mb-2 pb-1'>
      Michael Gulline
    </h1>
    <p className='flex justify-between'>
      <strong>{children}</strong>{' '}
      <span>
        (949) 290-8705 | michaelgulline@gmail.com | linkedin.com/in/mikegulline/
      </span>
    </p>
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
