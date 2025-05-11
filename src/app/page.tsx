import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Platform from "@/components/Platform";
import Resources from "@/components/Resources";
import Support from "@/components/Support";


export default function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Hero/>
      <Marketing/>
      <Platform/>
      <Support/>
      <Resources/>
      <Faqs/>
    </div>
  );
}
