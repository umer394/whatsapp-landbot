import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#171239] py-20">
        <div className="max-w-[1200px] mx-auto">
      <section className="flex justify-between items-center gap-x-5 pb-10">
        <h1 className="text-4xl font-bold text-white">WABI</h1>
        <div className="flex gap-x-2">
          <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-10 h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
            <Link href={""} className=" ">
              <Image
                src={"/fb.png"}
                alt="facebook"
                className=""
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-10 h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
            <Link href={""} className=" ">
              <Image
                src={"/fb.png"}
                alt="facebook"
                className=""
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-10 h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
            <Link href={""} className=" ">
              <Image
                src={"/fb.png"}
                alt="facebook"
                className=""
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-10 h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
            <Link href={""} className=" ">
              <Image
                src={"/fb.png"}
                alt="facebook"
                className=""
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        
      </section>
      <hr className="w-full border-white opacity-80 " />
      <section className="flex justify-between items-center  gap-x-5 py-20">
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        <ul className="flex flex-col gap-y-2">
            <h1 className="text-white text-2xl font-semibold mb-6" >Product</h1>
            <div className="flex flex-col gap-y-2">
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
                <Link href={""} className="text-[#898B9D]">
                    Pricing
                </Link>
            </div>
        </ul>
        
      </section>
      </div>
    </footer>
  );
}
