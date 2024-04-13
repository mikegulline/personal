import Script from 'next/script';
import { cookies } from 'next/headers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LenisWrapper from '@/components/lenis-wrapper/';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mike Gulline—Front End Web Developer',
  description:
    'Custom CMS WordPress development with jQuery, Javascript, TypeScript, React Js, Next JS, TailwindCSS',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const cookieStore = cookies();
  const portfolio = cookieStore.get('portfolio');
  let track = '';
  if (portfolio) {
    track = `
    var clicky_custom = {
      href: '/portfolio/${portfolio.value}',
      title: 'Track',
      session: {
        username: '${portfolio.value}',

      }
    };`;
  }
  return (
    <html lang='en'>
      <body
        className={` antialiased text-slate-700 relative ${inter.className}`}
      >
        <LenisWrapper>
          <Header />
          {children}
          {modal}
          <Footer />
        </LenisWrapper>
      </body>
      <Script
        id='track'
        dangerouslySetInnerHTML={{
          __html: track,
        }}
      ></Script>
      <Script
        id='clicky'
        async
        data-id='101450064'
        src='//static.getclicky.com/js'
      ></Script>
    </html>
  );
}
