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

  // Hide header during sign-in process
  if (signInModalOpen) {
    return null;
  }

  return (
    <header className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-md py-4'>
      <div className='md:container md:mx-auto flex justify-between items-center px-4'>
        <Link
          className='sm:text-3xl text-base sm:font-bold font-normal text-white'
          href='/'
        >
          Foodie - The Recipe Book
        </Link>
        <button className='text-white text-2xl md:hidden' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <NavMenu
          menus={MenuItems}
          navClassName='hidden md:block'
          ulClassName='flex flex-col md:flex-row'
          liClassName='my-2 md:my-0'
          linkClassName='text-white text-lg md:text-base hover:text-secondary-100 transition-colors duration-300 md:mx-4'
        />
        <SignedOut>
          <button className='items-center text-white' onClick={handleSignIn}>
            Sign In
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50'>
          <div className='bg-white rounded-lg p-2 m-4 relative w-40 shadow-lg'>
            <button
              className='text-black text-2xl absolute top-2 right-2'
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
            <NavMenu
              menus={MenuItems}
              navClassName='block md:hidden'
              ulClassName='flex flex-col items-start p-4'
              liClassName='my-1'
              linkClassName='text-black text-lg hover:text-gray-500 transition-colors duration-300'
            />
          </div>
        </div>
      )}
    </header>
  );
};
