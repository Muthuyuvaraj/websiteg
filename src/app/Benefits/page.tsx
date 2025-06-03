import { section } from "framer-motion/client";
import FeatureCard from "./featurecard";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/FooterSection";

const features = [
  {
    title: "Accelerated Compliance",
    images: ["/images/Accelertaed-compliance-1.png", "/images/Accelerated-commpliance-2.jpg"],
    desc: [
      "50% faster compliance rate with PPWR, PCR, and EPR",
      "Ensures your operations meet regulatory standards in a timely manner",
    ],
  },
  {
    title: "Material Cost Savings",
    images: ["/images/Material-cost-savings-1.jpg"],
    desc: [
      "Substrate mixes optimization results in 15-30% in material cost savings",
      "Thus Increased profitability without compromising quality",
    ],
  },
  {
    title: "Waste Reduction",
    images: ["/images/Waste-reduction-1.jpg", "/images/Waste-reduction-1.jpg"],
    desc: [
      "A significant 40% reduction in waste",
      "Implement Right-sized Packaging & recyclable alternatives",
      "Reduces disposal costs",
    ],
  },
  {
    title: "E-Onboarding Consultation",
    images: ["/images/E-Onboarding-consultation.jpg", ],
    desc: [
      "New Users interact with dedicated onboarding specialists",
      "Aims to understand the specific needs and goals of the users",
      "Ensure a Personalized experience from the start",
    ],
  },
  {
    title: "Streamlined Onboarding & Education",
    images: ["/images/Streamlined-Onboarding-education-1.png", "/images/Streamlined-Onboarding-education-2.png"],
    desc: [
      "To facilitate easy navigation through platform features",
      "Provides educational resources, tutorials and guides",
      "Ensures quick user proficiency, and minimizing learning curve",
    ],
  },
  {
    title: "Feature Adoption",
    images: ["/images/Feature-Adoption.jpg", ],
    desc: [
      "Emphasis is placed on feature adoption by users.",
      "Encourages users to explore & utilize key functionalities for enhanced productivity & experiences ",
      "Includes targeted training sessions",
    ],
  },
];

export default function FeatureGrid() {
  return (
    <section>
      <NavBar/>
    <div className="flex flex-wrap justify-center gap-8 mt-20 mb-16">
      {features.map((feature, i) => (
        <div
          key={i}
          className={`w-full sm:w-[47%] lg:w-[30%] ${i === 6 ? "lg:w-1/2" : ""} flex justify-center`}
        >
          <FeatureCard feature={feature} />
        </div>
      ))}
    </div>
    <Footer/>
    </section>
  );
}
