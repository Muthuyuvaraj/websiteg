"use client";

import Footer from "@/components/common/FooterSection";
import NavBar from "@/components/common/NavBar";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section>
        <NavBar/>
    <section className="bg-gradient-to-b from-purple-100 to-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We’ll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your rankings and improve your brand.
        </p>
      </div>

      {/* Main Contact Box */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Contact Info */}
        <div className="bg-purple-500 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-6">
              Reach out to us directly or drop a message, and we’ll respond
              quickly!
            </p>

            <div className="space-y-4">
              {/* <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+0987654321</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>1234567890</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>internal@gcurv.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>831 Lincoln Ave Suite D-10, West Chester, PA 19380</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="I want to hire you"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </section>
  );
};

export default ContactSection;
