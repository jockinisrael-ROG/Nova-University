import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Programs", to: "/programs", hash: "" },
  { label: "Chairman", to: "/", hash: "#chairman" },
  { label: "Campus", to: "/", hash: "#campus" },
  { label: "Faculty", to: "/", hash: "#faculty" },
  { label: "Events", to: "/", hash: "#events" },
  { label: "FAQ", to: "/", hash: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled || location.pathname !== "/" ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Nova<span className="text-gradient">University</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash || undefined}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              to="/apply"
              className="inline-flex items-center rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.03]"
            >
              Apply Now
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 rounded-2xl p-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      onClick={() => setOpen(false)}
                      to={l.to}
                      hash={l.hash || undefined}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/apply"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
