import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Support() {
  return (
    <div className="my-20 flex flex-col gap-y-10">
      <h1 className="text-center max-w-3xl mx-auto text-4xl font-semibold text-[#33405E]">Marketing, Support and Operations teams <span className="text-[#FF3F7B] font-bold">love</span> building with <span className="text-[#FF3F7B] font-bold">Landbot</span></h1>
      <div className="flex  justify-between gap-x-10">
        <div className="rounded-xl shadow-sm  bg-white border">
            <Link href="/">
            <Image src="/card1.jpeg" alt="Support" className="rounded-xl" width={1000} height={1000} />
            <div className="px-10 flex flex-col my-4">
                <h3 className="text-[#33405E] font-semibold text-2xl">How Hotelbeds developed a <span className="text-[#FF3F7B] font-bold"> self-service WhatsApp</span> COVID response system using Landbot,<span className="text-[#FF3F7B] font-bold"> in 4 weeks</span></h3>
                <h4 className="text-[#33405E] font-semibold mt-3 text-lg">Xavier Godoy</h4>
                <h5 className="text-[#33405E]  text-lg">Customer Experience & Automation Director</h5>
            </div>
            </Link>
        </div>
        <div className="rounded-xl shadow-sm  bg-white border">
            <Link href="/">
            <Image src="/card2.png" className="rounded-xl" alt="Support" width={1000} height={1000} />
            <div className="px-10 flex flex-col my-4">
                <h3 className="text-[#33405E] font-semibold text-2xl">How Hotelbeds developed a <span className="text-[#FF3F7B] font-bold"> self-service WhatsApp</span> COVID response system using Landbot,<span className="text-[#FF3F7B] font-bold"> in 4 weeks</span></h3>
                <h4 className="text-[#33405E] font-semibold mt-3 text-lg">Xavier Godoy</h4>
                <h5 className="text-[#33405E]  text-lg">Customer Experience & Automation Director</h5>
            </div>
            </Link>
        </div>
      </div>
      <div className="flex justify-between gap-x-10">
        <div className="rounded-xl shadow-sm  bg-white border py-10 px-5 flex flex-col gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E]  text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E]  text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm  bg-white border py-10 px-5 flex flex-col gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E]  text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E]  text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm  bg-white border py-10 px-5 flex flex-col gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E]  text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E]  text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
        <div className="rounded-xl shadow-sm  bg-white border py-10 px-5 flex flex-col gap-y-6">
            <Image src="/stars.png" className="rounded-xl" alt="Support" width={200} height={200} />
            <h3 className="text-[#33405E]  text-xl">&quot;Very happy with the experience!&quot;</h3>
            <div className="flex gap-x-2">
                <Image src="/profile.avif" className="rounded-xl" alt="Support" width={50} height={30} />
                <div>
                    <h4 className="text-[#33405E] font-semibold text-lg">Izadora C</h4>
                    <h5 className="text-[#33405E]  text-lg">Problem Solver</h5>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-8">
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
        <Image src="/setup.svg" alt="Support" width={100} height={200} />
      </div>
      <div className="flex flex-col items-center gap-y-4 my-20">
        <h1 className="text-5xl font-semibold text-center max-w-2xl text-[#33405E]">Start building your automated WhatsApp experience now</h1>
        <div className="flex gap-x-4 mt-10">
        <Button variant="outline" className="bg-[#4FCCC2] text-white px-10 py-6 text-lg  hover:text-white cursor-pointer hover:bg-[#82c4be]">Try Wabi Free</Button>
        <Button variant="outline" className="bg-[#EBECFF] text-[#636BFC]  hover:bg-[#eeeff0] px-10 py-6 cursor-pointer text-lg  hover:text-[#636BFC]">Get a Demo </Button>
        </div>
      </div>
    </div>
  );
}
