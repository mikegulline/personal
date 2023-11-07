import { ReactNode } from 'react';
import {
  TfiArrowLeft,
  TfiArrowRight,
  TfiHome,
  TfiReload,
  TfiFile,
  TfiHeart,
} from 'react-icons/tfi';

export interface IBrowserWrapper {
  children: ReactNode;
  url: string;
  small?: boolean;
}

export default function BrowserWrapper({
  children,
  url,
  small,
}: IBrowserWrapper) {
  return (
    <div
      id='wrapper'
      className='  select-none  transition-transform duration-300 ease-in-out relative'
    >
      <div
        id='top-bar'
        className='bg-[#f0f0f4] rounded-t-xl h-9 flex justify-between items-stretch border border-b-0 border-[#e8e8e8] shadow-[inset_0_1px_3px_rgba(255,255,255,.75)]'
      >
        <div
          id='top-bar-left-icons'
          className='flex gap-2 px-3 group items-center opacity-70 hover:opacity-90'
        >
          <div className='rounded-full w-3 h-3 group-hover:bg-[#ed6a5e] border group-hover:border-[#d24e42] border- bg-[#dedddf] border-[#bdbdbf]'></div>
          <div className='rounded-full w-3 h-3 group-hover:bg-[#f5bd4f] border group-hover:border-[#daa954] bg-[#dedddf] border-[#bdbdbf]'></div>
          <div className='rounded-full w-3 h-3 group-hover:bg-[#5ec454] border group-hover:border-[#4fa73e] bg-[#dedddf] border-[#bdbdbf]'></div>
        </div>
        <div id='top-bar-right-icons'></div>
      </div>
      {!small && (
        <div
          id='url-bar'
          className='bg-[#f9f9fb] border py-px flex gap-2 text-xs px-2'
        >
          <div
            id='url-bar-left-icons'
            className='hidden sm:flex items-stretch my-1'
          >
            <div
              id='icon-back'
              className='rounded-md flex justify-center items-center hover:bg-[#f0f0f4] w-8 h-8'
            >
              <TfiArrowLeft />
            </div>
            <div
              id='icon-next'
              className='rounded-md flex justify-center items-center hover:bg-[#f0f0f4] w-8 h-8'
            >
              <TfiArrowRight />
            </div>
            <div
              id='icon-refresh'
              className='rounded-md flex justify-center items-center hover:bg-[#f0f0f4] w-8 h-8'
            >
              <TfiReload />
            </div>
            <div
              id='icon-home'
              className='rounded-md flex justify-center items-center hover:bg-[#f0f0f4] w-8 h-8'
            >
              <TfiHome />
            </div>
          </div>

          <div
            id='url-bar-input'
            className='bg-[#f0f0f4] rounded-md flex items-center my-1 py-1 px-2 gap-2 w-full max-w-sm'
          >
            <TfiFile />{' '}
            <span className='flex-grow overflow-hidden whitespace-nowrap relative'>
              {url}
              <span className='absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f0f0f4]'></span>
            </span>{' '}
            <TfiHeart />
          </div>
        </div>
      )}
      <div className='bg-[#f0f0f4] border border-t-0 rounded-b-xl overflow-hidden'>
        {children}
      </div>
    </div>
  );
}
