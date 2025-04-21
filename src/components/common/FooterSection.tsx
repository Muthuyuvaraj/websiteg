import React from 'react'

function FooterSection() {
  return (
    <div>
      <footer className="bg-black text-white px-8 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
    {/* Logo */}
    <div className="md:col-span-1">
      <h2 className="text-2xl font-bold">packgine</h2>
    </div>

    {/* Footer Links */}
    {[...Array(5)].map((_, index) => (
      <div key={index}>
        <h3 className="text-sm font-medium text-gray-400 mb-2">Lorem</h3>
        <ul className="space-y-1 text-sm text-gray-300">
          {[...Array(5)].map((__, i) => (
            <li key={i}>Lorem Ipsum</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Bottom row */}
  <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-4">
    <p>© 2025 packgine, Inc. All rights reserved.</p>
    <div className="flex space-x-4 mt-2 md:mt-0">
      <a href="#" aria-label="LinkedIn">
        <i className="fab fa-linkedin text-white" />
      </a>
      <a href="#" aria-label="YouTube">
        <i className="fab fa-youtube text-white" />
      </a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default FooterSection
