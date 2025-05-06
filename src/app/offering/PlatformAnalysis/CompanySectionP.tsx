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
    <section className="bg-[#faf9f9] py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
    <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-16">
    </h2>

    {sections.map((step, index) => (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-20"
      >
        {/* Text Content */}
        <div
          className={`order-1 md:col-span-6 ${
            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {step.description}
          </p>
        </div>

        {/* Image */}
        <div
          className={`order-2 md:col-span-6 ${
            index % 2 === 0 ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <img
            src={step.image}
            alt={step.title}
            className="rounded-lg w-full max-w-md mx-auto object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    ))}
  </section>
  );
}
