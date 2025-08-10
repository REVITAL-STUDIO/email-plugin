import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <section className=" flex justify-between pt-8 px-8">
      <Link href="/" className="z-40">
        <Image
          src="/lawbox.png"
          alt="lawbox"
          width={100}
          height={100}
          className=" w-full h-full object-contain"
        />
      </Link>
      <div className="flex text-white gap-x-8 text-xs">
        <button className="uppercase px-6 py-3 h-fit bg-black rounded-full shadow-lg [filter:drop-shadow(0_0_8px_#FF5E00)]">
          Join Waitlist
        </button>
        <button className="text-black uppercase px-6 py-3 h-fit bg-white rounded-full shadow-lg [filter:drop-shadow(0_0_8px_#FF5E00)]">
          Contact Us
        </button>
      </div>
    </section>
  );
}
