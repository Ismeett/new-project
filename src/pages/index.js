import Image from "next/image";
import Navbar from "../../sections/Navbar";
import Hero from "../../sections/Hero";
import Partners from "../../sections/Partners";
import Products from "../../sections/Products";
import HackSection from "../../sections/HackSection";
import Benefits from "../../sections/Benefits";
import Clients from "../../sections/Clients";
import Footer from "../../sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <HackSection />
      <Benefits />
      <Clients />
      <Footer />
    </main>
  );
}
