'use client';

import React from 'react';

export default function CompanySection() {
  return (
    <section className='bg-[#faf9f9]'>
        
        <section>
         
          <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
                Ability to organize, clean, and collect data from any format
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                packgine saves our customer time and resources by automating this process without requiring expertise to initiate the process
                </p>
                
            </div>

            {/* Right: Image/Video Placeholder */}
            <img
                src="/images/dataim.jpeg"
                alt="Descriptive Alt Text"
                className="mt-72 w-[420px] h-[300px] object-cover"
              />

        </section>
        <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <img
                src="/images/db.jpeg"
                alt="Descriptive Alt Text"
                className="mt-44 ml-24 w-[420px] h-[300px] object-cover"
              />
            {/* Right: Image/Video Placeholder */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-primary -mt-20">
                Model for missing values using our own vast packaging database
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Some businesses may have limited knowledge of their own current state packaging resulting in missing data, packgine saves our customer from having to spend resources to fill these gaps
                </p> 
            </div>
        </section>
        </section>
    </section>
  );
}
