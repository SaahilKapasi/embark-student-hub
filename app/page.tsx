import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { UniversityGrid } from "@/components/UniversityGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <UniversityGrid />
      <CTASection />
    </div>
  );
}
