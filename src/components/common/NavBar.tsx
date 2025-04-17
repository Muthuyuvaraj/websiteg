"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  return (
    <div className="md:sticky md:top-0 z-50 w-full">
      {/* Desktop */}
      <div className="hidden lg:block bg-white shadow p-4">
        <div className="flex justify-between mx-8 items-center">
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className="h-10" />
          </Link>
          <div className="flex gap-8 text-[16px] items-center">
            <Link href="/our-story" className="hover:text-primary font-medium">
              Our Story
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <p className="hover:text-primary font-medium cursor-pointer">
                Offering & Support
              </p>

              {dropdownOpen && (
                <div className="absolute bg-white shadow-md rounded-md mt-2 p-2 w-48 z-50">
                  <Link href="/offering/DataImportation" className="block px-4 py-2 hover:bg-gray-100">
                     Data Importation
                  </Link>
                  <Link href="/offering/PlatformAnalysis" className="block px-4 py-2 hover:bg-gray-100">
                    Platform Analysis
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="hover:text-primary font-medium">Pricing</Link>
            <Link href="/insights" className="hover:text-primary font-medium">Insights</Link>
            <MainButton text="Request a quote" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden fixed top-0 w-full z-[999] bg-white py-4 shadow">
        <div className="flex justify-between mx-4">
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className="h-8" />
          </Link>
          <div>
            {menu ? (
              <X className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="menu"
                className="cursor-pointer h-6"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {menu && (
          <div className="mt-4 flex flex-col gap-4 px-4">
            <Link href="/our-story" onClick={() => setMenu(false)}>
              Our Story
            </Link>
            <Link href="/offering/Data Importation " onClick={() => setMenu(false)}>
              Data Importation 
            </Link>
            <Link href="/offering/Platform Analysis " onClick={() => setMenu(false)}>
               Platform Analysis 
            </Link>
            
            <MainButton text="Request a quote" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
