"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/common/FooterSection";
import NavBar from "@/components/common/NavBar";
import FeatureSection from "./feature";

const agents = [
  {
    name: "How Material recycability scoring is Analysed?",
    position: "top-[6rem] left-0 md:left-[1%]",
    textPosition: "top-[110px] left-[300px]",
    id: "top-left",
    images: ["/images/top-left1.jpg", "/images/top-left2.jpg"],
    imagePosition: { top: "46px", left: "500px" },
  },
  {
    name: "What are Packaging portfolio heatmaps?",
    position: "top-[6rem] right-0 md:right-[5%]",
    textPosition: "top-[120px] right-[245px]",
    id: "top-right",
    images: ["/images/top-right.jpg", "/images/Packaging-porfolio -heatmaps-image-2.png"],
    imagePosition: { top: "45px", left: "770px" },
  },
  {
    name: "How does component scenario planner work?",
    position: "bottom-[9rem] left-0 md:left-[5%]",
    textPosition: "top-[140px] left-[250px]",
    id: "bottom-left",
    images: ["/images/bottom-left.jpg", "/images/component-scenario-planner-work-2.png"],
    imagePosition: { top: "730px", left: "510px" },
  },
  {
    name: "Are AI Material swap recommendations reducing carbon footprint?",
    position: "bottom-[9rem] right-0 md:right-[5%]",
    textPosition: "top-[100px] right-[230px]",
    id: "bottom-right",
    images: ["/images/bottom-right1.jpg", "/images/bottom-right2.jpg"],
    imagePosition: { top: "729px", left: "770px" },
  },
];

const AgentCloud = ({ agent }: any) => {
  const [current, setCurrent] = useState(0);

  const isBottom = agent.id.includes("bottom");
  const isLeft = agent.id.includes("left");

  const containerClasses = `thinking-cloud ${isLeft ? "left-cloud" : "right-cloud"} ${isBottom ? "bottom-cloud" : "top-cloud"}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % agent.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [agent.images.length]);

  return (
    <>
      {/* 👉 Image with slider and dots */}
      <div
        className="absolute w-[250px] h-auto z-10  mb-36 flex flex-col items-center"
        style={{
          top: agent.imagePosition.top,
          left: agent.imagePosition.left,
        }}
      >
        <div className="relative w-full h-[150px]">
          <Image
            src={agent.images[current]}
            alt={agent.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg border shadow-md"
          />
        </div>
        <div className="mt-2 flex space-x-2">
          {agent.images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* 💭 Cloud with text */}
      <div
        className={`absolute ${agent.position} flex ${
          isBottom ? "flex-col-reverse" : "flex-col"
        } items-center text-center text-sm font-medium text-gray-700 mb-60`}
      >
        <div className={containerClasses}>
          <div className="main-cloud"></div>
          <div className="small-cloud one"></div>
          <div className="small-cloud two"></div>
          <div className={`thinking-cloud-text ${agent.textPosition}`}>
            {agent.name}
          </div>
        </div>
      </div>
    </>
  );
};

const CloudSection = () => {
  return (
    <>
      <NavBar />
      <section className="relative min-h-[900px] flex flex-col items-center justify-center bg-white py-20 overflow-hidden">
        <div>
          <Image
            src="/images/central.jpg"
            alt="Central Visual"
            width={300}
            height={200}
            className="rounded-full"
          />
        </div>
        {agents.map((agent) => (
          <AgentCloud key={agent.id} agent={agent} />
        ))}
      </section>
        <FeatureSection />
      <Footer />
    </>
  );
};

export default CloudSection;
