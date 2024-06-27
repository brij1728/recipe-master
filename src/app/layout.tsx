import './globals.css';

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Footer, Header } from '@/components';

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
          <Header />
          <Suspense fallback={<Loading />}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <main>{children}</main>
            </SignedIn>
          </Suspense>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
