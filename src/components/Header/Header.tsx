'use client';

import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from '@clerk/nextjs';

import Link from 'next/link';
import { MenuItems } from '../../../data';
import { NavMenu } from '../ui';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { openSignIn } = useClerk();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignIn = () => {
    setSignInModalOpen(true);
    openSignIn({ afterSignInUrl: '/' });
  };

  return (
    <header className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-md py-4'>
      <div className='md:container md:mx-auto flex justify-between items-center px-4'>
        <Link
          className='sm:text-3xl text-base sm:font-bold font-normal text-white'
          href='/'
        >
          Foodie - The Recipe Book
        </Link>
        <div className='flex items-center'>
          <button
            className='text-white text-2xl md:hidden'
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className='hidden md:flex items-center'>
            <NavMenu
              menus={MenuItems}
              navClassName='md:flex'
              ulClassName='flex flex-col md:flex-row'
              liClassName='my-2 md:my-0'
              linkClassName='text-white text-lg md:text-base hover:text-secondary-100 transition-colors duration-300 md:mx-4'
            />
            <SignedOut>
              <button
                className='ml-4 items-center text-white'
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </SignedOut>
            <SignedIn>
              <div className='ml-4 items-center text-white'>
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center z-50'>
          <div className='bg-white rounded-lg p-4 m-4 relative w-64 shadow-lg'>
            <button
              className='text-black text-2xl absolute top-2 right-2'
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
            <NavMenu
              menus={MenuItems}
              navClassName='block md:hidden'
              ulClassName='flex flex-col items-start'
              liClassName='my-2'
              linkClassName='text-black text-lg hover:text-gray-500 transition-colors duration-300'
            />
            <SignedOut>
              <button
                // className='mt-4 w-full bg-blue-500 text-white py-2 rounded'
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </SignedOut>
            <SignedIn>
              <div
              //  className='mt-4 w-full bg-blue-500 text-white py-2 rounded'
              >
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};
