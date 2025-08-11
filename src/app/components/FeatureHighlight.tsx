import Image from "next/image";
import Link from "next/link";

type FeatureHighlightProps = {
  highlightURL: string;
  header: string;
  text: string;
};

export default function FeatureHighlight({
  highlightURL,
  header,
  text,
}: FeatureHighlightProps) {
  return (
    <>
      <div className="w-full mb-[4%] p-8 relative ">
        <div className="p-8 relative max-w-6xl mx-auto bg-black flex gap-x-16 rounded-xl shadow-2xl shadow-white/20">
          <div className="absolute z-10 w-full h-full rounded-xl top-0 left-0 bg-gradient-to-t from-[#1a1a1a]/80 to-[#1a1a1a]/10 blur-sm p-6"></div>

          <Image
            src={highlightURL}
            alt="features"
            width={600}
            height={600}
            className="rounded-2xl "
          />
          <div className="w-1/2">
            <h2>{header}</h2>
            <p className="text-sm mt-24">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
