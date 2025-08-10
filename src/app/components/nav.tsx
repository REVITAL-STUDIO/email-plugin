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
            <div className="p-4 hidden lg:block">
                <ul className="flex gap-x-8 text-white uppercase text-xs tracking-widest">
                    <Link href="/">About</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">FAQ</Link>
                </ul>
            </div>
        </section>
    )
}