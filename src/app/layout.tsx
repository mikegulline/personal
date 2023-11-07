import Header from '@/components/header';
import Footer from '@/components/footer';
import LenisWrapper from '@/components/lenis-wrapper/lenis-wrapper';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mike Gulline—Front End Engineer',
  description: 'TailwindCSS, TypeScript, React Js, Next JS',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
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
    </html>
  );
}
