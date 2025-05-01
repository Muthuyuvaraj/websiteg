'use client';

import React from 'react';

export default function CompanySection() {
  return (
    <section className="bg-[#faf9f9]">
      {/* First Block: Left Content, Right Image */}
      <div className="flex flex-col md:flex-row w-full min-h-screen pt-20 md:pt-8 -mt-32 -mb-36">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white p-6 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
            Ability to organize, clean, and collect data from any format
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Packgine saves our customer time and resources by automating this process without requiring expertise to initiate the process.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full mt-52 md:w-1/2 flex justify-center md:mt-56">
          <img
            src="/images/dataim.jpeg"
            alt="Data Organization"
            className="w-full md:w-[420px] h-[250px] md:h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Second Block: Left Image, Right Content */}
      <div className="flex flex-col md:flex-row w-full min-h-screen pt-20 md:pt-8 -mt-48">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:mt-56">
          <img
            src="/images/db.jpeg"
            alt="Database Modeling"
            className="w-full md:w-[420px] h-[250px] md:h-[300px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-white p-6 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-primary">
            Model for missing values using our own vast packaging database
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Some businesses may have limited knowledge of their own current state packaging resulting in missing data. Packgine saves our customers from having to spend resources to fill these gaps.
          </p>
        </div>
      </div>
    </section>
  );
}
