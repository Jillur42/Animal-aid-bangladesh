'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                🐾
              </div>
              <span className="font-bold text-lg text-gray-900">Animal Aid BD</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link href="/cases" className="text-gray-700 hover:text-primary transition">Rescue Cases</Link>
            <Link href="/jokes" className="text-gray-700 hover:text-primary transition">Laugh & Help</Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-primary transition">Volunteer</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link href="/donate" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">Donate</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
            <Link href="/cases" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Rescue Cases</Link>
            <Link href="/jokes" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Laugh & Help</Link>
            <Link href="/volunteer" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Volunteer</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About</Link>
            <Link href="/donate" className="block px-3 py-2 text-primary font-semibold">Donate</Link>
          </div>
        )}
      </div>
    </nav>
  );
}