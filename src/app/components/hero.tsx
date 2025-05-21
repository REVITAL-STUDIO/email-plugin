import Image from "next/image";
import Link from "next/link";


export default function Hero () {
    return (
        <section className="tracking-widest uppercase">
            <div className="mt-52  text-white">
                <h1 className="text-3xl xl:text-4xl">Supercharge your inbox</h1>
                <p className="mt-8 xl:mt-12 text-xs md:text-sm ">Organize, secure, and streamline your legal inbox effortlessly.</p>
            </div>
            <div className="flex mt-8 text-white gap-x-8 text-xs">
                <button className="uppercase px-8 py-4 bg-black rounded-full shadow-lg">Join Waitlist</button>
                <button className="text-black uppercase px-8 py-4 bg-white rounded-full shadow-lg">Contact Us</button>
            </div>
        </section>
    )
}