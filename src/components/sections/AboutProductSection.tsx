// components/AboutProduction.tsx
import { CheckCircle2 } from "lucide-react"; // Optional, use any icon lib

export default function AboutProduction() {
  const sections = [
    {
      title: "...an extension of your sustainability team.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 💪.`,
      bullets: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      reverse: false,
    },
    {
      title: "...automated & scalable.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.`,
      bullets: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      reverse: true,
    },
  ];

  return (
    <section className="max-w-6xl ml-56 px-4 py-20 space-y-20">
      <h2 className="text-3xl font-bold">Lorem ipsum doro sit amet.....</h2>

      {sections.map((sec, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            sec.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="w-80  h-96 bg-gray-200 rounded-lg" />

          {/* Text Block */}
          <div className="w-full md:w-1/2 ml-36">
            <h3 className="text-xl font-bold mb-3">{sec.title}</h3>

            <p className="text-gray-600 whitespace-pre-line mb-5">
              {sec.description}
            </p>

            <ul className="space-y-2">
              {sec.bullets.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-purple-300" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block mt-6 text-sm font-medium text-black hover:underline"
            >
              Learn about our professional services →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
