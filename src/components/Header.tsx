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
        <header className="sticky top-0 bg-white w-full z-50 py-3 md:py-4 border-[1px]">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-6 lg:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#33405E]">WABI</h1>
            <ul className="hidden md:flex gap-x-4 lg:gap-x-7 xl:gap-x-12 text-base lg:text-lg font-md items-center text-[#33405E]">
                <Link href={""} className="hover:text-[#FF3F7B]">Products</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Solution</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Resources</Link>
                <Link href={""} className="hover:text-[#FF3F7B] hidden lg:block">Case Studies</Link>
                <Link href={""} className="hover:text-[#FF3F7B]">Pricing</Link>
            </ul>
            <div className="hidden md:flex items-center gap-x-2">
                <Link href={""} className="text-sm lg:text-[16px] mr-2 font-md text-[#FF3F7B]">Login</Link>
                <Button variant="outline" className="bg-[#FF3F7B] text-white px-4 lg:px-6 xl:px-10 py-2 md:py-3 lg:py-5 text-sm lg:text-md hover:text-white cursor-pointer hover:bg-[#cb2e71]">Try Wabi Free</Button>
                <Button variant="outline" className="bg-[#F5F7FA] text-[#636BFC] border-[#636BFC] hover:bg-[#eeeff0] px-4 lg:px-6 xl:px-10 py-2 md:py-3 lg:py-5 text-sm lg:text-md  cursor-pointer hover:text-[#636BFC]">Get a Demo uses</Button>
                {/* <Button variant="outline" className="bg-[#F5F7FA] text-[#636BFC] border-[#636BFC] hover:bg-[#eeeff0] px-4 lg:px-6 xl:px-10 py-2 md:py-3 lg:py-5 flex  items-center cursor-pointer text-sm lg:text-md hover:text-[#636BFC] hidden lg:block">Get a Demo</Button> */}
            </div>
            <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline"><GiHamburgerMenu/></Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-[#33405E] text-center py-4">WABI</SheetTitle>
                  <ul className="flex flex-col justify-center items-center space-y-6 text-[#33405E] text-lg pt-8">
                        <Link href={""} className="hover:text-[#FF3F7B]">Products</Link>
                        <Link href={""} className="hover:text-[#FF3F7B]">Solution</Link>
                        <Link href={""} className="hover:text-[#FF3F7B]">Resources</Link>
                        <Link href={""} className="hover:text-[#FF3F7B]">Case Studies</Link>
                        <Link href={""} className="hover:text-[#FF3F7B]">Pricing</Link>
                        <Link href={""} className="text-[16px] font-md text-[#FF3F7B]">Login</Link>
                        <div className="flex flex-col gap-4 w-full items-center pt-4">
                          <Button variant="outline" className="bg-[#FF3F7B] text-white px-8 py-4 text-md hover:text-white cursor-pointer hover:bg-[#cb2e71] w-full">Try Wabi Free</Button>
                          <Button variant="outline" className="bg-[#F5F7FA] text-[#636BFC] border-[#636BFC] hover:bg-[#eeeff0] px-8 py-4 cursor-pointer text-md hover:text-[#636BFC] w-full">Get a Demo</Button>
                        </div>
                  </ul>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild></SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </header>
    )
}