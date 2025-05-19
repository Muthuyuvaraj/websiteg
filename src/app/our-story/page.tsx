'use client';

import React, { useState } from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/FooterSection';

const steps = [
  {
    title: 'Instant Packaging Analytics',
    description:
      'Our Plaform provides an AI-powered platform that enables users to conduct instant lifecycle analysis of packaging materials. This includes evaluating recyclability, carbon footprint, and reuse potential, allowing businesses to make informed decisions that support sustainability goals.',
    image: '/images/Instant-Packaging-Analytics.jpg',
  },
  {
    title: 'Portfolio Optimization',
    description:
      'Companies can optimize their packaging portfolios by replacing high-impact materials with more sustainable options. The platform ensures that cost control is maintained while transitioning to greener alternatives, enabling a balance between environmental responsibility and financial viability.',
    image: '/images/Portfolio-Optimization.jpg',
  },
  {
    title: 'Material Library',
    description:
      'Packgine offers a comprehensive and continuously updated database of sustainable packaging materials. This includes detailed information on each material’s physical properties, sourcing methods, recyclability, carbon footprint, and overall environmental impact. Brands can easily compare options to make informed decisions that align with both performance requirements and sustainability goals.',
    image: '/images/Material-Library.jpg',
  },
  {
    title: 'Automated Compliance',
    description:
      'Compliance automation is dynamic, and based on evolving packaging laws across more than 50 markets. This ensures that businesses stay ahead of regulatory changes, minimizing the risk of non-compliance while enhancing brand credibility and trust.',
    image: '/images/Automated-Compliance.jpg',
  },
];

export default function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="bg-[#faf9f9]">
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-28 pb-32 px-4 sm:px-6 md:px-20 text-white"
        style={{ backgroundImage: "url('/images/Hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto mt-44 sm:mt-40">
          <h1 className="text-2xl sm:text-5xl md:text-1xl font-medium leading-tight sm:leading-snug mb-6">
            Unpackaging Sustainability Potential to Empower Brands and Inspire Consumers
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
            Packgine is a comprehensive platform that can handle complexities of sustainable packaging data while offering practical, cost-effective solutions.
          </p>
          <button
            onClick={() => setShowVideo(true)}
            className="bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-md font-medium mt-10 shadow-md"
          >
            Discover Packgine
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-7 text-white text-4xl font-bold hover:text-red-400 transition"
              >
                &times;
              </button>
              <iframe
  className="w-full h-full"
  src="/videos/packgine.mp4"
  title="Discover Packgine"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

            </div>
          </div>
        )}
      </section>

      {/* Value Proposition Section */}
      <section className="bg-[#faf9f9] py-16 md:py-24 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10 sm:mb-16">
          Value Proposition
        </h2>

        <p className="text-gray-700 text-justify text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-10">
          Packgine is an innovative platform designed to help brands navigate the complexities of sustainable packaging. It provides essential tools and resources to assess the environmental impact of packaging materials, ensuring brands can make informed decisions.
        </p>

        {steps.map((step, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mb-24"
          >
            {/* Image */}
            <div
              className={`md:col-span-6 ${
                index % 2 !== 0 ? 'md:order-1' : 'md:order-2'
              } order-2 flex justify-center md:justify-end px-4`}
            >
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="rounded-lg w-full max-w-xl object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Text */}
            <div
              className={`md:col-span-6 ${
                index % 2 !== 0 ? 'md:order-2' : 'md:order-1'
              } order-1 flex justify-center md:justify-start px-4`}
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}