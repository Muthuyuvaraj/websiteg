'use client';

import Image from 'next/image';
import {
  Leaf,
  BrainCircuit,
  Package,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'SusTech (Sustainability Tech)',
    description: 'Circular economy, recyclability, carbon tracking, compliance',
  },
  {
    icon: BrainCircuit,
    title: 'AI Powered SaaS',
    description: 'AI for optimization, suggestions, automation of decisions',
  },
  {
    icon: Package,
    title: 'Enterprise-grade supply chain tools',
    description: 'Packaging, vendor, SKU-level lifecycle modelling',
  },
  {
    icon: ShieldCheck,
    title: 'RegTech (Regulatory Tech)',
    description: 'Regional PCR rules, EPR compliance, recyclability laws',
  },
];

export default function IntersectionFeaturesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary">
          Packgine is reimagining, and at pole position for this revolution –{' '}
          <span className="text-purple-600">A True Survival grade Software!</span>
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image on the left */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/8716290.jpg" // Make sure this path is correct
              alt="Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Features on the right */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-md">
            {features.map((feature, index) => {
              const Icon = feature.icon; // ✅ assign icon to uppercase variable
              return (
                <div
                  key={index}
                  className="bg-slate-100 rounded-lg shadow-sm p-6 text-center transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
