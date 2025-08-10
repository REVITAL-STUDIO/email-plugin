import Image from "next/image";
import Link from "next/link";

export default function CTABanner () {
    return (
        <div className="w-full bg-white text-black flex justify-between py-6 px-12 items-center">
        <div className="flex flex-col gap-4 max-w-[70%]">
          <h3 className="text-xl tracking-widest font-[500]">Revolutionize Your Law Firm’s Inbox<br/>—Securely and Efficiently</h3>
          <p className="text-[0.70rem] tracking-[0.13rem]  font-[400]">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
            risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad 
            litora torquen
          </p>
        </div>
        <button className="px-8 py-3 bg-[#F0EAD6] rounded-full shadow-md text-black tracking-[0.15rem] text-[0.7rem] font-[100]">Let's Chat</button>
      </div>
    )
}