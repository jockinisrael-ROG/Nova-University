import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Footer } from "@/components/landing/Footer";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs — Nova University" },
      { name: "description", content: "Explore Nova University's undergraduate and graduate programs across engineering, design, AI, business and more." },
      { property: "og:title", content: "Programs — Nova University" },
      { property: "og:description", content: "World-class programs taught by world-class faculty." },
    ],
  }),
});

function ProgramsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <ScrollProgress />
      <Navbar />
      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">All Programs</span>
            <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
              Find a program that <span className="text-gradient">moves you forward</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Click any program to explore its full curriculum, courses, fees, and outcomes.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <Link
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elegant"
                >
                  <div className="absolute inset-x-0 -top-px h-1 bg-gradient-primary opacity-0 transition group-hover:opacity-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1"><Clock className="h-3 w-3" />{p.duration}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1"><BookOpen className="h-3 w-3" />{p.courses.length} courses</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1"><Users className="h-3 w-3" />{p.seats} seats</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View courses
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
