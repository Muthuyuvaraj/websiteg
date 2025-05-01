'use client';

import React from 'react';

export default function CompanySectionP() {
  return (
    <section className='bg-[#faf9f9]'>
        <section>
            
         
         <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
                Product Benchmarking
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Packgine leverages our vast packaging database to help our customers compare themselves against industry leaders and competitors
                </p>
            </div>
            {/* Right: Image/Video Placeholder */}
            <img
                src="/images/ben.jpeg"
                alt="Descriptive Alt Text"
                className="mt-56 ml-24 w-[420px] h-[300px] object-cover"
              />
        </section>
        <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <img
                src="/images/ana.jpeg"
                alt="Descriptive Alt Text"
                className="mt-44 ml-24 w-[420px] h-[300px] object-cover"
              />
            {/* Right: Image/Video Placeholder */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-primary -mt-20">
                 Product-by-Product Analysis
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Packgine can provide our customers with supplier specific, robust environmental Impact analyses of their individual components products
                </p> 
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Customers can analyze their recyclability, regulatory compliance, and Recycled content and carbon footprint.
                </p> 
            </div>
        </section>
        <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
                Portfolio reports and heat mapping
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Packgine platform has the unique ability to provide an overarching analysis of an entire portfolio that identifies common areas for improvement and strengths
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                This points our client in the direction of where they should focus their improvement efforts
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Provides our customers with the data to communicate their strengths to their consumers.
                </p>
            </div>
            {/* Right: Image/Video Placeholder */}
            <img
                src="/images/map.jpeg"
                alt="Descriptive Alt Text"
                className="mt-44 ml-24 w-[420px] h-[300px] object-cover"
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
                 Regulatory and Retailer guideline compliance
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Packgine notifies our customer when there are incoming packaging regulations that may impact their current-state packaging
                </p> 
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                 The algorithm has the ability to check whether or not current packaging complies with regulatory requirements and applicable retailer guidelines
                </p> 
            </div>
        </section>
        <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
                 Partnerships with Packaging Solution Providers
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Our platform has the ability to suggests a bespoke set of packaging solutions to our customers based on their singular product analyses and their portfolio reports
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                The packgine team then connects our customers with those packaging solution providers to ensure a true beginning to end solution.
                </p>
            </div>
            {/* Right: Image/Video Placeholder */}
            <img
                src="/images/par.jpeg"
                alt="Descriptive Alt Text"
                className="mt-44 ml-24 w-[420px] h-[300px] object-cover"
              />
        </section>
        </section>
    </section>
  );
}
