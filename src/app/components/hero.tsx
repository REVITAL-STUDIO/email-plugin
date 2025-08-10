import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="tracking-widest min-h-screen  flex flex-col">
      <div className="text-white mt-[10%] mb-[2%] pb-8 pl-8 ">
        <h1 className="text-3xl xl:text-6xl uppercase">
          Supercharge your inbox
        </h1>
        <p className="mt-8 xl:mt-12 text-base ">
          Organize, secure, and streamline your legal inbox effortlessly.
        </p>
      </div>
      <div className="w-3/4 h-[600px] relative overflow-hidden mb-[5%] mx-auto ">
        <Image
          src="/email.png"
          alt="Lawbox Email Plugin"
          fill
          className="absolute object-cover [filter:drop-shadow(0_0_20px_#FF5E00)] inset-0 "
        />
      </div>
    </section>
  );
}
