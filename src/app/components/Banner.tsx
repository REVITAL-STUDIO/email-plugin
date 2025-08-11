import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full min-h-[75vh] text-white flex justify-between p-8 ">
      <div className="bg-black [filter:drop-shadow(0_0_20px_#FF5E00)] max-w-7xl mx-auto rounded-2xl flex shadow-2xl">
        <div className="flex flex-col justify-center gap-4 ml-36">
          <h3 className="text-4xl tracking-widest w-1/2">
            DRIVEN BY A NEED WE COULDN'T IGNORE
          </h3>
          <p className="text-base mt-[2%] w-2/3">
            We're a team of experienced software developers who noticed a major
            gap in how legal professionals manage email. While we don't come
            from law, we've built tools for complex, high-stakes industries —
            and we saw how much time, clarity, and security lawyers were losing
            to disorganized inboxes. Our mission: bring clarity, structure, and
            security to legal email without disrupting the way lawyers work.
          </p>
        </div>
        <Image
          src="/logo-white.png"
          alt="lawbox"
          width={200}
          height={200}
          className=" object-contain mr-36"
        />
      </div>
    </div>
  );
}
