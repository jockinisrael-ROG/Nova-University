import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Users, BookOpen, Award, Sparkles } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";

const floatStats = [
  { icon: Users, label: "Students", value: "10,000+", className: "top-6 -left-6" },
  { icon: BookOpen, label: "Programs", value: "50+", className: "bottom-10 -left-10" },
  { icon: Award, label: "Placement", value: "95%", className: "bottom-0 -right-4" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-purple-accent/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.55_0.22_260/0.12),transparent_70%)]" />


      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Shape your <span className="text-gradient">future</span> at a university built for tomorrow.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            World-class faculty, immersive innovation labs, and global pathways — designed to launch your career in the AI era.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/apply"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-primary bg-[length:200%_200%] animate-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.03] animate-shine"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white"
            >
              <PlayCircle className="h-4 w-4 text-primary" /> Explore Programs
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-primary to-purple-accent"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Joined by <span className="font-semibold text-foreground">10K+ students</span> worldwide
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-primary p-1 shadow-elegant">
            <div className="relative h-full w-full overflow-hidden rounded-[1.85rem]">
              <img
                src={heroStudents}
                alt="Joyful Nova University graduates celebrating"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-accent/20 mix-blend-overlay" />
            </div>
          </div>

          {floatStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`absolute glass shadow-soft rounded-2xl px-4 py-3 ${s.className} animate-float`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="font-display text-base font-bold">{s.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GraduationIllustration() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.22 260)" />
          <stop offset="100%" stopColor="oklch(0.62 0.22 305)" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="url(#g1)" opacity="0.15" />
      <circle cx="160" cy="160" r="80" fill="url(#g1)" opacity="0.25" />
      <g transform="translate(80,90)">
        <path d="M80 0 L160 40 L80 80 L0 40 Z" fill="url(#g1)" />
        <rect x="60" y="60" width="40" height="50" fill="oklch(0.18 0.04 265)" opacity="0.85" />
        <path d="M150 50 L150 100 Q150 130 80 130 Q10 130 10 100 L10 50" stroke="url(#g1)" strokeWidth="6" fill="none" />
        <circle cx="160" cy="120" r="8" fill="url(#g1)" />
      </g>
    </svg>
  );
}
