"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownSection = {
    title: "Offering & Support",
    items: [
      { label: "Data Importation", href: "/offering/DataImportation" },
      { label: "Platform Analysis", href: "/offering/PlatformAnalysis" },
    ],
  };

  const flatSections = [
    { title: "About us", href: "/our-story" },
    { title: "The Tech", href: "/The-tech" },
    { title: "Intersection", href: "/intersection" },
    { title: "MOATS", href: "/moat" },
    { title: "Pricing", href: "/pricing" },
    { title: "Insights", href: "/Insights" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/images/logo.png" alt="Logo" className="h-[65px] w-[95px] -ml-3" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center gap-6 xl:gap-10 text-primary">
          {/* Our Story */}
          <Link
            href={flatSections[0].href}
            className="font-medium hover:text-secondary"
          >
            {flatSections[0].title}
          </Link>

          {/* Dropdown: Offering & Support */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer font-medium hover:text-secondary">
              {dropdownSection.title}
              <ChevronDown size={16} />
            </div>
            <div className="absolute left-0 mt-2 min-w-[10rem] max-w-[16rem] bg-white text-secondary shadow-md rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
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

          {/* Other flat links */}
          {flatSections.slice(1).map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="font-medium hover:text-primary"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Request a Demo Button */}
        <div className="hidden lg:block">
          <button className="bg-primary text-white px-4 xl:px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition">
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

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {/* Our Story first */}
          <Link
            href={flatSections[0].href}
            onClick={() => setMobileMenu(false)}
            className="block font-medium py-2"
          >
            {flatSections[0].title}
          </Link>

          {/* Dropdown: Offering & Support */}
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

          {/* Remaining links */}
          {flatSections.slice(1).map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              onClick={() => setMobileMenu(false)}
              className="block font-medium py-2"
            >
              {title}
            </Link>
          ))}

          <button className="bg-secondary text-white px-4 py-2 rounded-md font-medium w-full">
            Request a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
