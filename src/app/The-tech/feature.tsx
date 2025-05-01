'use client';

import React, { useEffect, useState } from 'react';

const features = [
  {
    title: 'Management ',
    images: [
      {
        src: '/images/Vmang.png',
        description: 'Vendor Management.',
      },
      {
        src: '/images/cman.png',
        description: 'Category Management',
      },
      {
        src: '/images/iman.png',
        description: 'Inventory Management',
      },
    ],
  },
  {
    title: 'AI Suggestion',
    images: [
      {
        src: '/images/AI1.png',
        description: 'Smart Insights with Our Custom AI Rule Engine',
      },
      {
        src: '/images/Ai2.png',
        description: 'The component is made of PP, has black color with norecycled content,lacks coating andtarget region match— leading to a nonrecyclable status',
      },
    ],
  },
  {
    title: 'Business Intelligence ',
    images: [
      {
        src: '/images/bi.png',
        description: ' Packgine lets you simulate the lifecycle of each item or package across emissions,recyclability, and compliance outcomes.',
      },
      {
        src: '/images/bi2.png',
        description: 'Track your entire carbon footprint — from emissions,recycled content to recyclability — in one unified scorecard',
      },
    ],
  },
  {
    title: 'Security ',
    images: [
      {
        src: '/images/sec.png',
        description: '10-minute access tokens + 1-day refresh tokens. “Remember Me” option extends session to 7 day',
      },
    ],
  },
  {
    title: 'Data Collection',
    images: [
      {
        src: '/images/dc.png',
        description: 'UI(Manual), Excel, .csv.',
      },
      
    ],
  },
  {
    title: 'Compliance & Regulation',
    images: [
      {
        src: '/images/cr1.png',
        description: 'Visualize your total carbon footprint across all lifecycle stages',
      },
      {
        src: '/images/cr2.png',
        description: ' improve components flagged as non-recyclable with detailed, AI-generated insights and tailored design recommendations',
      },
    ],
  },
];

export default function GHGFeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setActiveImageIndex(0);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeIndex];
  const currentImage = currentFeature.images[activeImageIndex];

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center gap-10 mb-32">
      {/* Oval feature buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setActiveIndex(index);
              setActiveImageIndex(0);
            }}
            className={`flex items-center justify-center px-6 py-2 rounded-full border transition-all cursor-pointer text-sm font-medium ${
              index === activeIndex
                ? 'bg-[#EAF0F6] text-black border-black shadow-md'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            ✓ {item.title}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full items-start">
        {/* Thumbnails */}
        <div className="flex flex-col items-center gap-3">
          {currentFeature.images.map((img, i) => (
            <div
              key={i}
              className={`w-16 h-12 rounded border cursor-pointer overflow-hidden ${
                activeImageIndex === i ? 'border-purple-400' : 'border-gray-300'
              }`}
              onMouseEnter={() => setActiveImageIndex(i)}
            >
              <img
                src={img.src}
                alt={`thumbnail-${i}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Main image with overlapping tooltip */}
        <div className="relative flex-1 flex justify-center items-start">
          <div className="relative inline-block">
            {/* Main image */}
            <img
              src={currentImage.src}
              alt={currentFeature.title}
              className="w-full max-w-4xl rounded-lg border"
            />

            {/* Tooltip (overlapping on right) */}
            <div className="absolute top-4 right-4 bg-black text-white text-sm p-4 rounded-lg shadow-lg max-w-sm z-10">
              {currentImage.description}
            </div>
          </div>

          {/* Dots (optional) */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-2">
            {currentFeature.images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeImageIndex === i ? 'bg-purple-400' : 'bg-gray-400'
                }`}
                onMouseEnter={() => setActiveImageIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
