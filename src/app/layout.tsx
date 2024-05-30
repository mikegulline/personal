import Script from 'next/script';
import { cookies } from 'next/headers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LenisWrapper from '@/components/lenis-wrapper/';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Frontend Developer/Engineer Mike Gulline',
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
  const cookie = cookieStore.get('track');
  const link = cookieStore.get('click-link');

  let track = '';

  if (cookie && link) {
    track = `
    var clicky_custom = {
      session: {
        company: '${cookie.value}',
        click-link: '${link.value}',
      }
    };`;
  } else if (cookie) {
    track = `
    var clicky_custom = {
      session: {
        company: '${cookie.value}',
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
          src='https://static.getclicky.com/js'
        ></Script>
        <noscript>
          <p>
            <img
              alt='Clicky'
              width='1'
              height='1'
              src='//in.getclicky.com/101450064ns.gif'
            />
          </p>
        </noscript>
      </body>
    </html>
  );
}
