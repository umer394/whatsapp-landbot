import Image from "next/image";
export default function Resources(){
    return(
        <main className="py-20 bg-[#F9F9FF]">
            <h1 className="text-center text-5xl  text-[#33405E]">Resources</h1>
            <h1 className="text-center text-3xl mt-3  text-[#33405E]">Everything you need to start building your WhatsApp chatbot with Landbot today</h1>
            <section className="flex gap-x-10 my-20">
            <div className="space-y-3">
                    <label htmlFor="" className="text-2xl font-semibold text-[#33405E]">Templates</label>
                    <div  style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2  rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-full">
                        <Image src="/template.png" className="justify-center items-center flex px-4" alt="template" width={400} height={400} />
                    </div>
                    <h1 className="text-lg font-semibold text-[#33405E]">Deploy a WhatsApp chatbot immediately with a pre-
                    built template</h1>
                </div>
                <div className="space-y-3">
                    <label htmlFor="" className="text-2xl font-semibold text-[#33405E]">Academy</label>
                    <div  style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2 rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-full">
                        <Image src="/academy.png" className="justify-center items-center flex px-4" alt="template" width={400} height={400} />
                    </div>
                    <h1 className="text-lg font-semibold text-[#33405E]">Learn how to master the builder in the Landbot
                    Academy</h1>
                </div>
                <div className="space-y-3">
                    <label htmlFor="" className="text-2xl font-semibold text-[#33405E]">Articles</label>
                    <div  style={{backgroundImage: `url("/background.png")`}} className="bg-cover mt-2 rounded-xl bg-center flex justify-center items-center bg-no-repeat w-full h-full">
                        <Image src="/articles.png" className="justify-center items-center flex px-4" alt="template" width={400} height={400} />
                    </div>
                    <h1 className="text-lg font-semibold text-[#33405E]">Read more about WhatsApp Automation in our blog</h1>
                </div>
                
            </section>
        </main>
    )
}
