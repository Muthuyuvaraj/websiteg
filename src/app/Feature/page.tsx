"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/common/NavBar";
import FeatureSection from "./feature";
import Footer from "@/components/common/FooterSection";
import {
  Recycle,
  BarChart3,
  Settings,
  Leaf,
} from "lucide-react";

const cards = [
  {
    id: 1,
    question: "How Material recyclability scoring is Analysed?",
    images: ["/images/top-left1.jpg", "/images/top-left2.jpg"],
    icon: <Recycle className="w-8 h-8 text-purple-400 mb-4" />,
  },
  {
    id: 2,
    question: "What are Packaging portfolio heatmaps?",
    images: ["/images/top-right.jpg", "/images/Packaging-porfolio -heatmaps-image-2.png"],
    icon: <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />,
  },
  {
    id: 3,
    question: "How does component scenario planner work?",
    images: ["/images/bottom-left.jpg", "/images/component-scenario-planner-work-2.png"],
    icon: <Settings className="w-8 h-8 text-purple-400 mb-4" />,
  },
  {
    id: 4,
    question: "Are AI Material swap recommendations reducing carbon footprint?",
    images: ["/images/bottom-right1.jpg", "/images/bottom-right2.jpg"],
    icon: <Leaf className="w-8 h-8 text-purple-400 mb-4" />,
  },
];

const FlipCard = ({ card, isFlipped, onFlip }: any) => {
  return (
    <div className="w-full h-[400px] perspective" onClick={() => onFlip(card.id)}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front  bg-white rounded-xl */}
        <div className="absolute w-90 h-80 bg-purple-100 border border-purple-300 shadow-md hover:shadow-lg  text-white rounded-xl flex flex-col items-center justify-center text-center text-2xl font-semibold p-6 backface-hidden">
          {card.icon}
          <span className="text-black">{card.question}</span>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-4 transform rotate-y-180 backface-hidden">
          {card.images.map((img: string, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-md shadow w-[90%] md:w-[300px]"
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                width={300}
                height={150}
                className="rounded-t-md object-cover w-[600] h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQGrid = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section>
      <NavBar />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <FlipCard
              key={card.id}
              card={card}
              isFlipped={flippedId === card.id}
              onFlip={(id: number) => setFlippedId(flippedId === id ? null : id)}
            />
          ))}
        </div>
      </div>
      <FeatureSection />
      <Footer />
    </section>
  );
};

export default FAQGrid;
