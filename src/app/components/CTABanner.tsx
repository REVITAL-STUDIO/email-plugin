import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  const steps = [
    "Automatically sorts emails by case/matter",
    "Advanced search archiving",
    "Safe window protection for spam",
    "Seamless Outlook integration",
    "Ensures confidentiality compliance",
  ];

  return (
    <div className="w-full  text-white flex flex-col p-8">
      <div className="flex flex-col gap-4 w-full my-4 text-center ">
        <Image
          src="/outlook.png"
          alt="Lawbox Email Plugin"
          width={200}
          height={200}
          className="mx-auto inset-0 [filter:drop-shadow(0_0_20px_#FF5E00)]"
        />
        <h3 className="text-4xl uppercase tracking-widest ]">
          Revolutionize Your Law Firm's Inbox
          <br />— Securely and Efficiently
        </h3>
        <p className="text-base mt-[2%] px-80">
          Transform the way your firm manages communication. Lawbox streamlines
          email organization, enhances security, and ensures you never miss
          critical case details. Say goodbye to inbox chaos and hello to
          smarter, faster, and more secure workflows.
        </p>
      </div>
      <div className="relative pb-8 pl-24 max-w-6xl mt-[6%]"></div>
    </div>
  );
}
