import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
    return (
        <>
            <div className="w-full flex justify-between bg-[#F9F9F9] px-8 py-12">
                <div className="flex flex-col gap-8 items-start">
                    <h1 className="text-3xl tracking-[0.2rem] font-[500]">WE UNDERSTAND THE <br/>STRUGGLE</h1>
                    <p className="text-[0.85rem] tracking-widest font-[500]">
                        Lawyers deal with constant email overload — disorganized threads, lost attachments, critical client messages buried under spam,
                        and hours wasted manually sorting or searching for the right info. Managing communication shouldn’t feel like a second job.
                        That’s why we built a solution tailored specifically to the unique demands of legal professionals.
                    </p>
                    <button className="flex gap-2 uppercase px-2 py-3 bg-[#FF5E00] rounded-full shadow-lg text-white text-[0.7rem] relative top-8">
                        See More
                        <Image
                            src="/cta-pic.png"
                            alt="features"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </button>
                </div>
                <Image
                    src="/solutions.png"
                    alt="features"
                    width={300}
                    height={300}
                    className="object-contain"
                />
            </div>
        </>
    )
}