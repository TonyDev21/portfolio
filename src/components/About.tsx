"use client";

import { motion } from "framer-motion";
import { fadeUp, stats } from "./portfolio-data";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="mb-3 text-sm tracking-widest text-crimson uppercase">Sobre mí</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Código limpio, diseño con propósito.</h2>
        </motion.div>
        <motion.div {...fadeUp} className="space-y-5 text-muted-foreground">
          <p>Llevo más de cinco años creando productos digitales para startups y empresas: desde landing pages de alto rendimiento hasta aplicaciones web complejas con miles de usuarios.</p>
          <p>Mi trayectoria combina ingeniería y sensibilidad por el diseño. Me especializo en el ecosistema JavaScript/TypeScript, con foco en rendimiento, accesibilidad y SEO técnico.</p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat) => <div key={stat.label}><p className="font-display text-4xl font-bold text-crimson">{stat.value}</p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
