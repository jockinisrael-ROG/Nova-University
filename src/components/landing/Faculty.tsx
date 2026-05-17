import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";
import f4 from "@/assets/faculty-4.jpg";

const people = [
  { name: "Dr. Anika Rao", role: "Dean, AI & Data Science", tag: "Ex-Google Brain", img: f1 },
  { name: "Prof. Vikram Joshi", role: "Head, Engineering", tag: "MIT Alum", img: f2 },
  { name: "Dr. Sara Khan", role: "Director, Design Studio", tag: "Ex-IDEO", img: f3 },
  { name: "Prof. Daniel Kim", role: "Chair, Business School", tag: "Wharton PhD", img: f4 },
];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Faculty</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Learn from <span className="text-gradient">world-class</span> minds
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Our faculty bring decades of research and industry experience into every classroom.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-primary p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[1rem]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-primary backdrop-blur">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-base font-bold leading-tight">{p.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.role}</p>
                </div>
                <a href="#" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border text-foreground/60 transition hover:bg-gradient-primary hover:text-primary-foreground">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
