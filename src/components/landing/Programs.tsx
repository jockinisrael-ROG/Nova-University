import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Programs</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Explore <span className="text-gradient">future-ready</span> programs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose from a portfolio of undergraduate and graduate programs taught by world-class faculty.
            Click any program to dive into the full curriculum.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
              >
                <div className="absolute inset-x-0 -top-px h-1 bg-gradient-primary opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition duration-500 group-hover:opacity-30" />

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant transition group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1">{p.duration}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1">{p.courses.length} courses</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1">{p.degree}</span>
                </div>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore courses
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
          >
            See all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
