import { FooterProps } from './types';

export const Footer = ({ children, companyKey }: FooterProps) => (
  <footer className='bg-black text-white px-4 py-2 -mb-4 -mx-4 rounded flex justify-between items-baseline'>
    <span>
      &copy; {new Date().getFullYear()} <strong>Michael Gulline</strong>,{' '}
      {children}.
    </span>
    <span>
      <strong>Resume ID:</strong> {companyKey}
    </span>
  </footer>
);
