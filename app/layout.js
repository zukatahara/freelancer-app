'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};


import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
