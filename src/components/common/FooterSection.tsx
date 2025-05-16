'use client';

import {
  Facebook,
  Instagram,
  Youtube,
  X,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section - Branding */}
        <div className="flex justify-start">
          <div className="font-bold text-4xl mb-5 mt-12 ">Packgine</div>
        </div>

        {/* Middle - Company Links in 2 rows, 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4">
          {[  
            'Home',
            'About',
            'Solutions',
            'Pricing',
            'Team',
            'Career',
            'Contact',
            'Blog',
          ].map((item, index) => (
            <div key={index}>
              <span className="text-gray-400 hover:text-white cursor-pointer text-sm">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Right - Social Media with names */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="font-semibold mb-3">Follow us</h4>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center gap-2">
              <Facebook size={24} />
              <span className="text-sm">Facebook</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={24} />
              <span className="text-sm">Instagram</span>
            </li>
            <li className="flex items-center gap-2">
              <Youtube size={24} />
              <span className="text-sm">YouTube</span>
            </li>
            <li className="flex items-center gap-2">
              <X size={24} />
              <span className="text-sm">X </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
        <span>© Packgine Inc. All Rights Reserved 2025</span>
        <span className="mt-2 sm:mt-0">Terms & Conditions</span>
      </div>
    </footer>
  );
}
