'use client';

import React from 'react';

export default function CompanySection() {
  return (
    <section>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mt-44">
            Data Importation 
            </h1>
        <section>
         
          <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-semibold mb-6 leading-tight text-primary">
                Ability to organize, clean, and collect data from any format
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                gCurv saves our customer time and resources by automating this process without requiring expertise to initiate the process
                </p>
                
            </div>

            {/* Right: Image/Video Placeholder */}
            <div className="mt-72 md:w-30 h-50 bg-gray-300" />
        </section>
        <section className="flex flex-col md:flex-row w-full h-screen -mt-44" >
            {/* Left: Text Content */}
            <div className="mt-72 md:w-30 h-50 bg-gray-300 ml-40" />
            {/* Right: Image/Video Placeholder */}
            <div className="w-full md:w-1/2 text-white p-10 md:p-20 flex flex-col justify-center ml-12">
                <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-primary -mt-20">
                Model for missing values using our own vast packaging database
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Some businesses may have limited knowledge of their own current state packaging resulting in missing data, gCurv saves our customer from having to spend resources to fill these gaps
                </p> 
            </div>
        </section>
        </section>
    </section>
  );
}
