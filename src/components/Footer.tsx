import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#171239] py-10 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-0">
        <section className="flex justify-between items-center gap-x-4 pb-6 md:pb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">WABI</h1>
          <div className="flex gap-x-2">
            <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-8 md:w-10 h-8 md:h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
              <Link href={""}>
                <Image
                  src={"/fb.png"}
                  alt="facebook"
                  width={16}
                  height={16}
                  className="w-4 md:w-5"
                />
              </Link>
            </div>
            <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-8 md:w-10 h-8 md:h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
              <Link href={""}>
                <Image
                  src={"/fb.png"}
                  alt="facebook"
                  width={16}
                  height={16}
                  className="w-4 md:w-5"
                />
              </Link>
            </div>
            <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-8 md:w-10 h-8 md:h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
              <Link href={""}>
                <Image
                  src={"/fb.png"}
                  alt="facebook"
                  width={16}
                  height={16}
                  className="w-4 md:w-5"
                />
              </Link>
            </div>
            <div className="bg-[#929292] bg-cover bg-center bg-no-repeat w-8 md:w-10 h-8 md:h-10 opacity-50 z-10 rounded-full items-center justify-center flex">
              <Link href={""}>
                <Image
                  src={"/fb.png"}
                  alt="facebook"
                  width={16}
                  height={16}
                  className="w-4 md:w-5"
                />
              </Link>
            </div>
          </div>
        </section>
        
        <hr className="w-full border-white opacity-80" />
        
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-10 md:py-20">
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Product</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Pricing</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Features</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Solutions</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Enterprise</Link>
            </div>
          </ul>
          
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Support</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Help Center</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">API Docs</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Contact Us</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Status</Link>
            </div>
          </ul>
          
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Resources</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Blog</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Templates</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Academy</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Guides</Link>
            </div>
          </ul>
          
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Company</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">About</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Careers</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Partners</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Press</Link>
            </div>
          </ul>
          
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Legal</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Privacy</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Terms</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Security</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Cookies</Link>
            </div>
          </ul>
          
          <ul className="flex flex-col gap-y-2">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-6">Contact</h2>
            <div className="flex flex-col gap-y-2">
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Sales</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Support</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Feedback</Link>
              <Link href={""} className="text-[#898B9D] text-sm md:text-base">Demo</Link>
            </div>
          </ul>
        </section>
      </div>
    </footer>
  );
}
