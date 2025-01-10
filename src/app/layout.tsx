import localFont from 'next/font/local';

import Footer from './_components/Footer';
import Header from './_components/Header';
import './globals.css';
import { metadata } from './metadata';

const galmuri = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Galmuri11.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Galmuri11-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-galmuri',
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={galmuri.variable}>
        <div className="relative bg-cotam-blue-100 flex-col-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
