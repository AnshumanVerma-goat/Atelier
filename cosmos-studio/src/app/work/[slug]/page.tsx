import { notFound } from "next/navigation";
import Link from "next/link";
import { FashionExperience } from "@/components/work/FashionExperience";
import { ArchitectureExperience } from "@/components/work/ArchitectureExperience";
import { TechExperience } from "@/components/work/TechExperience";
import { ArtisanExperience } from "@/components/work/ArtisanExperience";
import { GenZExperience } from "@/components/work/GenZExperience";
import { WellnessExperience } from "@/components/work/WellnessExperience";

// This acts as the router/controller for the totally distinct project universes.
export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Fashion Editorial Website (Maison Velours)
  if (slug === "maison-velours") {
    return <FashionExperience />;
  }

  // 2. Modern Architecture Studio (Kanso Minimal)
  if (slug === "kanso-minimal") {
    return <ArchitectureExperience />;
  }

  // 3. Dark Cinematic Tech Brand (Northline)
  if (slug === "northline") {
    return <TechExperience />;
  }

  // 4. Artisan Experience (Stillshore)
  if (slug === "stillshore") {
    return <ArtisanExperience />;
  }

  // 5. Gen Z Experience (Atelier Lumen)
  if (slug === "atelier-lumen") {
    return <GenZExperience />;
  }

  // 6. Wellness Experience (Aura Skincare)
  if (slug === "aura-skincare") {
    return <WellnessExperience />;
  }

  // Fallback for demo purposes
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--cream)] text-[var(--charcoal)]">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Project Universe in Development</h1>
        <p className="text-sm font-light text-[var(--muted)] mb-8">This distinct world ({slug}) is currently being crafted.</p>
        <Link href="/#work" className="text-sm border-b border-[var(--charcoal)] pb-1">Return to reality</Link>
      </div>
    </div>
  );
}