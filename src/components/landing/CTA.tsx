import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-center shadow-elegant md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.25),transparent_60%)]" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Calendar className="h-3.5 w-3.5" /> Admissions Open 2026
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Your future starts with a single application.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
              Join thousands of students already building what's next at Nova University.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition hover:scale-[1.03]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Talk to Admissions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
