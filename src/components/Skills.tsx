"use client";

import { motion } from "framer-motion";
import { fadeUp, skillGroups } from "./portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16">
          <p className="mb-3 text-sm tracking-widest text-crimson uppercase">Skills</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Tecnologías y herramientas</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <motion.div key={group.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-crimson/50">
              <Icon className="mb-5 text-crimson" size={28} />
              <h3 className="font-display mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="space-y-2">{group.items.map((item) => <li key={item} className="text-sm text-muted-foreground">{item}</li>)}</ul>
            </motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}
