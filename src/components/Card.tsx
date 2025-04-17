// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="group w-full max-w-xs cursor-pointer">
      {/* Top black bar */}
      <div className="h-[4px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4 font-semibold text-black flex items-center justify-center gap-2">
          Learn more <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
