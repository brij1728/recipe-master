import './globals.css';

import { Footer, Header } from '@/components';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Loading from './loading';
import type { Metadata } from 'next';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe Master App',
  description:
    'A comprehensive and user-friendly app for managing, creating, and discovering recipes with advanced search and sorting capabilities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.CLERK_PUBLISHABLE_KEY}>
      <html lang='en'>
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <Header />
            <main>{children}</main>
          </Suspense>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
