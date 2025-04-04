import HeroSection from "./components/HeroSection";
import Experience from "./experience/page";
import Mission from "./mission/page";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Experience />
        <Mission />
      </main>
    </div>
  );
}
