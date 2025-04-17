'use client'; 

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLinkedin } from 'react-icons/fa';

const reviews = [
  {
    text: `“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis”`,
    author: 'Lorem Ipsum',
    position: 'Lead at ON',
    image: '', // Add image URL if needed
    logo: '/images/.png', // Replace with your actual logo if needed
  },
  {
    text: `“Second review content goes here. This is a sample text for the second testimonial in the slider.”`,
    author: 'Jane Doe',
    position: 'Manager at Example Inc.',
    image: '',
    logo: '/images/logo.png',
  },
  {
    text: `“Third review content goes here. You can have as many reviews as you want.”`,
    author: 'John Smith',
    position: 'Developer at DevCo',
    image: '',
    logo: '/images/logo.png',
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-[#f8f9fa] py-16 relative text-center px-4">
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#c1a7fc] p-3 rounded-md"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#c1a7fc] p-3 rounded-md"
      >
        <FaArrowRight />
      </button>

      {currentReview.logo && (
        <img src={currentReview.logo} alt="Logo" className="mx-auto mb-6 h-8" />
      )}

      <p className="text-lg max-w-3xl mx-auto text-gray-800 font-medium mb-6">
        {currentReview.text}
      </p>

      <div className="w-12 h-12 mx-auto rounded-full bg-gray-300 mb-4" />

      <p className="font-semibold text-black">{currentReview.author}</p>
      <p className="text-gray-600 text-sm">{currentReview.position}</p>

      <div className="mt-2">
        <FaLinkedin className="inline text-black text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default ReviewSection;
