'use client';

import React, { useState, useEffect } from 'react';

const features = [
  {
    title: 'Management ',
    image: {
      src: '/images/Vmang.png',
      description: 'Vendor Management.',
    },
  },
  {
    title: 'AI Suggestion',
    image: {
      src: '/images/AI1.png',
      description: 'Smart Insights with Our Custom AI Rule Engine',
    },
  },
  {
    title: 'Business Intelligence ',
    image: {
      src: '/images/bi.png',
      description: 'Packgine lets you simulate the lifecycle of each item or package across emissions, recyclability, and compliance outcomes.',
    },
  },
  {
    title: 'Security ',
    image: {
      src: '/images/sec.png',
      description: '10-minute access tokens + 1-day refresh tokens. “Remember Me” option extends session to 7 days.',
    },
  },
  {
    title: 'Data Collection',
    image: {
      src: '/images/dc.png',
      description: 'UI(Manual), Excel, .csv.',
    },
  },
  {
    title: 'Compliance & Regulation',
    image: {
      src: '/images/cr1.png',
      description: 'Visualize your total carbon footprint across all lifecycle stages',
    },
  },
];

export default function FeatureRotator() {
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % features.length);
      setRotationAngle((prevAngle) => prevAngle + 360);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNavbarClick = (index: number) => {
    setSelected(index);
    setRotationAngle((prevAngle) => prevAngle + 360);
    setIsPaused(true);
  };

  const handleNavbarHover = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-20 bg-[#faf9f9] text-gray-800">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Description Section */}
        <div className="md:w-[40%] w-full min-h-[300px] text-left flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">
            {features[selected].title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {features[selected].image.description}
          </p>
        </div>

        {/* Image Section with Circular Background */}
        <div className="md:w-[60%] flex justify-center">
          <div
            className="relative w-[300px] sm:w-[400px] md:w-[500px] aspect-[1/1] rounded-full overflow-hidden shadow-xl"
          >
            {/* Circular Background Layer */}
            <div className="absolute inset-0 rounded-full bg-gray-100"></div>

            {/* Circular Purple Border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400 animate-spin-slow"></div>

            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={features[selected].image.src}
                alt={features[selected].image.description}
                className="object-contain w-[95%] h-[95%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar with Rectangular Buttons */}
      <div
        className="flex flex-wrap gap-3 justify-center mt-12 cursor-pointer"
        onMouseEnter={handleNavbarHover}
        onMouseLeave={() => setIsPaused(false)}
      >
        {features.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavbarClick(index)}
            className={`px-5 py-3 rounded-md border text-sm font-medium transition-colors duration-300 ${
              selected === index
                ? 'bg-purple-400 text-white border-purple-400'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {item.title.trim()}
          </button>
        ))}
      </div>
    </section>
  );
}
