"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownSection = {
    title: "Company",
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Blog", href: "/company/blog" },
      { label: "Contact", href: "/company/contact" },
    ],
  };

  const flatLinks = [
    { label: "Features ", href: "/The-tech" },
    { label: "Benefits", href: "/moat" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/images/logo.png" alt="Logo" className="h-[65px] w-[95px] -ml-3" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 ml-auto text-primary">
          {/* Flat Links */}
          {flatLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-medium hover:text-purple-400"
            >
              {label}
            </Link>
          ))}

          {/* Company Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer font-medium hover:text-secondary">
              {dropdownSection.title}
              <ChevronDown size={16} />
            </div>
            <div className="absolute right-0 mt-2 min-w-[12rem] bg-white text-secondary shadow-md rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
              {dropdownSection.items.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm truncate"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Request a Demo Button */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 xl:px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition">
            Request a Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {mobileMenu ? (
            <X className="h-6 w-6 cursor-pointer" onClick={() => setMobileMenu(false)} />
          ) : (
            <Menu className="h-6 w-6 cursor-pointer" onClick={() => setMobileMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {/* Flat Links */}
          {flatLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileMenu(false)}
              className="block font-medium py-2"
            >
              {label}
            </Link>
          ))}

          {/* Company Dropdown */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium py-2">
              {dropdownSection.title}
              <ChevronDown size={16} />
            </summary>
            <div className="ml-4 mt-2 flex flex-col gap-1 text-sm">
              {dropdownSection.items.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="py-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>

          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium w-full">
            Request a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
