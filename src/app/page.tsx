'use client';

import { useEffect, useState } from 'react';
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/FooterSection";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup only once per session
    const isPopupShown = sessionStorage.getItem('popupShown');
    if (!isPopupShown) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 1500); // Delay the popup by 1.5 seconds
    }
  }, []);

  return (
    <main
      className="min-h-screen bg-cover"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <NavBar />

      {/* Video Section */}
      <section className="h-screen flex justify-center items-center mt-32 mb-40">
        <video
          className="w-full max-w-5xl rounded-lg shadow-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/videos/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Request a Demo</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows= {3}
                className="w-full border border-gray-300 p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
