import Image from "next/image";
import Navbar from "../../sections/Navbar";
import Hero from "../../sections/Hero";
import Partners from "../../sections/Partners";
import Products from "../../sections/Products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Products />
    </main>
  );
}
