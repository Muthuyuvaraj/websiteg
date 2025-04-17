import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/FooterSection";
import CompanySectionP from "./CompanySectionP";

export default function OurStory() {
  return (
    <main className="min-h-screen  bg-cover "
    style={{ backgroundImage: "url('/images/bg.png')" }}>
      <NavBar />
      <CompanySectionP />
      <Footer />
    </main>
  );
}
