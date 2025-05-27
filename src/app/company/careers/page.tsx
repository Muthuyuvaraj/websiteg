'use client'

import Footer from '@/components/common/FooterSection'
import NavBar from '@/components/common/NavBar'
import Link from 'next/link'

export default function CareerPage() {
  return (
    <section>
        <NavBar/>
    <section className="bg-gradient-to-br from-purple-50 to-white min-h-screen text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-4">
            Join Our Mission for a Sustainable Future
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Our goal is to encourage personal care and food packaging industries to reduce carbon footprint, advance recycling, and promote zero-waste practices through our integrated platform.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-100 border border-purple-300 rounded-2xl p-8 mb-12 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            Join our mission to revolutionize the packaging industry toward sustainability!
          </h2>
          <p className="text-gray-700 mb-6">
            We're hiring across various roles and looking for passionate individuals.
          </p>
          <Link href="/contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Click to Join Us
            </button>
          </Link>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-purple-500 mb-6">Opportunities Available:</h3>
          <ul className="grid gap-4 md:grid-cols-2 list-disc list-inside text-gray-700">
            <li>Senior Business Development Manager</li>
            <li>Sustainable Technical Manager</li>
            <li>Frontend Engineer</li>
            <li>Sales & Marketing Manager</li>
            <li>Customer Success Lead</li>
            <li>Full Stack Java Developer</li>
            <li>AI / ML Engineer</li>
          </ul>
        </div>

        {/* Resume Submission */}
        <div className="text-center">
          <p className="text-md text-gray-600 mb-4">
            Please send your resume internal@gcurv.com / CV or connect with us through the button below.
          </p>
          <Link href="/contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-medium transition">
              Submit Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
    <Footer/>
    </section>
  )
}
