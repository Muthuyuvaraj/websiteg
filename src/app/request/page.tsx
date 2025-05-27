'use client'

import Footer from '@/components/common/FooterSection'
import NavBar from '@/components/common/NavBar'

export default function RequestDemoSection() {
  return (
    <section className="bg-gray-50 text-gray-800">
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-purple-500 mb-4">Request a Demo</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Ready to see our AI-powered solutions in action? Share a few details and we’ll be in touch to schedule your personalized demo.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none bg-transparent py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none bg-transparent py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none bg-transparent py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-purple-500 outline-none bg-transparent py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-400 focus:border-purple-500 outline-none bg-transparent p-2 resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
            >
              Request Demo
            </button>
          </div>
        </form>

        <div className="mt-16 text-center">
          <p className="uppercase text-sm text-gray-600 font-semibold mb-3">
            Interested in working with us?
          </p>
          <a
            href="company/contact"
            className="inline-block border border-purple-500 text-purple-500 px-6 py-2 rounded hover:bg-purple-500 hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <Footer />
    </section>
  )
}
