import Image from "next/image";
export default function Resources(){
    return(
        <main className="py-10 md:py-20 bg-[#F9F9FF] px-4 md:px-8 lg:px-0">
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-[#33405E]">Resources</h1>
            <h2 className="text-center text-lg md:text-xl lg:text-3xl mt-3 text-[#33405E] max-w-4xl mx-auto">Everything you need to start building your WhatsApp chatbot with Landbot today</h2>
            
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 my-10 md:my-20">
                <div className="space-y-3">
                    <label htmlFor="" className="text-xl md:text-2xl font-semibold text-[#33405E]">Templates</label>
                    <div style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2 rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-[250px] md:h-[300px]">
                        <Image src="/template.png" className="justify-center items-center flex px-4 w-full max-w-[300px]" alt="template" width={400} height={400} />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#33405E]">Deploy a WhatsApp chatbot immediately with a pre-built template</h3>
                </div>
                
                <div className="space-y-3">
                    <label htmlFor="" className="text-xl md:text-2xl font-semibold text-[#33405E]">Academy</label>
                    <div style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2 rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-[250px] md:h-[300px]">
                        <Image src="/academy.png" className="justify-center items-center flex px-4 w-full max-w-[300px]" alt="academy" width={400} height={400} />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#33405E]">Learn how to master the builder in the Landbot Academy</h3>
                </div>
                
                <div className="space-y-3">
                    <label htmlFor="" className="text-xl md:text-2xl font-semibold text-[#33405E]">Articles</label>
                    <div style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2 rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-[250px] md:h-[300px]">
                        <Image src="/articles.png" className="justify-center items-center flex px-4 w-full max-w-[300px]" alt="articles" width={400} height={400} />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#33405E]">Read more about WhatsApp Automation in our blog</h3>
                </div>
            </section>
        </main>
    )
}
