import { GraduationCap, Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const cols = [
  {
    title: "Explore",
    items: ["About", "Programs", "Admissions", "Campus Life", "Research"],
  },
  {
    title: "Resources",
    items: ["Library", "Career Cell", "Scholarships", "Alumni", "Events"],
  },
];

const currentYear = 2026;

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-gradient-soft pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold">
                Nova<span className="text-gradient">University</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Shaping the next generation of innovators, leaders, and lifelong learners.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-white/60 text-foreground/70 backdrop-blur transition hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">Stay in the loop</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to admissions updates and campus news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-xl border border-border bg-white/70 backdrop-blur"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
              />
              <button className="bg-gradient-primary px-4 text-sm font-semibold text-primary-foreground">
                Subscribe
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@nova.edu</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 90000 00000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} Nova University. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
