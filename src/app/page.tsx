import CardSection from "@/components/Cards/cards";
import ImageText from "@/components/ImageText]/imageText";
import Feature from "@/components/features/feature";
import HeroSection from "@/components/herosection/herosection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <Feature/>
      <ImageText/>
    </div>
  );
}
