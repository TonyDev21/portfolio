"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Briefcase,
  Code2,
  Database,
  GitBranch,
  Menu,
  Palette,
  Rocket,
  Send,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import project1 from "./assets/project-1.jpg";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contáctame", href: "#contacto" },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">AS<span className="text-crimson">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => <li key={item.href}><a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a></li>)}
        </ul>
        <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block">Hablemos</a>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <ul className="border-t border-line bg-background px-6 py-4 md:hidden">
        {nav.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground hover:text-foreground">{item.label}</a></li>)}
      </ul>}
    </header>
  );
}

function Hero() {
  return <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-crimson/20 blur-[160px]" />
    <div className="mx-auto w-full max-w-6xl px-6 pt-24">
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 flex items-center gap-3 text-sm tracking-widest text-muted-foreground uppercase"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-crimson" />Disponible para nuevos proyectos</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-8xl">Construyo experiencias<br /><span className="text-gradient-crimson">web que destacan.</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 max-w-xl text-lg text-muted-foreground">Soy Anthony Salinas, desarrollador full-stack. Diseño y programo productos digitales rápidos, accesibles y con un diseño minimalista que convierte.</motion.p>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
        <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-105">Ver proyectos<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
        <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-input px-7 py-3 font-medium transition-colors hover:border-crimson hover:text-crimson-soft">Contáctame</a>
      </motion.div>
    </div>
  </section>;
}

function About() {
  const stats = [{ value: "+5", label: "Años de experiencia" }, { value: "+40", label: "Proyectos entregados" }, { value: "+25", label: "Clientes satisfechos" }];
  return <section id="about" className="border-t border-line py-28"><div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2"><motion.div {...fadeUp}><p className="mb-3 text-sm tracking-widest text-crimson uppercase">Sobre mí</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Código limpio, diseño con propósito.</h2></motion.div><motion.div {...fadeUp} className="space-y-5 text-muted-foreground"><p>Llevo más de cinco años creando productos digitales para startups y empresas: desde landing pages de alto rendimiento hasta aplicaciones web complejas con miles de usuarios.</p><p>Mi trayectoria combina ingeniería y sensibilidad por el diseño. Me especializo en el ecosistema JavaScript/TypeScript, con foco en rendimiento, accesibilidad y SEO técnico.</p><div className="grid grid-cols-3 gap-6 pt-6">{stats.map((stat) => <div key={stat.label}><p className="font-display text-4xl font-bold text-crimson">{stat.value}</p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p></div>)}</div></motion.div></div></section>;
}

function Skills() {
  const groups = [{ icon: Code2, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] }, { icon: Database, title: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "APIs REST", "GraphQL"] }, { icon: Palette, title: "Diseño", items: ["Figma", "UI/UX", "Design Systems", "Prototipado", "Accesibilidad"] }, { icon: Rocket, title: "Herramientas", items: ["Git", "Vercel", "Docker", "CI/CD", "Testing"] }];
  return <section id="skills" className="border-t border-line py-28"><div className="mx-auto max-w-6xl px-6"><motion.div {...fadeUp} className="mb-16"><p className="mb-3 text-sm tracking-widest text-crimson uppercase">Skills</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Tecnologías y herramientas</h2></motion.div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{groups.map((group, index) => <motion.div key={group.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-crimson/50"><group.icon className="mb-5 text-crimson" size={28} /><h3 className="font-display mb-4 text-lg font-semibold">{group.title}</h3><ul className="space-y-2">{group.items.map((item) => <li key={item} className="text-sm text-muted-foreground">{item}</li>)}</ul></motion.div>)}</div></div></section>;
}

function Projects() {
  const projects: { image: StaticImageData; title: string; description: string; stack: string[] }[] = [
    { image: project1, title: "Fintech Dashboard", description: "Panel de analítica financiera en tiempo real con visualización de datos y reportes automatizados.", stack: ["React", "TypeScript", "Tailwind"] },
    { image: project2, title: "DARS — E-commerce móvil", description: "Tienda de moda mobile-first con checkout optimizado y aumento del 32% en conversión.", stack: ["Next.js", "Stripe", "Supabase"] },
    { image: project3, title: "Creative Studio", description: "Landing page para agencia creativa con animaciones avanzadas y puntuación 100 en Lighthouse.", stack: ["React", "Framer Motion", "Vercel"] },
  ];
  return <section id="proyectos" className="border-t border-line py-28"><div className="mx-auto max-w-6xl px-6"><motion.div {...fadeUp} className="mb-16"><p className="mb-3 text-sm tracking-widest text-crimson uppercase">Proyectos</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Trabajo seleccionado</h2></motion.div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <motion.article key={project.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.12 }} className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-crimson/50"><div className="overflow-hidden"><Image src={project.image} alt={`Captura del proyecto ${project.title}`} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><div className="mb-3 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}</div><h3 className="font-display mb-2 text-xl font-semibold">{project.title}</h3><p className="mb-5 text-sm text-muted-foreground">{project.description}</p><div className="flex gap-4"><a href="#contacto" className="inline-flex items-center gap-1 text-sm font-medium text-crimson-soft hover:underline">Ver demo <ArrowUpRight size={15} /></a><a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><GitBranch size={15} /> Código</a></div></div></motion.article>)}</div></div></section>;
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "TU_ACCESS_KEY_DE_WEB3FORMS");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await response.json();
      if (json.success) { setStatus("sent"); form.reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }
return <section id="contacto" className="border-t border-line py-28"><div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2"><motion.div {...fadeUp}><p className="mb-3 text-sm tracking-widest text-crimson uppercase">Contáctame</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">¿Tienes un proyecto en mente?</h2><p className="mt-6 max-w-md text-muted-foreground">Cuéntame tu idea y te respondo en menos de 24 horas. También puedes escribirme directamente o encontrarme en redes.</p><div className="mt-8 flex gap-4">{[{ icon: GitBranch, href: "https://github.com", label: "GitHub" }, { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" }, { icon: AtSign, href: "https://x.com", label: "Twitter / X" }].map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted-foreground transition-colors hover:border-crimson hover:text-crimson-soft"><social.icon size={18} /></a>)}</div></motion.div><motion.form {...fadeUp} onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-surface p-8"><input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio" /><input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} /><div><label htmlFor="nombre" className="mb-2 block text-sm font-medium">Nombre</label><input id="nombre" name="name" type="text" required maxLength={100} placeholder="Tu nombre" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div><div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label><input id="email" name="email" type="email" required maxLength={255} placeholder="tu@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div><div><label htmlFor="mensaje" className="mb-2 block text-sm font-medium">Mensaje</label><textarea id="mensaje" name="message" required maxLength={1000} rows={5} placeholder="Cuéntame sobre tu proyecto…" className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div><button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60">{status === "sending" ? "Enviando…" : "Enviar mensaje"}<Send size={16} /></button>{status === "sent" && <p className="text-sm text-crimson-soft">¡Mensaje enviado! Te responderé pronto.</p>}{status === "error" && <p className="text-sm text-muted-foreground">Hubo un error. Escríbeme a hola@alexrivera.dev</p>}</motion.form></div></section>;}

function Footer() {
  return <footer className="border-t border-line py-10"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground"><p>© 2026 Anthony Salinas. Todos los derechos reservados.</p><a href="#inicio" className="hover:text-crimson-soft">Volver arriba ↑</a></div></footer>;
}

export default function Portfolio() {
  return <main className="bg-background text-foreground"><Header /><Hero /><About /><Skills /><Projects /><Contact /><Footer /></main>;
}
