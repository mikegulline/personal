import Image from 'next/image';
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

export const metadata = {
  title: 'Work',
  description:
    'Works Mike Gulline—Front End Engineer (TailwindCSS, TypeScript, React Js, Next JS)',
};

export default function Work() {
  return (
    <GridContainer columns={3}>
      <div className='w-full px-5 relative mb-12 sm:mb-24 text-left sm:text-center'>
        <h1 className='text-5xl sm:text-9xl font-black mb-4'>Works</h1>
        <BorderLeft>
          <h2 className='text-2xl sm:text-3xl mb-8 font-bold '>
            Responsive Web Design &amp; Development
          </h2>
        </BorderLeft>
        <p className='text-xl leading-8 max-w-2xl m-auto'>
          From idea to completion, <Emoji>😎</Emoji>Mike Gulline has been
          providing full service design and responsive web development for over
          24 years.
        </p>
      </div>
      {/* Loyal to Few */}
      <div id='ltf' className='mb-24'>
        <div className='px-5 mb-5 sm:mb-10'>
          <BrowserWrapper url='loyaltofew.com/store/mens/tee/stamp/black'>
            <Image src={ssLTFHero} alt='Loyal to Few Screenshot' />
          </BrowserWrapper>
        </div>
        <div className='w-full sm:flex'>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='loyaltofew.com/' small>
              <Image src={ssLTF1} alt='Loyal to Few Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='loyaltofew.com/store/mens' small>
              <Image src={ssLTF2} alt='Loyal to Few Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper
              url='loyaltofew.com/store/womens/tank/arch/maroon'
              small
            >
              <Image src={ssLTF3} alt='Loyal to Few Screenshot' />
            </BrowserWrapper>
          </div>
        </div>
      </div>
      {/* Immunocorp® */}
      <div id='hl' className='mb-24'>
        <div className='px-5 mb-5 sm:mb-10'>
          <BrowserWrapper url='immunocorp.com/'>
            <Image src={ssIMMHero} alt='Immunocorp® Product Screenshot' />
          </BrowserWrapper>
        </div>
        <div className='w-full sm:flex '>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='immunocorp.com/' small>
              <Image src={ssIMM1} alt='Immunocorp® Home Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='immunocorp.com/' small>
              <Image src={ssIMM2} alt='Immunocorp® Footer Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='immunocorp.com/cart' small>
              <Image src={ssIMM3} alt='Immunocorp® Cart Screenshot' />
            </BrowserWrapper>
          </div>
        </div>
      </div>
      {/* HempLand USA */}
      <div id='hl' className='mb-24'>
        <div className='px-5 mb-5 sm:mb-10'>
          <BrowserWrapper url='hemplandusa.com/products/restorative-cbd-cream'>
            <Image src={ssHLHero} alt='HempLand USA Product Screenshot' />
          </BrowserWrapper>
        </div>
        <div className='w-full sm:flex '>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='hemplandusa.com/' small>
              <Image src={ssHL1} alt='HempLand USA Home Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='hemplandusa.com/' small>
              <Image src={ssHL2} alt='HempLand USA Footer Screenshot' />
            </BrowserWrapper>
          </div>
          <div className='sm:w-1/3 px-5 mb-5 sm:mb-0'>
            <BrowserWrapper url='hemplandusa.com/cart' small>
              <Image src={ssHL3} alt='HempLand USA Cart Screenshot' />
            </BrowserWrapper>
          </div>
        </div>
      </div>
    </GridContainer>
  );
}
