import Image from "next/image";
export default function Marketing(){
    return(
        <main>
             <div className="flex w-full justify-between my-15">
            <section>
                <Image src="/marketing.png" alt="marketing" width={1500} height={500} />
            </section>
            <section className="flex flex-col items-start justify-center gap-y-6 ">
                <h1 className="text-xl text-[#FF3F7B] font-semibold uppercase">Marketing</h1>
                <h2 className="text-4xl text-[#33405E] font-semibold">Reach more people and convert <br /> more customers</h2>
                <p className="text-2xl text-[#33405E]">Landbot brings your marketing campaigns into the most engaging channel there is, using rich content, automation and personalization.</p>
            </section>
        </div>
        </main>
       
    )
}
