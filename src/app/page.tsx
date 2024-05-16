import CardSection from "@/components/homeCards/homeCards";
import HeroSection from "@/components/herosection/herosection";
import Image from "next/image";
import CardsComponent from "@/components/cardSection/cardSection";
import CtaSection from "@/components/ctaSection/ctaSection";
import BannerSection from "@/components/bannerSection/bannerSection";
import QualitiaCustomers from "@/components/customers/customer";
import ImageText from "@/components/imageText/imageText";
import ImageTextSection from "@/components/ImageTextSection/imageText";
import Feature from "@/components/features/feature";
import SectorsSection from "@/components/sectorsSection/sectorsSection";
import LeadersSection from "@/components/leadersSection/leadersSection";

export default function Home() {
  return (
    <div>
      {/* <BannerSection /> */}
      <HeroSection />
      <CardSection />
      <ImageTextSection />
      {/* <ImageText /> */}
      {/* <CardsComponent /> */}
      <Feature />
      <QualitiaCustomers />
      <CtaSection />
      <SectorsSection/>
      <LeadersSection/>
    </div>
  );
}
