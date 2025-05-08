import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function Header(){
    return(
        <header className=" sticky  top-0 bg-white  w-full  h-full  z-50  py-4 border-[1px]"  >
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-bold text-[#33405E]">WABI</h1>
            <ul className="md:flex sm:gap-x-7 lg:gap-x-12 text-lg  font-md  items-center  hidden   text-[#33405E]">
                <Link href={""} className="hover:text-[#FF3F7B]">Products</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Solution</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Resources</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Case Studies</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Pricing</Link>
                
            </ul>
            <div className="flex items-center gap-x-2">
                <Link href={""} className="text-[16px] mr-2 font-md text-[#FF3F7B] ">Login</Link>
                <Button variant="outline" className="bg-[#FF3F7B] text-white px-10 py-5 text-md  hover:text-white cursor-pointer hover:bg-[#cb2e71]">Try Wabi Free</Button>
                <Button variant="outline" className="bg-[#F5F7FA] text-[#636BFC] border-[#636BFC] hover:bg-[#eeeff0] px-10 py-5 cursor-pointer text-md  hover:text-[#636BFC]">Get a Demo uses</Button>
            </div>
            <div className="block md:hidden">
            <Sheet>
      <SheetTrigger  asChild>
        <Button variant="outline"><GiHamburgerMenu/></Button>
        
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <ul className="flex flex-col justify-center items-center space-y-2 text-[#484848]">
                <Link href={""}>Home</Link>
                <Link href={""}>Deals</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Packages</Link>
                <Link href={""}>sign in</Link>
                <Link href={""} className="bg-black text-white px-5 py-2 rounded-md shadow-lg">Sign Up</Link>
           </ul>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
    </div>
        </header>
    )
}