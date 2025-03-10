// components/Navbar.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and School Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80">
          <Image 
            src="/images/logo.png"
            alt="School Logo"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold hidden md:block">
            Muizenberg High School
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/academics">Academics</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          <NavLink href="/events">Calendar</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-school-dark"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-4 space-y-4">
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/academics">Academics</MobileNavLink>
          <MobileNavLink href="/admissions">Admissions</MobileNavLink>
          <MobileNavLink href="/events">Calendar</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component for desktop
const NavLink = ({ href, children }) => (
  <Link href={href} className="hover:text-school-light transition-colors">
    {children}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, children }) => (
  <Link href={href} className="block px-4 py-2 hover:bg-school-dark rounded-lg">
    {children}
  </Link>
);