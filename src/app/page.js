import LeadingSection from "./(blog)/leading-section/page";
import BusinessStats from "./(content)/business-growth/page";
import CaseShop from "./(blog)/new-case/page";
import HeroSection from "./components/HeroSection";
import Experience from "./experience/page";
import FAQSection from "./faq/page";
import Mission from "./(services)/mission/page";
import Testimonial from "./(content)/testimonials/page";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Experience />
        <LeadingSection />
        <CaseShop />
        <Mission />
        <FAQSection />
        <Testimonial />
        <BusinessStats />
      </main>
    </div>
  );
}
