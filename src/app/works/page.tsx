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

import ssHLHero from '@/public/images/hempland-usa-product-2-screenshot.jpg';
import ssHL1 from '@/public/images/hempland-usa-home-screenshot.jpg';
import ssHL2 from '@/public/images/hempland-usa-footer-screenshot.jpg';
import ssHL3 from '@/public/images/hempland-usa-cart-screenshot.jpg';

import ssCBDHero from '@/public/images/iwantmycbd-home-page.jpg';
import ssCBD1 from '@/public/images/iwantmycbd-gallery.jpg';
import ssCBD2 from '@/public/images/iwantmycbd-product.jpg';
import ssCBD3 from '@/public/images/iwantmycbd-conditions.jpg';

export const metadata = {
  title: 'Work',
  description:
    'Works Mike Gulline—Full Stack Web Developer (TailwindCSS, TypeScript, React Js, Next JS)',
};

const portfolio = [
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
    title: 'I wand my CBD',
    link: 'https://iwantmycbd.org/',
    description: '',
    gallery: [
      {
        title: 'I want my CBD Home Page',
        link: 'https://iwantmycbd.org/',
        image: ssCBDHero,
      },
      {
        title: 'Gallery Page',
        link: 'https://iwantmycbd.org/cbd-product-reviews-2019/',
        image: ssCBD1,
      },
      {
        title: 'Product Page',
        link: 'https://iwantmycbd.org/cbd-product-review/cannabitol-750-thc-free-cbd-hemp-oil-soft-gels/',
        image: ssCBD2,
      },
      {
        title: 'Conditions Page',
        link: 'https://iwantmycbd.org/cannabidiol/conditions/',
        image: ssCBD3,
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
                      width={300}
                      height={150}
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
            Responsive Web Design &amp; Full Stack Web Developement
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8 max-w-2xl m-auto'>
          From idea to completion, <Emoji>😎</Emoji>Mike Gulline has been
          providing full service design and responsive full stack web
          development for over 25 years.
        </p>
      </div>
      <Portfolio items={portfolio} />
    </GridContainer>
  );
}
