import { ReactNode } from 'react';

interface IGridContainer {
  children: ReactNode;
  columns?: number;
}

export default function GridContainer({
  children,
  columns = 4,
}: IGridContainer) {
  const columnArray = (cols: number) => {
    const count = [];
    for (let c = 1; c <= columns; c++) {
      count.push(1);
    }
    return count;
  };
  return (
    <div className='relative'>
      <div className='hidden grid-cols-2'></div>
      <div className='hidden grid-cols-3'></div>
      <div className='hidden grid-cols-4'></div>
      <div className='hidden grid-cols-5'></div>
      <div className='hidden grid-cols-6'></div>
      <div className='h-full absolute top-0 left-0 right-0 sm:left-5 sm:right-5'>
        <div
          className={`grid grid-cols-${columns} container xl:max-w-5xl h-full mx-auto border-r border-slate-200 border-dashed`}
        >
          {columnArray(columns).map((_, i) => (
            <div
              key={`col${i}`}
              className='border-l border-slate-200 h-full border-dashed'
            />
          ))}
        </div>
      </div>
      <div className='relative px-0 sm:px-5'>
        <div className='container xl:max-w-5xl mx-auto text-left'>
          <main className='py-20 md:py-40 flex-col'>{children}</main>
        </div>
      </div>
    </div>
  );
}
