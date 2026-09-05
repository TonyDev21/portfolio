"use client";

import { motion } from "framer-motion";
import { AtSign, Briefcase, GitBranch, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { fadeUp } from "./portfolio-data";

export default function Contact() {
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

  return (
    <section id="contacto" className="border-t border-line py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="mb-3 text-sm tracking-widest text-crimson uppercase">Contáctame</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">¿Tienes un proyecto en mente?</h2>
          <p className="mt-6 max-w-md text-muted-foreground">Cuéntame tu idea y te respondo en menos de 24 horas. También puedes escribirme directamente o encontrarme en redes.</p>
          <div className="mt-8 flex gap-4">
            {[{ icon: GitBranch, href: "https://github.com", label: "GitHub" }, { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" }, { icon: AtSign, href: "https://x.com", label: "Twitter / X" }].map((social) => {
              const Icon = social.icon;
              return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted-foreground transition-colors hover:border-crimson hover:text-crimson-soft"><Icon size={18} /></a>;
            })}
          </div>
        </motion.div>
        <motion.form {...fadeUp} onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-surface p-8">
          <input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio" />
          <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />
          <div><label htmlFor="nombre" className="mb-2 block text-sm font-medium">Nombre</label><input id="nombre" name="name" type="text" required maxLength={100} placeholder="Tu nombre" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label><input id="email" name="email" type="email" required maxLength={255} placeholder="tu@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div>
          <div><label htmlFor="mensaje" className="mb-2 block text-sm font-medium">Mensaje</label><textarea id="mensaje" name="message" required maxLength={1000} rows={5} placeholder="Cuéntame sobre tu proyecto…" className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson" /></div>
          <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60">{status === "sending" ? "Enviando…" : "Enviar mensaje"}<Send size={16} /></button>
          {status === "sent" && <p className="text-sm text-crimson-soft">¡Mensaje enviado! Te responderé pronto.</p>}
          {status === "error" && <p className="text-sm text-muted-foreground">Hubo un error. Revisa tu clave de Web3Forms.</p>}
        </motion.form>
      </div>
    </section>
  );
}
