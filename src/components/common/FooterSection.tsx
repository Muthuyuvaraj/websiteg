'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, X } from 'lucide-react';

export default function Footer() {
  const navItems = [
    { label: 'Home', href: '/our-story' },
    { label: 'About', href: '/company/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/company/contact' },
  ];

  return (
    <footer className="bg-black text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center flex-wrap gap-6 sm:gap-4">
        
        {/* Left - Brand */}
        <div className="font-bold text-2xl sm:text-3xl">Packgine</div>

        {/* Center - Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm text-gray-400 w-full md:w-auto">
          {navItems.map(({ label, href }, index) => (
            <Link key={index} href={href} passHref>
              <span className="hover:text-white cursor-pointer">{label}</span>
            </Link>
          ))}
        </div>

        {/* Right - Social Icons */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm  justify-center sm:justify-end">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
            <Facebook size={18} /> Facebook
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
            <Instagram size={18} /> Instagram
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
            <X size={20} /> X
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
            <Youtube size={18} /> YouTube
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-gray-700 pt-3 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <span>© Packgine Inc. All Rights Reserved 2025</span>
        <span className="mt-2 sm:mt-0 hover:text-white cursor-pointer">Terms & Conditions</span>
      </div>
    </footer>
  );
}
