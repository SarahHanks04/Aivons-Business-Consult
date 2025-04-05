import BusinessStats from "./business-growth/page";
import CaseShop from "./case-shop/page";
import HeroSection from "./components/HeroSection";
import Experience from "./experience/page";
import Mission from "./mission/page";
import Testimonial from "./testimonials/page";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Experience />
        <CaseShop />
        <Mission />
        <Testimonial />
        <BusinessStats />
      </main>
    </div>
  );
}
