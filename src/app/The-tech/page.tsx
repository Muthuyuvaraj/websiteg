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

      <section className="text-center py-20 px-6 md:px-12 lg:px-24 bg-[#faf9f9]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          AI Native SaaS, not AI Reliant
        </h2>
        <p className="italic text-secondary-600 mt-3 text-base sm:text-lg md:text-xl">
          Customers own data, Packgine owns accountability
        </p>

        {/* Icons Row */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Ownership */}
          <div className="bg-gray-200 px-8 py-6 text-center rounded-xl shadow text-base sm:text-lg font-medium flex flex-col items-center gap-4 w-64">
            <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center text-white">
              <Briefcase className="w-8 h-8" />
            </div>
            Ownership
          </div>

          {/* Flexibility */}
          <div className="bg-gray-200 px-8 py-6 text-center rounded-xl shadow text-base sm:text-lg font-medium flex flex-col items-center gap-4 w-64">
            <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center text-white">
              <Move3D className="w-8 h-8" />
            </div>
            Flexibility
          </div>

          {/* Actionable Intelligence */}
          <div className="bg-gray-200 px-8 py-6 text-center rounded-xl shadow text-base sm:text-lg font-medium flex flex-col items-center gap-4 w-64">
            <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center text-white">
              <BarChart3 className="w-8 h-8" />
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
