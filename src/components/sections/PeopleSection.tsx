"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const team = [
  {
    name: "David Cameron",
    role: "Sr. Consultant",
    image: "/images/team.jpeg",
    featured: false,
  },
  {
    name: "Eleder Medona",
    role: "Project Manager",
    image: "/images/team.jpeg",
    featured: true,
  },
  {
    name: "Martyn Luther",
    role: "Interior Designer",
    image: "/images/team.jpeg",
    featured: false,
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase text-gray-400 mb-2">
          / Put Your Awesome Subtitle Here /
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`rounded-md overflow-hidden shadow-md border border-gray-200 transition transform hover:scale-105 
              hover:outline hover:outline-2 hover:outline-purple-200 hover:outline-offset-2 ${
                member.featured ? "" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>

                {member.featured && (
                  <div className="flex justify-center space-x-4 mt-4 text-primary">
                    <FaTwitter className="cursor-pointer hover:text-blue-500" />
                    <FaLinkedin className="cursor-pointer hover:text-blue-700" />
                    <FaFacebook className="cursor-pointer hover:text-blue-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
