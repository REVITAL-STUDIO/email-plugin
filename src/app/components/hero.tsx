import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="tracking-widest min-h-screen  flex flex-col p-8">
      <div className="text-white mt-[6%] mb-[2%]  text-center">
        <h1 className="text-3xl xl:text-6xl uppercase relative flex justify-center items-center">
          Supercharge your inbox{" "}
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
