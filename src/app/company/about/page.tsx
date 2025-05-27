"use client";

import Footer from "@/components/common/FooterSection";
import NavBar from "@/components/common/NavBar";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <NavBar />

      <section className="text-gray-800 px-6 py-16 md:py-24">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg leading-relaxed">
              Packgine simplifies the complexities of sustainable packaging
              data, delivering practical and budget-friendly solutions for
              businesses.
            </p>
          </div>

          <div className="relative w-full h-[300px] group cursor-pointer order-2 md:order-1">
            <Image
              src="/images/Aboutus.jpg"
              alt="Mission"
              fill
              className="rounded-xl object-cover shadow-md transition-transform duration-500 group-hover:scale-105 active:scale-95"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20 items-center">
          {/* Text first in DOM, order 1 mobile, order 2 desktop */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-justify">
              Packgine’s comprehensive platform delivers a diverse array of
              sustainable packaging solutions, resources, and services;
              empowering informed customers and businesses to lead in global
              packaging sustainability. Guided by founders with decades of
              industry experience, deep technical expertise, and a proven
              track record in establishing and scaling start-up. Packgine is
              supported by a dedicated technical and support team instrumental
              in pioneering sustainable packaging innovations. Together, we are
              committed to setting new benchmarks in cost-effective &amp;
              eco-friendly packaging driving meaningful and positive impact for
              our planet.
            </p>
          </div>

          {/* Image second in DOM, order 2 mobile, order 1 desktop */}
          <div className="relative w-full h-[300px] group cursor-pointer order-2 md:order-1">
            <Image
              src="/images/mission.jpg"
              alt="Mission"
              fill
              className="rounded-xl object-cover shadow-md transition-transform duration-500 group-hover:scale-105 active:scale-95"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed text-justify">
              Packgine leads the way in sustainable packaging solutions,
              committed to minimizing our carbon footprint, advancing
              recycling, and championing zero-waste practices. To protect and
              preserve the planet for future generations by driving innovation
              and responsibility throughout the packaging industry.
            </p>
          </div>

          <div className="relative w-full h-[300px] group cursor-pointer">
            <Image
              src="/images/Aboutforest.jpg"
              alt="Vision"
              fill
              className="rounded-xl object-cover shadow-md transition-transform duration-500 group-hover:scale-105 active:scale-95"
            />
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default AboutUs;
