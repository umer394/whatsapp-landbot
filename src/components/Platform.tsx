import { ModernBentoGrid } from "./ui/bento-grid";

export default function Platform(){
    
    return(
        <main className="flex flex-col py-8 md:py-16 px-4 md:px-0">
            <div className="flex flex-col gap-4 text-center gap-y-3 md:gap-y-5 mb-6 md:mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#33405E]">Powerful and intuitive <span className="text-[#636BFC]"> chatbot platform</span></h1>
                <p className="text-[#33405E] text-lg md:text-xl lg:text-3xl font-normal max-w-4xl mx-auto">
                    Building, deploying and running a WhatsApp strategy doesn&apos;t have to be complicated or expensive. Landbot&apos;s efficient and user-friendly no-code chatbot solution puts your team in control.
                </p>
            </div>
            <ModernBentoGrid />
        </main>
    )
}