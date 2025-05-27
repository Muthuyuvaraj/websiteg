'use client';

import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Youtube,
  X,
} from 'lucide-react';

export default function Footer() {
  const navItems = [
    { label: 'Home', href: '/our-story' },
    { label: 'About', href: '/company/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/company/contact' },
  
  ];

  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section - Branding */}
        <div className="flex justify-start">
          <div className="font-bold text-4xl mb-5 mt-12 ">Packgine</div>
        </div>

        {/* Middle - Company Links in 2 rows, 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4">
          {navItems.map(({ label, href }, index) => (
            <div key={index}>
              <Link href={href} passHref>
                <span className="text-gray-400 hover:text-white cursor-pointer text-sm">
                  {label}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Right - Social Media with names */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="font-semibold mb-3">Follow us</h4>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Facebook size={24} />
                <span className="text-sm ml-1">Facebook</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram size={24} />
                <span className="text-sm ml-1">Instagram</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Youtube size={24} />
                <span className="text-sm ml-1">YouTube</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <X size={24} />
                <span className="text-sm ml-1">X</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
        <span>© Packgine Inc. All Rights Reserved 2025</span>
        <span className="mt-2 sm:mt-0 cursor-pointer hover:text-white">
          Terms & Conditions
        </span>
      </div>
    </footer>
  );
}
