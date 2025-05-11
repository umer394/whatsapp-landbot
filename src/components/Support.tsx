import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Support() {
  return (
    <div className="my-10 md:my-20 flex flex-col gap-y-8 md:gap-y-10 px-4 md:px-0">
      <h1 className="text-center max-w-3xl mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold text-[#33405E]">Marketing, Support and Operations teams <span className="text-[#FF3F7B] font-bold">love</span> building with <span className="text-[#FF3F7B] font-bold">Landbot</span></h1>
      
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-x-10">
        <div className="rounded-xl shadow-sm bg-white border w-full md:w-1/2">
            <Link href="/">
            <Image src="/card1.jpeg" alt="Support" className="rounded-t-xl w-full" width={1000} height={1000} />
            <div className="px-4 md:px-10 flex flex-col my-4">
                <h3 className="text-[#33405E] font-semibold text-xl md:text-2xl">How Hotelbeds developed a <span className="text-[#FF3F7B] font-bold"> self-service WhatsApp</span> COVID response system using Landbot,<span className="text-[#FF3F7B] font-bold"> in 4 weeks</span></h3>
                <h4 className="text-[#33405E] font-semibold mt-3 text-base md:text-lg">Xavier Godoy</h4>
                <h5 className="text-[#33405E] text-base md:text-lg">Customer Experience & Automation Director</h5>
            </div>
            </Link>
        </div>
        <div className="rounded-xl shadow-sm bg-white border w-full md:w-1/2">
            <Link href="/">
            <Image src="/card2.png" className="rounded-t-xl w-full" alt="Support" width={1000} height={1000} />
            <div className="px-4 md:px-10 flex flex-col my-4">
                <h3 className="text-[#33405E] font-semibold text-xl md:text-2xl">How Hotelbeds developed a <span className="text-[#FF3F7B] font-bold"> self-service WhatsApp</span> COVID response system using Landbot,<span className="text-[#FF3F7B] font-bold"> in 4 weeks</span></h3>
                <h4 className="text-[#33405E] font-semibold mt-3 text-base md:text-lg">Xavier Godoy</h4>
                <h5 className="text-[#33405E] text-base md:text-lg">Customer Experience & Automation Director</h5>
            </div>
            </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10">
        <div className="rounded-xl shadow-sm bg-white border py-8 md:py-10 px-4 md:px-5 flex flex-col gap-y-4 md:gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E] text-lg md:text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-base md:text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E] text-base md:text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm bg-white border py-8 md:py-10 px-4 md:px-5 flex flex-col gap-y-4 md:gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E] text-lg md:text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-base md:text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E] text-base md:text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm bg-white border py-8 md:py-10 px-4 md:px-5 flex flex-col gap-y-4 md:gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E] text-lg md:text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-base md:text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E] text-base md:text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm bg-white border py-8 md:py-10 px-4 md:px-5 flex flex-col gap-y-4 md:gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E] text-lg md:text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-base md:text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E] text-base md:text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-center gap-4 md:gap-x-8 mt-4 md:mt-8">
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" className="w-full" width={100} height={200} />
      </div>
      
      <div className="flex flex-col items-center gap-y-4 my-10 md:my-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center max-w-sm sm:max-w-xl md:max-w-2xl text-[#33405E]">Start building your automated WhatsApp experience now</h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-4 mt-6 md:mt-10 w-full sm:w-auto">
          <Button variant="outline" className="bg-[#4FCCC2] text-white px-6 md:px-10 py-4 md:py-6 text-base md:text-lg hover:text-white cursor-pointer hover:bg-[#82c4be] w-full sm:w-auto">Try Wabi Free</Button>
          <Button variant="outline" className="bg-[#EBECFF] text-[#636BFC] hover:bg-[#eeeff0] px-6 md:px-10 py-4 md:py-6 cursor-pointer text-base md:text-lg hover:text-[#636BFC] w-full sm:w-auto">Get a Demo</Button>
        </div>
      </div>
    </div>
  );
}

