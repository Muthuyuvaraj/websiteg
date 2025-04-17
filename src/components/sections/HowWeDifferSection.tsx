import { CheckCircle2 } from "lucide-react";

// components/HowWeDiffer.tsx
<section className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Image */}
    
        <div className="w-full h-96 bg-gray-200 rounded-lg" />


        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ...an extension of your sustainability team.
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque 💪.
          </p>

          <ul className="space-y-3 text-gray-700">
            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map(
              (point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-purple-300 w-5 h-5" />
                  {point}
                </li>
              )
            )}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium text-black hover:underline"
          >
            Learn about our professional services →
          </a>
        </div>
      </div>
    </section>

export default function HowWeDiffer() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Image */}
    
        <div className="w-full h-96 bg-gray-200 rounded-lg" />


        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ...an extension of your sustainability team.
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque 💪.
          </p>

          <ul className="space-y-3 text-gray-700">
            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map(
              (point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-purple-300 w-5 h-5" />
                  {point}
                </li>
              )
            )}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium text-black hover:underline"
          >
            Learn about our professional services →
          </a>
        </div>
      </div>
    </section>
  );
}
