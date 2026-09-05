"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { fadeUp, projects } from "./portfolio-data";

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16">
          <p className="mb-3 text-sm tracking-widest text-crimson uppercase">Proyectos</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Trabajo seleccionado</h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.12 }} className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-crimson/50">
              <div className="overflow-hidden">
                <Image src={project.image} alt={`Captura del proyecto ${project.title}`} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}</div>
                <h3 className="font-display mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex gap-4">
                  <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-medium text-crimson-soft hover:underline">Ver demo <ArrowUpRight size={15} /></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><GitBranch size={15} /> Código</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
