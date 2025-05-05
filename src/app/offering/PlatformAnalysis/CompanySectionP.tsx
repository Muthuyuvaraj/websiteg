'use client';

import React from 'react';

const sections = [
  {
    title: 'Product Benchmarking',
    description:
      'Packgine leverages our vast packaging database to help our customers compare themselves against industry leaders and competitors.',
    image: '/images/ben.jpeg',
  },
  {
    title: 'Product-by-Product Analysis',
    description:
      'Packgine can provide our customers with supplier-specific, robust environmental impact analyses of their individual components/products. Customers can analyze their recyclability, regulatory compliance, recycled content, and carbon footprint.',
    image: '/images/ana.jpeg',
  },
  {
    title: 'Portfolio Reports and Heat Mapping',
    description:
      'The Packgine platform provides an overarching analysis of an entire portfolio, identifying common areas for improvement and strengths. This helps clients focus their improvement efforts and communicate their strengths to consumers.',
    image: '/images/map.jpeg',
  },
  {
    title: 'Regulatory and Retailer Guideline Compliance',
    description:
      'Packgine notifies customers about upcoming regulations that may impact their packaging. The algorithm checks compliance with legal requirements and retailer guidelines.',
    image: '/images/db.jpeg',
  },
  {
    title: 'Partnerships with Packaging Solution Providers',
    description:
      'Our platform suggests customized packaging solutions based on analyses. The Packgine team then connects customers with the right packaging solution providers for an end-to-end solution.',
    image: '/images/par.jpeg',
  },
];

export default function CompanySectionP() {
  return (
    <section className="bg-[#faf9f9] py-12 md:py-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center justify-between gap-10 px-6 md:px-20 py-16`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 w-full text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              {section.title}
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed text-justify">
              {section.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg w-full max-w-md mx-auto object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
