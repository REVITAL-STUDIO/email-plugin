import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";

export default function Home() {
  return (
    <section className=" bg-[#2e2e2e] min-h-screen md:p-8 p-4">
        <Nav />
        <Hero />
    </section> 
  );
}
