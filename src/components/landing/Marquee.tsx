const partners = [
  "Google", "Microsoft", "Amazon", "Meta", "Adobe", "Stripe",
  "Netflix", "Spotify", "Tesla", "Apple", "OpenAI", "Figma",
];

export function Marquee() {
  return (
    <section className="relative border-y border-border bg-white/40 py-10 backdrop-blur">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
        Our graduates work at
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-tight text-foreground/40 transition hover:text-foreground md:text-3xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
