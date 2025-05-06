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
      <section className="pt-12 pb-16 px-4 sm:px-6 md:px-20 text-gray-800">
      <h1 className="text-2xl sm:text-5xl md:text-4xl text-primary font-semibold mt-12 text-center leading-snug sm:leading-snug mb-6">
  Unpackaging Sustainability Potential 
  to Empower Brands and Inspire Consumers
</h1>

  <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-secondary text-center">
    <p>
      Packgine is a comprehensive platform that can handle complexities of sustainable packaging data while offering practical, cost-effective solutions.
    </p>
  </div>
</section>


      {/* Video Section */}
      <section className="flex justify-center items-center my-12 px-4">
        <div className="w-full max-w-5xl aspect-video rounded-lg shadow-lg overflow-hidden">
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
      <section className="bg-[#faf9f9] py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-16">
          Value Proposition
        </h2>

        {steps.map((step, index) => (
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

      <Footer />
    </main>
  );
}
