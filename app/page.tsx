import HeroSection from "@/components/home/HeroSection";
import TechStack from "@/components/home/TechStack";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TechStack />
      <AboutSection />
    </main>
  );
}