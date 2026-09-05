"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./portfolio-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
          AS<span className="text-crimson">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block">Hablemos</a>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-background px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground hover:text-foreground">{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
