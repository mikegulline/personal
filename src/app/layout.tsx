// import { cookies } from 'next/headers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LenisWrapper from '@/components/lenis-wrapper/';
import './globals.css';
import { Inter } from 'next/font/google';
import ConsoleLog from '@/components/console-log';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Software Engineer (Frontend/Backend/Fullstack) Mike Gulline',
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
        <ConsoleLog />
        <SpeedInsights />
      </body>
    </html>
  );
}
