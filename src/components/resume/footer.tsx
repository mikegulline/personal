import { FooterProps } from './types';

export const Footer = ({ children, companyKey }: FooterProps) => (
  <footer className='rounded py-3 px-[0.25in] -mx-[0.25in] text-right flex justify-between bg-slate-950 text-white'>
    <span>
      &copy; {new Date().getFullYear()} <strong>Michael Gulline</strong>,{' '}
      {children}.
    </span>
    <span>
      <strong>Resume ID:</strong> {companyKey}
    </span>
  </footer>
);
