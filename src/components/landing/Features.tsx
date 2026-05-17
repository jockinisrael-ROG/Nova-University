import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FlaskConical, Award, Globe, Laptop } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from PhDs and industry veterans driving original research." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Dedicated career cell with 500+ recruiting partners." },
  { icon: FlaskConical, title: "Innovation Labs", desc: "AI, robotics, and design studios open 24/7." },
  { icon: Award, title: "Scholarships", desc: "Merit and need-based programs covering up to 100%." },
  { icon: Globe, title: "Global Opportunities", desc: "Semester abroad, exchanges, and joint degrees." },
  { icon: Laptop, title: "Smart Learning", desc: "Hybrid classrooms with personalized AI-powered learning." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Nova</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Built for the next <span className="text-gradient">generation of leaders</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="group glass rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
