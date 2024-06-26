import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-md py-4'>
      <div className='md:container md:mx-auto flex justify-between items-center px-4'>
        <Link
          className='sm:text-3xl text-base sm:font-bold font-normal text-white'
          href='/'
        >
          Foodie - The Recipe Book
        </Link>
      </div>
    </header>
  );
};
