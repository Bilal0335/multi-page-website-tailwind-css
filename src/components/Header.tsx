"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; // Hamburger icon
import { HiX } from 'react-icons/hi'; // Close icon
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="bg-white text-black py-5 flex justify-between items-center px-10 relative z-10">
      <Link href="/">
        <Image src="/logo.jpg" alt="Logo" width={100} height={30} />
      </Link>
      
      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-black font-bold text-2xl">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/shop" onClick={closeMenu}>Shop</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className="text-black text-2xl" />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-black text-3xl cursor-pointer"
          onClick={toggleMenu} // Toggle menu on click
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full bg-white p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-black text-3xl cursor-pointer"
            onClick={toggleMenu} // Close menu when clicked
          />
        </div>

        <nav className="flex flex-col items-center gap-3 text-black font-bold">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/shop" onClick={closeMenu}>Shop</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <FaShoppingCart className="text-black text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
