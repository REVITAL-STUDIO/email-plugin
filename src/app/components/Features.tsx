import Image from "next/image";
import Link from "next/link";
import FeatureHighlight from "./FeatureHighlight";


const features = [
    {
        url: "/feature-highlight-1.png",
        header: "Automated Tagging/Case Folders",
        text: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        url: "/feature-highlight-2.png",
        header: "In-Depth Search & Archive Retrieval:",
        text: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        url: "/feature-highlight-3.png",
        header: "Notifications & Reminders",
        text: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        url: "/feature-highlight-4.png",
        header: "Secure Communications",
        text: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
];


export default function Features() {
    return (
        <div className="w-full text-white text-3xl flex flex-col">
            <div className="flex gap-6 text-right relative ml-auto mr-[3rem] mt-[4rem]">
                <Image
                    src="/featurelogo.png"
                    alt="features"
                    width={100}
                    height={100}
                    className="object-contain"
                />
                <h1 className="flex flex-col text-right">
                    <span className="tracking-[0.45rem]">SMART FEATURES BUILT</span> <span className="tracking-[0.35rem]">FOR THE WAY LAWYYERS</span> <span className="tracking-[0.35rem]">WORK</span>
                </h1>
            </div>

            <div className="flex flex-col mt-[5rem]">
                {features.map((feature, index) => (
                    <FeatureHighlight
                        key={feature.url}
                        highlightURL={feature.url}
                        header={feature.header}
                        text={feature.text}
                    />
                ))}
            </div>





        </div>
    )
}