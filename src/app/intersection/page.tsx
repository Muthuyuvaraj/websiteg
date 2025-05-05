'use client';

import React from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/FooterSection';
import Feature from './feature';

const values = [
  {
    title: '70% of Emissions Unsolved',
    description:
      'We empower fashion and textile companies with actionable data to reduce their emissions. This is our contribution to the climate solution. It means that everything we do starts from our customers.',
  },
  {
    title: 'Recyclability & EPR compliance - It’s urgent & Unavoidable',
    description:
      'We want to make a tangible impact. Capitalism, regulation, and software are just tools. Our main goal is decarbonization, so we\'ll always choose carbon impact over short-term financial gains.',
  },
  {
    title: 'Greenwashing – Brand risk, certification pressure',
    description:
      "Carbonauts are shareholders, not just employees. As company owners, we constantly work to improve our customers' experience. We value accountability, rely on each other, and never drop the ball.",
  },
  {
    title: 'Circulatory Optimization – Market differentiator for global brands',
    description:
      "The carbon problem is complex, so we deliver simplified solutions to our customers. We make our messages crystal clear for everyone, from our team to our clients, even if they're not experts in our field.",
  },
];

export default function IntersectionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />

      <section className="bg-gray-50 text-gray-800 py-16 px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-primary mb-12"></h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-primary text-center flex flex-col items-center justify-center">{value.title}</h2>
                
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 text-base mt-12 max-w-3xl mx-auto">
            This sector is on a rapid growth trajectory. Total Addressable Market (TAM) is real, growing, and underserved.
          </p>
        </div>
      </section>
        <Feature />
      <Footer />
    </main>
  );
}
