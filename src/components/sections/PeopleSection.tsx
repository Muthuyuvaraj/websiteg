'use client';

import React from 'react';

const people = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/people/john.jpg',
  },
  {
    name: 'Harini Pavithra',
    role: 'Product Designer',
    image: '/images/people/harini.jpg',
  },
  {
    name: 'Alex Smith',
    role: 'Full Stack Developer',
    image: '/images/people/alex.jpg',
  },
  {
    name: 'Muthu Yuvaraj',
    role: 'Marketing & Strategy',
    image: '/images/people/muthu.jpg',
  },
];

export default function PeopleSection() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-600 mb-10">
          Passionate people building something awesome together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
