import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, GraduationCap, Lock, Mail, User, Phone, BookOpen } from "lucide-react";
import { programs } from "@/data/programs";

type Search = { program?: string; step?: number };

export const Route = createFileRoute("/apply")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    program: typeof s.program === "string" ? s.program : undefined,
    step: typeof s.step === "number" ? s.step : undefined,
  }),
  component: ApplyPage,
  head: () => ({
    meta: [
      { title: "Apply — Nova University" },
      { name: "description", content: "Begin your application to Nova University. Sign in or create an account to continue." },
    ],
  }),
});

const steps = ["Account", "Personal", "Program", "Review"];

function ApplyPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(search.step ?? 0);
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    address: "",
    program: search.program ?? programs[0].slug,
    statement: "",
  });
  const [done, setDone] = useState(false);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-4 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-elegant">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
            <Check className="h-7 w-7" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold">Application received!</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you, {form.firstName || "applicant"}. Our admissions team will reach out within 3 working days at <span className="font-semibold text-foreground">{form.email}</span>.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/" className="rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold hover:bg-secondary">Back home</Link>
            <Link to="/programs" className="rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant">Browse programs</Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-purple-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 px-4 py-10 lg:grid-cols-5 lg:gap-10">
        {/* Left panel */}
        <aside className="lg:col-span-2 lg:py-10">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Nova
          </Link>
          <div className="mt-8 flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold">Nova<span className="text-gradient">University</span></span>
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold leading-tight md:text-5xl">
            Begin your <span className="text-gradient">application</span> in minutes.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Create an account once and track every step of your admissions journey — applications, interviews, offers, and onboarding.
          </p>

          <ol className="mt-10 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${i <= step ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <span className={`text-sm ${i === step ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{s}</span>
              </li>
            ))}
          </ol>
        </aside>

        {/* Right form */}
        <motion.section
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-3"
        >
          <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10">
            <form onSubmit={submit} className="space-y-5">
              {step === 0 && (
                <>
                  <div className="flex gap-2 rounded-xl bg-secondary p-1">
                    {(["signup", "login"] as const).map((m) => (
                      <button type="button" key={m} onClick={() => setMode(m)} className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${mode === m ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"}`}>
                        {m === "signup" ? "Create account" : "Sign in"}
                      </button>
                    ))}
                  </div>
                  <Field icon={Mail} label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  <Field icon={Lock} label="Password" type="password" value={form.password} onChange={(v) => update("password", v)} required />
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button type="button" className="text-xs text-muted-foreground hover:text-primary">Forgot password?</button>
                    <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="relative my-2 text-center text-xs text-muted-foreground">
                    <span className="bg-card px-3 relative z-10">or continue with</span>
                    <div className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold hover:bg-secondary">Google</button>
                    <button type="button" className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold hover:bg-secondary">Apple</button>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field icon={User} label="First name" value={form.firstName} onChange={(v) => update("firstName", v)} required />
                    <Field icon={User} label="Last name" value={form.lastName} onChange={(v) => update("lastName", v)} required />
                  </div>
                  <Field icon={Phone} label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required />
                  <Field label="Date of birth" type="date" value={form.dob} onChange={(v) => update("dob", v)} required />
                  <Field label="Address" value={form.address} onChange={(v) => update("address", v)} required />
                  <StepNav onBack={back} onNext={next} />
                </>
              )}

              {step === 2 && (
                <>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select program</span>
                    <div className="relative mt-2">
                      <BookOpen className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <select
                        value={form.program}
                        onChange={(e) => update("program", e.target.value)}
                        className="w-full appearance-none rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
                      >
                        {programs.map((p) => (
                          <option key={p.slug} value={p.slug}>{p.title} — {p.degree}</option>
                        ))}
                      </select>
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Statement of purpose</span>
                    <textarea
                      value={form.statement}
                      onChange={(e) => update("statement", e.target.value)}
                      rows={6}
                      placeholder="Tell us why you want to join this program (250–500 words)..."
                      className="mt-2 w-full rounded-xl border border-border bg-card p-4 text-sm focus:border-primary focus:outline-none"
                    />
                  </label>
                  <StepNav onBack={back} onNext={next} />
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="font-display text-2xl font-bold">Review your application</h2>
                  <div className="grid grid-cols-1 gap-3 rounded-2xl bg-secondary p-5 text-sm md:grid-cols-2">
                    <Row label="Name" value={`${form.firstName} ${form.lastName}`} />
                    <Row label="Email" value={form.email} />
                    <Row label="Phone" value={form.phone} />
                    <Row label="DOB" value={form.dob} />
                    <Row label="Program" value={programs.find((p) => p.slug === form.program)?.title ?? form.program} />
                    <Row label="Address" value={form.address} />
                  </div>
                  <label className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input type="checkbox" required className="mt-1" />
                    I confirm the information above is accurate and agree to Nova University's terms.
                  </label>
                  <div className="flex justify-between gap-3">
                    <button type="button" onClick={back} className="rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold hover:bg-secondary">Back</button>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                      Submit application <Check className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Need help? <button onClick={() => navigate({ to: "/" })} className="text-primary hover:underline">Contact admissions</button>
          </p>
        </motion.section>
      </div>
    </main>
  );
}

function Field({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="relative mt-2">
        {Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border border-border bg-card py-3 ${Icon ? "pl-10" : "pl-4"} pr-4 text-sm focus:border-primary focus:outline-none`}
        />
      </div>
    </label>
  );
}

function StepNav({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="flex justify-between gap-3 pt-2">
      <button type="button" onClick={onBack} className="rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold hover:bg-secondary">Back</button>
      <button type="button" onClick={onNext} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
        Continue <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value || "—"}</p>
    </div>
  );
}
