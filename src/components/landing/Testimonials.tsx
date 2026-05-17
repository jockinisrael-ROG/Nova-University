import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Aarav Sharma",
    role: "B.Tech, Computer Science · '24",
    quote:
      "Nova's labs and faculty pushed me to build real products from year one. I landed two internships before graduation.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "MBA · '23",
    quote:
      "The mentorship and global immersion week completely reshaped how I think about leadership and product strategy.",
    rating: 5,
  },
  {
    name: "Rohan Verma",
    role: "B.Des Product Design · '24",
    quote:
      "A studio-driven design culture you simply don't find elsewhere. My capstone is now a funded startup.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = items[i];

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Stories from our <span className="text-gradient">students</span>
          </h2>
        </motion.div>

        <div className="relative mt-12">
          <div className="relative overflow-hidden rounded-3xl glass p-8 shadow-soft md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-2xl leading-snug md:text-3xl">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-primary" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/70 backdrop-blur transition hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to slide ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((x) => (x + 1) % items.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/70 backdrop-blur transition hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
