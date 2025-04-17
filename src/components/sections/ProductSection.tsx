'use client';

import React from 'react';

function ProductSection() {
  const data = [
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
  ];

  return (
    <div>
      {/* Existing content */}
      <div>
        <p className="text-secondary ml-64 pt-36">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SUSPENDISSE
        </p>
        <p className="text-h2 font-medium text-primary ml-64 pt-4">
          Navigating the digital landscape for success <br />
          landscape for success
        </p>
        <p className="text-secondary ml-64 pt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        </p>
        <div className="ml-64 pt-6">
          <img src="/images/Heroimg.png" alt="logo" />
        </div>
      </div>

      {/* New hover-effect card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-1 pl-6 py-10 ml-44">

        {data.map((item, index) => (
          <div key={index} className="group w-full max-w-xs cursor-pointer mx-auto">
            {/* Top Hover Bar */}
            <div className="h-[4px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg text-left font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-left text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 text-left font-semibold text-black flex items-center  gap-2">
                Learn more <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
