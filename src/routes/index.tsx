import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jack — 3D Creator" },
      { name: "description", content: "Jack — a 3D creator driven by crafting striking and unforgettable projects." },
      { property: "og:title", content: "Jack — 3D Creator" },
      { property: "og:description", content: "Portfolio of Jack, 3D creator." },
    ],
  }),
});

function Index() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", overflowX: "clip", fontFamily: "'Kanit', sans-serif" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
