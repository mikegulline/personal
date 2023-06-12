import { ReactNode } from 'react';

interface IBorderLeft {
  children: ReactNode;
}

export default function BorderLeft({ children }: IBorderLeft) {
  return (
    <div
      className={`relative before:w-[2px] before:h-full before:-left-5 before:bg-teal-400 before:inline-block before:absolute bg:content-[" "]`}
    >
      {children}
    </div>
  );
}
