'use client';

import NavBar from '@/components/common/NavBar';
import Footer from "@/components/common/FooterSection";
import React from 'react';
import Feature from './feature';
import { Briefcase, Move3D, BarChart3 } from "lucide-react";

export default function TechSection() {
  return (
    <main>
        <NavBar />
    
    <section className="text-center py-16 px-4 md:px-8 lg:px-16 bg-[#faf9f9]">
        
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
        AI Native SaaS, not AI Reliant
      </h2>
      <p className="italic text-secondary-600 mt-2 text-sm sm:text-base">
        Customers own data, Packgine owns accountability
      </p>

     

<div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-5xl mx-auto">
  {/* Ownership */}
  <div className="bg-gray-200 px-6 py-4 text-center rounded shadow text-sm sm:text-base font-medium flex flex-col items-center gap-2">
    <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center text-white">
      <Briefcase className="w-6 h-6" />
    </div>
    Ownership
  </div>

  {/* Flexibility */}
  <div className="bg-gray-200 px-6 py-4 text-center rounded shadow text-sm sm:text-base font-medium flex flex-col items-center gap-2">
    <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center text-white">
      <Move3D className="w-6 h-6" />
    </div>
    Flexibility
  </div>

  {/* Actionable Intelligence */}
  <div className="bg-gray-200 px-6 py-4 text-center rounded shadow text-sm sm:text-base font-medium flex flex-col items-center gap-2">
    <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center text-white">
      <BarChart3 className="w-6 h-6" />
    </div>
    Actionable Intelligence
  </div>
</div>

    </section>
    <Feature />
    <Footer />
    </main>
  );
}
