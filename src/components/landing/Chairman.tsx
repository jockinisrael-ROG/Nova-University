import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";
import aboutCampus from "@/assets/about-campus.jpg";
import faculty1 from "@/assets/faculty-1.jpg";

export function Chairman() {
  return (
    <section id="chairman" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Leadership</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Message from the <span className="text-gradient">Chairman</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-2"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-primary p-1 shadow-elegant">
              <div className="relative h-full w-full overflow-hidden rounded-[1.85rem]">
                <img src={aboutCampus} alt="Chairman portrait" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <img src={faculty1} className="h-14 w-14 rounded-full border-2 border-white object-cover" alt="" />
                    <div>
                      <p className="font-display text-xl font-bold">Dr. Aarav Mehta</p>
                      <p className="text-sm opacity-80">Chairman, Nova University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft lg:col-span-3 md:p-12"
          >
            <Quote className="absolute right-6 top-6 h-20 w-20 text-primary/10" />
            <p className="font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              "At Nova, we don't just teach the future — we build it, together with our students."
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                For more than three decades, Nova University has stood for one quiet belief: that every
                student carries an extraordinary idea inside them — and our job is to give that idea the
                rigor, the courage, and the community to become real.
              </p>
              <p>
                Today, we stand at a generational inflection. AI is rewriting every industry, climate is
                rewriting every supply chain, and a new generation of leaders is rewriting what work itself
                should feel like. Our curriculum, faculty, and labs have been redesigned around exactly
                this moment.
              </p>
              <p>
                If you are ambitious, curious, and willing to be challenged, you will find a home here. We
                will meet you with world-class faculty, global partners, and a campus that hums with
                possibility from sunrise to long after sunset.
              </p>
              <p className="text-foreground">Welcome to Nova. Your future starts the day you arrive.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-primary" /> Padma Shri Awardee
              </div>
              <div className="text-sm text-muted-foreground">PhD, Stanford University</div>
              <div className="text-sm text-muted-foreground">35+ years in higher education</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
