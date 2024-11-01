// import { cookies } from 'next/headers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LenisWrapper from '@/components/lenis-wrapper/';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Software Engineer Michael Gulline',
  description:
    'Javascript, TypeScript, ReactJS, NextJS, NodeJS, SQL, NoSQL, PostgreSQL, MySQL, MongoDB, TailwindCSS',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get('track');
  // const link = cookieStore.get('click-link');
  const log = `
==========================================
Thanks for checking me out…

Yes, I am actively looking for a new team. 

Since you found my secret message, I think 
we might get along famously!

Let's connect on LinkedIn…

https://www.linkedin.com/in/Michaelgulline/
==========================================
`;
  return (
    <html lang='en'>
      <body
        className={`antialiased text-slate-700 relative ${inter.className}`}
      >
        <LenisWrapper>
          <Header />
          {children}
          {modal}
          <Footer />
        </LenisWrapper>
        <SpeedInsights />
        <Script id='console-log'>console.log(`{log}`);</Script>
      </body>
    </html>
  );
}
