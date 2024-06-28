'use client';

import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

import Link from 'next/link';
import { MenuItems } from '../../../data';
import { NavMenu } from '../ui';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <button className='text-white text-2xl md:hidden' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <NavMenu
          menus={MenuItems}
          navClassName='hidden md:block'
          ulClassName='flex flex-col md:flex-row'
          liClassName='my-2 md:my-0'
          linkClassName='text-white text-lg md:text-base hover:underline'
        />
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
              ulClassName='flex flex-col items-center'
              liClassName='my-1'
              linkClassName='text-black text-lg hover:underline'
            />
          </div>
        </div>
      )}
    </header>
  );
};
