import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Lightbulb, Trophy } from "lucide-react";
import aboutCampus from "@/assets/about-campus.jpg";

const points = [
  { icon: Trophy, text: "Ranked among the top private universities in the region" },
  { icon: Lightbulb, text: "Industry-aligned curriculum co-designed with global firms" },
  { icon: Globe2, text: "Exchange programs across 30+ partner universities" },
  { icon: CheckCircle2, text: "Hands-on labs, mentorship, and real-world capstones" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-primary p-1 shadow-elegant">
            <div className="relative h-full w-full overflow-hidden rounded-[1.85rem]">
              <img
                src={aboutCampus}
                alt="Modern Nova University campus at golden hour"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 shadow-soft">
                <p className="font-display text-2xl font-bold">Est. 2005</p>
                <p className="text-sm text-muted-foreground">Two decades of academic excellence</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-3xl bg-gradient-primary opacity-30 blur-2xl md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Nova</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            A modern campus where <span className="text-gradient">ambition meets opportunity</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Nova University blends rigorous academics with creative discovery. Our learners graduate as innovators,
            entrepreneurs, and leaders — ready for a rapidly changing world.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <p.icon className="h-4 w-4" />
                </div>
                <p className="text-foreground/85">{p.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
