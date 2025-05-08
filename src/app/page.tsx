import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Hero/>
      <Marketing/>
    </div>
  );
}
