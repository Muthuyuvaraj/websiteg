"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

type Feature = {
  title: string;
  images: string[];
  desc: string[];
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feature.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [feature.images.length]);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
        {feature.title}
      </h3>

      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={feature.images[index]}
          alt={feature.title}
          fill
          className="object-cover"
        />
      </div>

      <ul className="space-y-2">
        {feature.desc.map((point, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <Check size={14} className="text-black flex-shrink-0 mt-px mr-2" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
