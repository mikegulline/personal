'use client';
import links from '@/data/links.json';
import Link from 'next/link';
import GridContainer from '@/components/grid-container';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

type LinkProps = {
  title: string;
  url: string;
  slug: string;
  site: string;
  clicked?: boolean;
};

export default function LinksPage() {
  const [theLinks, setTheLinks] = useState<LinkProps[]>(links);

  const handleClick = (index: number) => {
    setTheLinks((prev) => {
      const newLinks = [...prev];
      const updateLink = { ...newLinks[index], clicked: true };
      newLinks[index] = updateLink;
      return newLinks;
    });
  };
  return (
    <GridContainer columns={4}>
      <ul className='px-4'>
        {theLinks.map(({ title, url, clicked = false }, index) => (
          <li key={`${url}-${index}`}>
            <Link
              onClick={() => handleClick(index)}
              href={url}
              target='_blank'
              className='p-4 mb-1 group bg-slate-200/20 hover:text-white hover:bg-slate-700 flex justify-between items-center'
            >
              <div>
                {index}
                {'.) '}
                {title}
              </div>
              <div className='w-10 h-10 block'>
                {clicked && (
                  <div className='w-full border border-teal-600 text-teal-600 h-full flex items-center justify-center rounded-full bg-white group-hover:text-teal-600'>
                    <FaCheck />
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </GridContainer>
  );
}
