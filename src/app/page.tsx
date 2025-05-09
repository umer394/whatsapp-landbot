import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Platform from "@/components/Platform";


export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Hero/>
      <Marketing/>
      <Platform/>
    </div>
  );
}
