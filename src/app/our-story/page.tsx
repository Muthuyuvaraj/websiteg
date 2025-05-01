'use client';

import React, { useState } from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/FooterSection';

const steps = [
  {
    title: 'Data-Driven Insights',
    description:
      'Provide users with analytics on packaging materials, recyclability rates, regulatory compliance and consumer claims to inform decision-making, which includes goal setting targets and performance feedback',
    image: '/images/Data.jpg',
  },
  {
    title: 'Collaboration Tools',
    description:
      'Enable packaging designers, brands, and suppliers to connect and collaborate on sustainable packaging projects with scenario planning and improvement opportunities',
    image: '/images/collaboration.jpg',
  },
  {
    title: 'Material Library',
    description:
      'Offer a comprehensive database of sustainable materials, their properties, and environmental impact',
    image: '/images/mlib.jpg',
  },
  {
    title: 'Design Optimization',
    description:
      'Provide tools to analyze and optimize packaging designs for sustainability, considering factors like material usage, recyclability, and carbon efficiency across the product.',
    image: '/images/design.jpg',
  },
  {
    title: 'Consumer Education',
    description:
      'Include features that allow brands to communicate their sustainable packaging efforts to consumers effectively',
    image: '/images/consumer.jpg',
  },
  {
    title: 'Trend Forecasting',
    description:
      'Utilize AI and machine learning to predict future trends in sustainable packaging, helping professionals stay ahead of the curve',
    image: '/images/trend.jpg',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Offer up-to-date information on packaging regulations and sustainability standards across different markets',
    image: '/images/reg.jpg',
  },
  {
    title: 'Impact Tracking',
    description:
      'Provide tools for brands to measure and report on the environmental impact of their packaging choices',
    image: '/images/impt.jpg',
  },
];

export default function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-[#faf9f9]">
      <NavBar />

      {/* Hero Section */}
      <section className="py-24 px-6 md:px-20 text-gray-800">
        <h1 className="text-[40px] md:text-h1 font-medium text-center text-primary mb-8">
          Unpackaging Sustainability Potential to Empower Brands and Inspire Consumers
        </h1>
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-secondary text-center">
          <p>
            Packgine is a comprehensive platform that can handle complexities of sustainable packaging data while offering practical, cost-effective solutions.
          </p>
        </div>
      </section>

      {/* Offline Video Section */}
      <section className="h-screen flex justify-center items-center mb-40 px-4">
        <div className="w-full max-w-5xl aspect-video rounded-lg shadow-lg overflow-hidden -mt-40">
          <video
            className="w-full h-full object-cover"
            controls
            muted
            autoPlay
            loop
          >
            <source src="/videos/packgine.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="flex flex-col md:flex-row gap-10 px-4 py-10 md:ml-28 items-center md:items-start text-center md:text-left">
        {/* Left Section */}
        <div className="w-full md:w-1/2 -mt-44">
          <h2 className="text-2xl md:text-4xl text-primary font-medium mb-8">Value Proposition</h2>
          <div className="flex flex-col gap-6 items-center md:items-start">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer border-l-4 pl-4 w-full transition-all ${
                  activeIndex === index
                    ? 'border-purple-500 text-black'
                    : 'border-transparent text-gray-400'
                }`}
              >
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span
                    className={`text-sm w-6 h-6 rounded-full flex items-center justify-center border ${
                      activeIndex === index
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-400'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-medium ${
                      activeIndex === index ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-sm text-secondary">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-center mt-6 md:-mt-10">
          <img
            src={steps[activeIndex].image}
            alt={`Step ${activeIndex + 1}`}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-sm shadow-md"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
