import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faq from "./components/Faq";
import Banner from "./components/Banner";
import { Pathway_Extreme } from "next/font/google";
import Features from "./components/Features";
import CTABanner from "./components/CTABanner";

const pathwayExtreme = Pathway_Extreme({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
});

export default function Home() {
  return (
    <section
      className={`bg-[#1a1a1a] min-h-screen ${pathwayExtreme.className}`}
    >
      <Nav />
      <Hero />
      <CTABanner />
      <Features />
      <Banner />
      <Faq />
    </section>
  );
}
