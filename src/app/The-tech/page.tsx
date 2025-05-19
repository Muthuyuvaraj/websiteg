"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/FooterSection";

const agents = [
  {
    name: "How Material recycability scoring is Analysed?",
    position: "top-[6rem] left-0 md:left-[5%]",
    id: "top-left",
  },
  {
    name: "What are Packaging portfolio heatmaps?",
    position: "top-[6rem] right-0 md:right-[5%]",
    id: "top-right",
  },
  {
    name: "How does component scenario planner work?",
    position: "bottom-[9rem] left-0 md:left-[5%]",
    id: "bottom-left",
  },
  {
    name: "Are AI Material swap recommendations reducing carbon footprint?",
    position: "bottom-[9rem] right-0 md:right-[5%]",
    id: "bottom-right",
  },
];

const steps = [
  {
    title: 'Extensive Packaging Material Database',
    description:
      'Our Platform offers over 25,000 packaging material profiles empowering businesses to find the perfect packaging solution tailored to their needs.',
    images: [
      '/images/Instant-Packaging-Analytics.jpg',
      '/images/Instant-Packaging-Analytics-2.jpg',
      '/images/Instant-Packaging-Analytics-3.jpg',
    ],
  },
  {
    title: 'User-Friendly LCA Models',
    description:
      'Our plug-and-play Life Cycle Assessment (LCA) allows companies to quickly assess the environmental impact of their packaging choices.',
    images: [
      '/images/Portfolio-Optimization.jpg',
      '/images/Portfolio-Optimization-2.jpg',
    ],
  },
  {
    title: 'Comprehensive Industry Benchmarks',
    description:
      'Clients can measure their packaging performance against leading Consumer Packaged Goods (CPG) and fast-Moving Consumer Goods (FMCG) brands; enables to enhance their business’s packaging strategy & sustainability efforts.',
    images: [
      '/images/Material-Library.jpg',
      '/images/Material-Library-2.jpg',
    ],
  },
];

const Features = () => {
  return (
    <section>
      <NavBar />
      <section className="relative min-h-[800px] flex flex-col items-center justify-center bg-white py-20 overflow-hidden">
        {/* Central image */}
        <div className="relative z-10">
          <Image
            src="/images/central.jpg"
            alt="Central Visual"
            width={600}
            height={400}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Agent bubbles */}
        {agents.map((agent, idx) => (
          <div
            key={idx}
            className={`absolute ${agent.position} w-[170px] h-[170px] rounded-full bg-purple-200 text-gray-700 flex items-center justify-center text-center text-sm font-medium shadow-lg`}
             
          >
            {agent.name}

            {/* Extra images per quadrant */}
            {agent.id === "top-left" && (
              <>
                <Image
                  src="/images/top-left1.jpg"
                  alt="Top Left Side"
                  width={100}
                  height={100}
                  className="absolute top-0 right-[-170px]"
                />
                <Image
                  src="/images/top-left 2.jpg"
                  alt="Top Left Bottom"
                  width={100}
                  height={100}
                  className="absolute bottom-[-70px] right-0"
                />
              </>
            )}
            {agent.id === "top-right" && (
              <Image
                src="/images/top-right.jpg"
                alt="Top Right Side"
                width={100}
                height={100}
                className="absolute top-0 left-[-100px] "
              />
            )}
            {agent.id === "bottom-left" && (
              <Image
                src="/images/bottom-left.jpg"
                alt="Bottom Left Side"
                width={100}
                height={100}
                className="absolute top-[-70px] right-0"
              />
            )}
            {agent.id === "bottom-right" && (
              <>
                <Image
                  src="/images/bottom-right1.jpg"
                  alt="Bottom Right Side"
                  width={100}
                  height={100}
                  className="absolute top-[-100px] left-0"
                />
                <Image
                  src="/images/bottom-right2.jpg"
                  alt="Bottom Right Left"
                  width={100}
                  height={100}
                  className="absolute bottom-0 left-[-100px]"
                />
              </>
            )}
          </div>
        ))}

        {/* Future decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Reserved for SVG paths */}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto">
        {steps.map((step, index) => {
          const [currentImage, setCurrentImage] = useState(0);
          const [paused, setPaused] = useState(false);

          useEffect(() => {
            if (paused) return;
            const interval = setInterval(() => {
              setCurrentImage((prev) => (prev + 1) % step.images.length);
            }, 5000); // change image every 10 seconds
            return () => clearInterval(interval);
          }, [paused, step.images.length]);

          const handleClick = () => {
            setPaused((prev) => !prev);
          };

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mb-24"
            >
              {/* Image Section */}
              <div
                className={`md:col-span-6 ${
                  index % 2 !== 0 ? 'md:order-1' : 'md:order-2'
                } order-2 flex justify-center md:justify-end px-4`}
              >
                <img
                  src={step.images[currentImage]}
                  alt={step.title}
                  loading="lazy"
                  className="rounded-lg w-full max-w-xl object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                  onClick={handleClick}
                />
              </div>

              {/* Text Section */}
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
          );
        })}
      </section>

      <Footer />
    </section>
  );
};

export default Features;
