import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { About } from "@/components/landing/About";
import { Programs } from "@/components/landing/Programs";
import { Features } from "@/components/landing/Features";
import { CampusLife } from "@/components/landing/CampusLife";
import { Stats } from "@/components/landing/Stats";
import { Chairman } from "@/components/landing/Chairman";
import { Faculty } from "@/components/landing/Faculty";
import { Events } from "@/components/landing/Events";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nova University — Shape your future" },
      {
        name: "description",
        content:
          "Nova University: world-class programs in engineering, design, AI and business. Admissions open 2026.",
      },
      { property: "og:title", content: "Nova University — Shape your future" },
      {
        property: "og:description",
        content:
          "World-class faculty, innovation labs, and global pathways. Apply for admissions 2026.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Features />
      <CampusLife />
      <Stats />
      <Chairman />
      <Faculty />
      <Events />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
