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
    <div className="w-full  text-white flex flex-col ">
      <div className="flex flex-col gap-4 max-w-[80%] my-4 pb-8 pl-8 ">
        <h3 className="text-4xl tracking-widest font-[500]">
          Revolutionize Your Law Firm's Inbox
          <br />— Securely and Efficiently
        </h3>
        <p className="text-base mt-[2%]">
          Transform the way your firm manages communication. Lawbox streamlines
          email organization, enhances security, and ensures you never miss
          critical case details. Say goodbye to inbox chaos and hello to
          smarter, faster, and more secure workflows.
        </p>
      </div>
      <div className="relative pb-8 pl-24 max-w-6xl mt-[6%]">
        <div className="space-y-20">
          {steps.map((text, index) => {
            const isRight = index % 2 === 1;
            const num = index + 1;
            return (
              <div
                key={num}
                className={`relative min-h-[20vh]  w-full gap-x-8 ${
                  isRight
                    ? "md:pl-[45%] md:justify-end"
                    : "md:pr-[45%] md:justify-start"
                } `}
              >
                <div className="flex items-center gap-x-8">
                  <span className="md:text-xl text-sm border border-white rounded-full  min-w-8 min-h-8 flex items-center justify-center">
                    {num}.
                  </span>
                  <h2 className="w-full text-xl">{text}</h2>
                </div>
                <div
                  className={`pointer-events-none absolute top-0 hidden h-full md:block ${
                    isRight ? "right-0 w-[45%]" : "left-0 w-[45%]"
                  }`}
                >
                  {/* Top elbow */}
                  <div
                    className={`absolute top-[24px] h-[4px] rounded bg-[#FF5E00] ${
                      isRight ? "left-0" : "right-0"
                    } w-[calc(100%-28px)]`}
                  />
                  <div
                    className={`absolute top-[24px] w-[4px] rounded bg-[#FF5E00] ${
                      isRight ? "left-0" : "right-0"
                    } h-[calc(100%-24px)]`}
                  />
                  {/* Bottom cap */}
                  <div
                    className={`absolute bottom-0 h-[4px] w-[28px] rounded bg-[#FF5E00] ${
                      isRight ? "left-0" : "right-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
