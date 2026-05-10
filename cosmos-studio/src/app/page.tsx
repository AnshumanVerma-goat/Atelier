import { ExperienceShell } from "@/components/providers/ExperienceShell";
import { HeroSection } from "@/components/hero/HeroSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutProcessSection } from "@/components/sections/AboutProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ExperienceShell>
      <main className="relative bg-[var(--cream)] pb-[max(6rem,env(safe-area-inset-bottom))] text-[var(--charcoal)] lg:pb-0">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </ExperienceShell>
  );
}
