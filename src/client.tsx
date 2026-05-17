import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles.css";
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

// Simple landing page component for GitHub Pages
function App() {
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

// Render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
