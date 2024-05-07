import Image from 'next/image';
import Link from 'next/link';
import Emoji from '@/components/emoji';
import GridContainer from '@/components/grid-container';
import BrowserWrapper from '@/components/browser-wrapper';
import BorderLeft from '@/components/border-left';
import ssLTFHero from '@/public/images/loyal-to-few-screenshot.jpg';
import ssLTF1 from '@/public/images/loyal-to-few-home-screenshot.jpg';
import ssLTF2 from '@/public/images/loyal-to-few-category-screenshot.jpg';
import ssLTF3 from '@/public/images/loyal-to-few-side-cart-screenshot.jpg';

import ssIMMHero from '@/public/images/immunocorp-screenshot.jpg';
import ssIMM1 from '@/public/images/immunocorp-screenshot-landing.jpg';
import ssIMM2 from '@/public/images/immunocorp-screenshot-blog.jpg';
import ssIMM3 from '@/public/images/immunocorp-screenshot-home.jpg';

import klIMMHero from '@/public/images/kumato-homepage.jpg';
import klIMM1 from '@/public/images/kumato-story.jpg';
import klIMM2 from '@/public/images/kumato-offers.jpg';
import klIMM3 from '@/public/images/kumato-product-page.jpg';

import ssHLHero from '@/public/images/hempland-usa-home-screenshot.jpg';
import ssHL1 from '@/public/images/hempland-usa-product-2-screenshot.jpg';
import ssHL2 from '@/public/images/hempland-usa-cart-screenshot.jpg';
import ssHL3 from '@/public/images/hempland-usa-faq-screenshot.jpg';

export const metadata = {
  title: 'Frontend Development Portfolio',
  description:
    'Frontend Developer (JavaScript/TypeScript, React, NextJS, TailwindCSS)',
};

const portfolio = [
  {
    title: 'Kumato®',
    link: 'https://www.cho-wa.com',
    description: '',
    gallery: [
      {
        title: 'Kumato® Home Page',
        link: 'https://www.cho-wa.com',
        image: klIMMHero,
      },
      {
        title: 'The story of Cho-Wa™',
        link: 'https://www.cho-wa.com/cho-wa-story/',
        image: klIMM1,
      },
      {
        title: 'Special Offers',
        link: 'https://www.cho-wa.com/product/cho-wa/',
        image: klIMM2,
      },
      {
        title: 'Cho-Wa™ Discount Offers ',
        link: 'https://www.cho-wa.com/product/cho-wa/',
        image: klIMM3,
      },
    ],
  },
  {
    title: 'Immunocorp®',
    link: 'https://www.immunocorp.com',
    description: '',
    gallery: [
      {
        title: 'Immunocorp® Home Page',
        link: 'https://www.immunocorp.com',
        image: ssIMMHero,
      },
      {
        title: '7-Step Guide to Immunity for Life',
        link: 'https://www.immunocorp.com/7-step-guide-to-immunity-for-life/',
        image: ssIMM1,
      },
      {
        title: 'Blog Article',
        link: 'https://www.immunocorp.com/7-step-guide-to-immunity-for-life/',
        image: ssIMM2,
      },
      {
        title: 'Immunocorp® Home Page Hero',
        link: 'https://www.immunocorp.com',
        image: ssIMM3,
      },
    ],
  },
  {
    title: 'HempLand® USA',
    link: 'https://www.hemplandusa.com/',
    description: '',
    gallery: [
      {
        title: 'HempLand USA Home Page',
        link: 'https://www.hemplandusa.com/',
        image: ssHLHero,
      },
      {
        title: 'HempLand USA Product',
        link: 'https://www.hemplandusa.com/products/cannabitol-full-spectrum-hemp-cbd-oil-5000/',
        image: ssHL1,
      },
      {
        title: 'HempLand Cart',
        link: 'https://www.hemplandusa.com/cart/',
        image: ssHL2,
      },
      {
        title: 'HempLand FAQs',
        link: 'https://www.hemplandusa.com/faqs/',
        image: ssHL3,
      },
    ],
  },
  {
    title: 'Loyal to Few®',
    link: 'https://www.loyaltofew.com/',
    description: '',
    gallery: [
      {
        title: 'Loyal to Few Product Page',
        link: 'https://www.loyaltofew.com/store/mens/tee/stamp/black',
        image: ssLTFHero,
      },
      {
        title: 'Home Page',
        link: 'https://www.loyaltofew.com/',
        image: ssLTF1,
      },
      {
        title: 'Category Page',
        link: 'https://www.loyaltofew.com/store/mens',
        image: ssLTF2,
      },
      {
        title: 'Shopping Cart Drawr',
        link: 'https://www.loyaltofew.com/store/womens/tank/arch/maroon',
        image: ssLTF3,
      },
    ],
  },
];

type ProtfolioType = typeof portfolio;

type PortfolioPropsType = {
  items: ProtfolioType;
};

const Portfolio = ({ items }: PortfolioPropsType) => (
  <div>
    {items.map(({ title, link, description, gallery }): React.ReactNode => {
      const showGallery = [...gallery];
      const showHero = showGallery.shift();
      if (!showHero?.link) return;
      return (
        <div key={title} className='mb-24'>
          <div className='px-5 mb-5 sm:mb-10'>
            <Link href={showHero.link} title={showHero.title} target='_blank'>
              <BrowserWrapper url={showHero.link}>
                <Image
                  src={showHero.image}
                  alt={showHero.title}
                  placeholder='blur'
                  width={982}
                  height={492}
                />
              </BrowserWrapper>
            </Link>
          </div>

          <div className='w-full sm:flex'>
            {showGallery.map((item) => (
              <div key={item.title} className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
                <Link href={item.link} title={item.title} target='_blank'>
                  <BrowserWrapper url={item.link} small>
                    <Image
                      src={item.image}
                      alt={item.title}
                      placeholder='blur'
                      width={560}
                      height={280}
                    />
                  </BrowserWrapper>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

export default function Work() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 relative mb-12 sm:mb-24 text-left sm:text-center'>
        <h1 className='text-5xl sm:text-9xl font-black mb-4'>Works</h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            Responsive Frontend Developement/Engineering
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8 max-w-2xl m-auto'>
          From idea to completion, <Emoji>😎</Emoji>Mike Gulline provides
          full-stack design, responsive web development and software
          engineering.
        </p>
      </div>
      <Portfolio items={portfolio} />
    </GridContainer>
  );
}
