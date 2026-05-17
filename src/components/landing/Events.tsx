import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  { date: "Jun 12", month: "2026", title: "Open House & Campus Tour", place: "Main Quad", tag: "Admissions" },
  { date: "Jul 04", month: "2026", title: "AI Research Symposium", place: "Innovation Hall", tag: "Research" },
  { date: "Aug 22", month: "2026", title: "Founders' Demo Day", place: "Auditorium A", tag: "Startup" },
  { date: "Sep 10", month: "2026", title: "Global Cultural Fest", place: "Amphitheatre", tag: "Culture" },
];

export function Events() {
  return (
    <section id="events" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-soft opacity-60" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Upcoming Events</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            What's happening on <span className="text-gradient">campus</span>
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent md:block" />
          <div className="space-y-8">
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
              >
                <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-primary shadow-elegant md:block" style={{ left: i % 2 ? "-6px" : "auto", right: i % 2 ? "auto" : "-6px" }} />
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="flex items-start gap-5">
                    <div className="flex shrink-0 flex-col items-center rounded-xl bg-gradient-primary px-4 py-3 text-primary-foreground">
                      <span className="font-display text-xl font-bold leading-none">{e.date.split(" ")[1]}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider">{e.date.split(" ")[0]}</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        {e.tag}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold">{e.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {e.date}, {e.month}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.place}</span>
                      </div>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-primary transition group-hover:translate-x-1 sm:block" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
