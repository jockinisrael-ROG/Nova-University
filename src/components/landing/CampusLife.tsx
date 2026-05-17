import { motion } from "framer-motion";
import { Music, Dumbbell, Coffee, Trees, Mic, Camera } from "lucide-react";
import imgGreen from "@/assets/campus-green.jpg";
import imgSports from "@/assets/campus-sports.jpg";
import imgArts from "@/assets/campus-arts.jpg";
import imgCafe from "@/assets/campus-cafe.jpg";
import imgSpeaker from "@/assets/campus-speaker.jpg";
import imgInnovation from "@/assets/campus-innovation.jpg";

const tiles = [
  { icon: Trees, title: "Green Campus", desc: "120 acres of forest, lakes, and open-air study spaces.", className: "md:col-span-2 md:row-span-2", img: imgGreen },
  { icon: Dumbbell, title: "Sports Arena", desc: "Olympic-grade facilities and 30+ active clubs.", className: "", img: imgSports },
  { icon: Music, title: "Performing Arts", desc: "A 600-seat auditorium and weekly live shows.", className: "", img: imgArts },
  { icon: Coffee, title: "Cafés & Hangouts", desc: "12 cafés, food courts and study lounges.", className: "md:col-span-2", img: imgCafe },
  { icon: Mic, title: "Speaker Series", desc: "Weekly talks from CEOs, scientists and creators.", className: "", img: imgSpeaker },
  { icon: Camera, title: "Innovation Studio", desc: "Film, photo, podcast and AR/VR studios.", className: "", img: imgInnovation },
];

export function CampusLife() {
  return (
    <section id="campus" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Campus Life</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            More than a campus — it's a <span className="text-gradient">community</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              className={`group relative min-h-[220px] overflow-hidden rounded-3xl border border-border shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${t.className}`}
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/90 text-primary shadow-soft backdrop-blur">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="text-white">
                  <h3 className="font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
