'use client';

import React, { useState } from 'react';

// Step Data
const steps = [
  {
    title: 'Data-Driven Insights',
    description:
      'Provide users with analytics on packaging materials, recyclability rates, regulatory compliance and consumer claims to inform decision-making, which includes goal setting targets and performance feedback',
    image: '/images/ourstory/Datadriven.jpeg',
  },
  {
    title: 'Collaboration Tools',
    description:
      'Second explanation comes here. PEnable packaging designers, brands, and suppliers to connect and collaborate on sustainable packaging projects with scenario planning and improvement opportunities',
    image: '/images/ourstory/collaboration-tools.jpeg',
  },
  {
    title: 'Material Library',
    description: 'Offer a comprehensive database of sustainable materials, their properties, and environmental impact',
    image: '/images/ourstory/Material-Library.jpeg',
  },
  {
    title: 'Design Optimization',
    description: 'Provide tools to analyze and optimize packaging designs for sustainability, considering factors like material usage, recyclability, and carbon efficiency across the product.',

    image: '/images/ourstory/DesignOptimization.jpeg',
  },
  {
    title: 'Consumer Education',
    description: 'Include features that allow brands to communicate their sustainable packaging efforts to consumers effectively',
    image: '/images/step5.png',
  },
  {
    title: 'Trend Forecasting',
    description: 'Utilize AI and machine learning to predict future trends in sustainable packaging, helping professionals stay ahead of the curve',
    image: '/images/step6.png',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Offer up-to-date information on packaging regulations and sustainability standards across different markets',
    image: '/images/step6.png',
  },
  {
    title: 'Impact Tracking',
    description: 'Provide tools for brands to measure and report on the environmental impact of their packaging choices',
    image: '/images/step6.png',
  },
];

export default function ExplainSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first

  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 py-16 ml-72">
      {/* Left Section: Steps */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-medium mb-8">Value Proposition</h2>
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-l-4 pl-4 transition-all ${
                activeIndex === index
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm w-6 h-6 rounded-full flex items-center justify-center border ${
                    activeIndex === index
                      ? 'bg-black text-white'
                      : 'bg-purple-200 text-gray-400'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-semibold ${
                    activeIndex === index ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-sm text-left text-gray-600">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Dynamic Image */}
      <div className="w-30  flex justify-center items-center">
        <img
          src={steps[activeIndex].image}
          alt={`Step ${activeIndex + 1}`}
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
