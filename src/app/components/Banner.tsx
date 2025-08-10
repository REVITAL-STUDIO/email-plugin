import Image from "next/image";
import Link from "next/link";

export default function Banner () {
    return (
        <div className="w-full bg-[#F9F9F9] text-black flex justify-between py-12 px-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl tracking-widest font-[500]">DRIVEN BY A NEED WE COULDN'T IGNORE</h3>
          <p className="text-[0.70rem] max-w-[85%] tracking-[0.13rem]  font-[400]">
            We're a team of experienced software developers who noticed a major gap in how legal professionals manage email.
            While we don’t come from law, we've built tools for complex, high-stakes industries — and we saw how much time,
            clarity, and security lawyers were losing to disorganized inboxes. Our mission: bring clarity, structure, and
            security to legal email without disrupting the way lawyers work.
          </p>
        </div>
        <Image
          src="/logo-white.png"
          alt="lawbox"
          width={90}
          height={90}
          className=" object-contain"
        />
      </div>
    )
}