import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Clock, GraduationCap, Users, DollarSign, Sparkles, Check } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Footer } from "@/components/landing/Footer";
import { getProgram, programs, type Course } from "@/data/programs";

type ProgramPageData = {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  duration: string;
  degree: string;
  seats: number;
  fee: string;
  highlights: string[];
  courses: Course[];
};

export const Route = createFileRoute("/programs_/$slug")({
  component: ProgramDetail,
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    const { icon: _icon, ...programData } = program;
    return { program: programData satisfies ProgramPageData };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.program.title} — Nova University` },
          { name: "description", content: loaderData.program.desc },
          { property: "og:title", content: `${loaderData.program.title} — Nova University` },
          { property: "og:description", content: loaderData.program.desc },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Program not found</h1>
        <Link to="/programs" className="mt-4 inline-block text-primary underline">Back to programs</Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="grid min-h-screen place-items-center bg-background">
      <div className="text-center"><p>{error.message}</p></div>
    </main>
  ),
});

const levelColor: Record<string, string> = {
  Foundation: "bg-emerald-500/15 text-emerald-700",
  Intermediate: "bg-blue-500/15 text-blue-700",
  Advanced: "bg-purple-500/15 text-purple-700",
  Capstone: "bg-orange-500/15 text-orange-700",
};

function ProgramDetail() {
  const { program } = Route.useLoaderData();
  const Icon = getProgram(program.slug)?.icon;

  if (!Icon) {
    throw notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <ScrollProgress />
      <Navbar />

      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-4">
          <Link to="/programs" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All programs
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="mt-5 font-display text-5xl font-bold md:text-6xl">{program.title}</h1>
              <p className="mt-3 text-xl text-primary">{program.tagline}</p>
              <p className="mt-5 max-w-2xl text-muted-foreground">{program.desc}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/apply" search={{ program: program.slug }} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.03]">
                  Apply for {program.title} <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#courses" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white">
                  View {program.courses.length} courses
                </a>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-lg font-bold">Program at a glance</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><GraduationCap className="h-4 w-4" />Degree</span><span className="font-semibold">{program.degree}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" />Duration</span><span className="font-semibold">{program.duration}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><Users className="h-4 w-4" />Seats</span><span className="font-semibold">{program.seats}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" />Tuition</span><span className="font-semibold">{program.fee}</span></li>
                <li className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><BookOpen className="h-4 w-4" />Courses</span><span className="font-semibold">{program.courses.length}</span></li>
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {program.highlights.map((h: string) => (
                    <li key={h} className="flex items-start gap-2"><Sparkles className="mt-0.5 h-3.5 w-3.5 text-primary" />{h}</li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <section id="courses" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Curriculum</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">All <span className="text-gradient">{program.courses.length} courses</span> in this program</h2>
            <p className="mt-3 text-muted-foreground">A complete journey from foundations to capstone, designed with industry mentors.</p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {program.courses.map((c: Course, i: number) => (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute inset-x-0 -top-px h-1 bg-gradient-primary opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] font-semibold tracking-wider text-foreground/70">{c.code}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${levelColor[c.level]}`}>{c.level}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1">{c.credits} credits</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1">{c.duration}</span>
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Outcomes</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {c.outcomes.map((o: string) => (
                      <li key={o} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 text-primary" />{o}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-primary p-10 text-center text-primary-foreground shadow-elegant">
            <h3 className="font-display text-3xl font-bold md:text-4xl">Ready to apply for {program.title}?</h3>
            <p className="mx-auto mt-3 max-w-xl opacity-90">Applications for the 2026 intake are open. Submit yours in under 10 minutes.</p>
            <Link to="/apply" search={{ program: program.slug }} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition hover:scale-[1.03]">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {programs.filter(p => p.slug !== program.slug).slice(0, 4).map((p) => (
              <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
