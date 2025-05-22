"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Extensive Packaging Material Database",
    description:
      "Our Platform offers over 25,000 packaging material profiles empowering businesses to find the perfect packaging solution tailored to their needs.",
    images: [
      "/images/Extensive-Packaging-Material-database-1.png",
      "/images/Extensive-Packaging-Material-database-2.png",
    ],
  },
  {
    title: "User-Friendly LCA Models",
    description:
      "Our plug-and-play Life Cycle Assessment (LCA) allows companies to quickly assess the environmental impact of their packaging choices.",
    images: ["/images/LCA-1.png", "/images/LCA-2.png"],
  },
  {
    title: "Comprehensive Industry Benchmarks",
    description:
      "Clients can measure their packaging performance against leading Consumer Packaged Goods (CPG) and fast-Moving Consumer Goods (FMCG) brands; enables to enhance their business’s packaging strategy & sustainability efforts.",
    images: [
      "/images/comprehensive-Industry-Benchmarks-1.png",
      "/images/comprehensive-Industry-Benchmarks-2.png",
    ],
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 ">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        {steps.map((step, index) => {
          const [currentImage, setCurrentImage] = useState(0);
          const [paused, setPaused] = useState(false);

          useEffect(() => {
            if (paused) return;
            const interval = setInterval(() => {
              setCurrentImage((prev) => (prev + 1) % step.images.length);
            }, 5000);
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
              {/* Image */}
              <div
                className={`md:col-span-6 ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                } order-2 flex justify-center md:justify-end`}
              >
                <img
                  src={step.images[currentImage]}
                  alt={step.title}
                  loading="lazy"
                  onClick={handleClick}
                  className="rounded-lg w-full h-auto max-w-full object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                />
              </div>

              {/* Text */}
              <div
                className={`md:col-span-6 ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                } order-1 flex justify-center md:justify-start`}
              >
                <div className="w-full">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
