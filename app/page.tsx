import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Differentials from "@/components/Differentials";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ExitPopup from "@/components/ExitPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Differentials />
      <Reviews />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </>
  );
}