import Image from "next/image";
import Link from "next/link";


export default function Hero () {
    return (
        <section className="tracking-widest uppercase pb-8 pl-8 flex flex-col mt-[10%]">
            <div className="text-white">
                <h1 className="text-3xl xl:text-6xl">Supercharge your inbox</h1>
                <p className="mt-8 xl:mt-12 text-sm ">Organize, secure, and streamline your legal inbox effortlessly.</p>
            </div>
            <div className="flex mt-8 text-white gap-x-8 text-xs">
                <button className="uppercase px-6 py-3 bg-black rounded-full shadow-lg">Join Waitlist</button>
                <button className="text-black uppercase px-6 py-3 bg-white rounded-full shadow-lg">Contact Us</button>
            </div>
        </section>
    )
}