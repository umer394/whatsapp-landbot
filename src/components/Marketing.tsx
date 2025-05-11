import Image from "next/image";
export default function Marketing(){
    return(
        <main className="px-4 md:px-0 py-8 md:py-16">
             <div className="flex flex-col-reverse md:flex-row w-full justify-between mb-16 md:mb-24">
                <section className="w-full md:w-1/2 mt-8 md:mt-0">
                    <Image src="/marketing.png" alt="marketing" width={1500} height={500} className="w-full" />
                </section>
                <section className="flex flex-col items-start justify-center gap-y-4 md:gap-y-6 w-full md:w-1/2 md:pl-8 lg:pl-16">
                    <h1 className="text-lg md:text-xl text-[#FF3F7B] font-semibold uppercase">Marketing</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#33405E] font-semibold">Reach more people and convert <br className="hidden sm:block" /> more customers</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-[#33405E]">Landbot brings your marketing campaigns into the most engaging channel there is, using rich content, automation and personalization.</p>
                </section>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between mb-16 md:mb-24">
                <section className="flex flex-col items-start justify-center gap-y-4 md:gap-y-6 w-full md:w-1/2 md:pr-8 lg:pr-16">
                    <h1 className="text-lg md:text-xl text-[#636BFC] font-semibold uppercase">SUPPORT & OPERATIONS</h1>
                    <h2 className="text-2xl md:text-3xl text-[#33405E] font-semibold">Save time and increase customer satisfaction</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-[#33405E]">Be where your customers are, <span className="font-semibold">24 hours a day, 7 days a week</span>. WhatsApp chatbots improve response time and customer satisfaction while saving operational costs.</p>
                </section>
                <section className="w-full md:w-1/2 mt-8 md:mt-0">
                    <Image src="/customer.png" alt="support" width={1500} height={500} className="w-full" />
                </section>
            </div>
        </main>
    )
}
