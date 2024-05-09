import CardSection from "@/components/Cards/cards";
import HeroSection from "@/components/herosection/herosection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardSection />
    </div>
  );
}
