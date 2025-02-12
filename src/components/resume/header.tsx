import { HeaderProps } from './types';

export const Header = ({ children }: HeaderProps) => (
  <header className='-mx-[0.25in] px-[0.25in] rounded  bg-slate-950 text-white pt-3 pb-4 '>
    <h1 className='text-2xl font-bold'>Michael Gulline</h1>
    <div className='flex justify-between'>
      <h2 className='font-medium'>{children}</h2>
      <p>Eastvale, CA, USA | 949-290-8705 | michaelgulline@gmail.com</p>
    </div>
  </header>
);
