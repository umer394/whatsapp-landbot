import { Button } from "./ui/button";
import Image from "next/image";
export default function Hero(){
    return(
        <div className="flex w-full">
            <section className="flex flex-col items-start justify-center gap-y-6 ">
                <h2 className="text-md font-bold uppercase text-[#4FCCC2]">WhatsApp Automation</h2>
                <h1 className="text-5xl text-[#33405E] font-semibold">Start talking <br /> to your customers <br /> on <span className="text-[#4FCCC2]"> WhatsApp </span> today  </h1>
                <p className="text-2xl max-w-xl text-[#33405E]">Create conversational marketing campaigns, engageexisting customers and provide excellent customer service, all inside WhatsApp</p>
                <div className="flex gap-x-4 mt-2">
                <Button variant="outline" className="bg-[#4FCCC2] text-white px-10 py-6 text-lg  hover:text-white cursor-pointer hover:bg-[#82c4be]">Try Wabi Free</Button>
                <Button variant="outline" className="bg-[#EBECFF] text-[#636BFC]  hover:bg-[#eeeff0] px-10 py-6 cursor-pointer text-lg  hover:text-[#636BFC]">Get a Demo </Button>
                </div>
            </section>
            <section style={{backgroundImage: `url("/heroImage.png")`}} className="w-1/2 min-h-[600px] bg-cover bg-no-repeat bg-center">
                <Image src="/whatsapp.png" alt="heroImage" className="mt-10" width={700} height={600} />
            </section>
        </div>
    )
}
