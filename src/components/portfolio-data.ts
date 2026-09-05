import type { LucideIcon } from "lucide-react";
import { Code2, Database, Palette, Rocket } from "lucide-react";
import type { StaticImageData } from "next/image";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contáctame", href: "#contacto" },
];

export const stats = [
  { value: "+5", label: "Años de experiencia" },
  { value: "+40", label: "Proyectos entregados" },
  { value: "+25", label: "Clientes satisfechos" },
];

export const skillGroups: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { icon: Database, title: "Backend", items: ["Node.js", "PostgreSQL", "Supabase", "APIs REST", "GraphQL"] },
  { icon: Palette, title: "Diseño", items: ["Figma", "UI/UX", "Design Systems", "Prototipado", "Accesibilidad"] },
  { icon: Rocket, title: "Herramientas", items: ["Git", "Vercel", "Docker", "CI/CD", "Testing"] },
];

export const projects: { image: StaticImageData; title: string; description: string; stack: string[] }[] = [
  { image: project1, title: "Fintech Dashboard", description: "Panel de analítica financiera en tiempo real con visualización de datos y reportes automatizados.", stack: ["React", "TypeScript", "Tailwind"] },
  { image: project2, title: "DARS — E-commerce móvil", description: "Tienda de moda mobile-first con checkout optimizado y aumento del 32% en conversión.", stack: ["Next.js", "Stripe", "Supabase"] },
  { image: project3, title: "Creative Studio", description: "Landing page para agencia creativa con animaciones avanzadas y puntuación 100 en Lighthouse.", stack: ["React", "Framer Motion", "Vercel"] },
];

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};
