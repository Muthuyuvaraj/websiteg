import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/FooterSection";
import PeopleSection from "@/components/sections/PeopleSection";
import ExplainSection from "@/components/sections/ExplainSection";




export default function OurStory() {
  return (
    <main className="min-h-screen  bg-cover "
    style={{ backgroundImage: "url('/images/bg.png')" }}>
      <NavBar />
      <section className="py-24 px-6 md:px-20 text-gray-800">
        <h1 className="text-4xl md:text-6xl font-medium text-center text-primary mb-8 mt-24">
        Simplifying sustainable packaging: Empowering brands and Inspiring consumers  
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed ml-96">
          <p>
          gCurv is a comprehensive platform that can handle complexities of sustainable packaging data while offering practical, cost effective solutions.
          </p>
        </div>
      </section>
      <ExplainSection />
      <PeopleSection />
      <Footer />
    </main>
  );
}
