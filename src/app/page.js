import Image from "next/image";
import Link from "next/link";
import LeadingSection from "./(blog)/leading-section/page";
import BusinessStats from "./(content)/business-growth/page";
import CaseShop from "./(blog)/new-case/page";
import HeroSection from "./components/HeroSection";
import Experience from "./experience/page";
import FAQSection from "./faq/page";
import Mission from "./mission/page";
import Testimonial from "./(content)/testimonials/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Experience />
      <LeadingSection />
      <CaseShop />
      <Mission />
      <FAQSection />
      <Testimonial />
      <BusinessStats />
    </div>
  );
}
