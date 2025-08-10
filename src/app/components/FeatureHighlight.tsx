import Image from "next/image";
import Link from "next/link";

type FeatureHighlightProps = {
  highlightURL: string;
  header: string;
  text: string;
};

export default function FeatureHighlight({highlightURL, header, text}: FeatureHighlightProps) {
  return (
    <>
      <div className="w-full flex justify-around items-center mb-[4rem]">
        <Image
          src={highlightURL}
          alt="features"
          width={300}
          height={300}
          className="object-contain"
        />

        <div className="flex flex-col gap-8 w-[45%]">
          <h3>{header}</h3>
          <p className="text-[0.8rem]">{text}</p>
        </div>
      </div>
    </>
  )
}