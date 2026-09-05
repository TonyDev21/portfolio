"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-crimson/20 blur-[160px]" />
      <div className="mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 flex items-center gap-3 text-sm tracking-widest text-muted-foreground uppercase">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-crimson" />Disponible para nuevos proyectos
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Construyo experiencias<br /><span className="text-gradient-crimson">web que destacan.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 max-w-xl text-lg text-muted-foreground">
          Soy Anthony Salinas, desarrollador full-stack. Diseño y programo productos digitales rápidos, accesibles y con un diseño minimalista que convierte.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-105">Ver proyectos<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-input px-7 py-3 font-medium transition-colors hover:border-crimson hover:text-crimson-soft">Contáctame</a>
        </motion.div>
      </div>
    </section>
  );
}
