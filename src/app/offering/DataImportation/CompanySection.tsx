'use client';

import React from 'react';

const sections = [
  {
    title: 'Ability to organize, clean, and collect data from any format',
    description:
      'Packgine saves our customer time and resources by automating this process without requiring expertise to initiate the process.',
    image: '/images/dataim.jpeg',
  },
  {
    title: 'Model for missing values using our own vast packaging database',
    description:
      'Some businesses may have limited knowledge of their own current state packaging resulting in missing data. Packgine saves our customers from having to spend resources to fill these gaps.',
    image: '/images/db.jpeg',
  },
];

export default function CompanySection() {
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
