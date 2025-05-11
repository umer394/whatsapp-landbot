import { Button } from "./ui/button";
import Image from "next/image";
export default function Hero(){
    return(
        <div className="flex flex-col md:flex-row w-full my-8 md:my-0 px-4 md:px-0">
            <section className="flex flex-col items-start justify-center gap-y-4 md:gap-y-6 w-full md:w-1/2">
                <h2 className="text-sm md:text-md font-bold uppercase text-[#4FCCC2]">WhatsApp Automation</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#33405E] font-semibold">Start talking <br className="hidden sm:block" /> to your customers <br className="hidden sm:block" /> on <span className="text-[#4FCCC2]"> WhatsApp </span> today</h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-xl text-[#33405E]">Create conversational marketing campaigns, engage existing customers and provide excellent customer service, all inside WhatsApp</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-4 mt-2 w-full sm:w-auto">
                    <Button variant="outline" className="bg-[#4FCCC2] text-white px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 text-base md:text-lg hover:text-white cursor-pointer hover:bg-[#82c4be] w-full sm:w-auto">Try Wabi Free</Button>
                    <Button variant="outline" className="bg-[#EBECFF] text-[#636BFC] hover:bg-[#eeeff0] px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 cursor-pointer text-base md:text-lg hover:text-[#636BFC] w-full sm:w-auto">Get a Demo</Button>
                </div>
            </section>
            <section style={{backgroundImage: `url("/heroImage.png")`}} className="w-full md:w-1/2 min-h-[300px] md:min-h-[450px] lg:min-h-[600px] bg-cover bg-no-repeat bg-center mt-8 md:mt-0">
                <Image src="/whatsapp.png" alt="heroImage" className="mt-4 md:mt-10 w-full" width={700} height={600} />
            </section>
        </div>
    )
}
