import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is the application process?", a: "Submit the online form, upload transcripts, and complete a short interview. Decisions arrive within 3 weeks." },
  { q: "Are scholarships available?", a: "Yes — we offer merit-based and need-based scholarships covering up to 100% of tuition." },
  { q: "Can I switch my major later?", a: "Absolutely. Students can change majors at the end of the first year with academic advisor approval." },
  { q: "Do you offer hostel accommodation?", a: "On-campus housing is guaranteed for all first-year students with single, double and shared room options." },
  { q: "What are the placement statistics?", a: "95% of our students receive at least one job offer before graduation, with median packages above industry benchmarks." },
  { q: "Is there an exchange program?", a: "Yes — we partner with 30+ universities globally for semester-long exchanges and joint degrees." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-primary/40 bg-card shadow-elegant" : "border-border bg-card/60"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
