import { SectionProps } from './types';

export const Section = ({ children, title, gap = 3 }: SectionProps) => (
  <section>
    <h3 className='uppercase font-bold text-sm border-b border-slate-950 mb-2 pb-1'>
      {title}
    </h3>
    <ul className={`flex flex-col gap-${gap}`}>{children}</ul>
  </section>
);
