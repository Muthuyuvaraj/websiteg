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
