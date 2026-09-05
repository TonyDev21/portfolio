"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const skills = ["JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Figma"];

const projects = [
  {
    number: "01",
    title: "Pulse Dashboard",
    description: "Panel de analítica para convertir datos complejos en decisiones claras.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Casa Norte",
    description: "Identidad digital y experiencia de reserva para un espacio creativo.",
    tags: ["React", "Design"],
  },
  {
    number: "03",
    title: "Arc Studio",
    description: "E-commerce editorial con foco en producto, ritmo visual y conversión.",
    tags: ["Next.js", "UX/UI"],
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark">M</span>
          <span>Marina Soto</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-grid" id="inicio">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial="hidden" animate="visible" variants={reveal}>
              Diseñadora & desarrolladora digital
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={{ ...reveal, visible: { ...reveal.visible, transition: { duration: 0.7, delay: 0.1 } } }}>
              Ideas con <span>forma.</span><br />
              Productos con <span>intención.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial="hidden" animate="visible" variants={{ ...reveal, visible: { ...reveal.visible, transition: { duration: 0.7, delay: 0.2 } } }}>
              Creo experiencias digitales que se sienten tan bien como funcionan. Una mezcla de código, estrategia y sensibilidad visual.
            </motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={{ ...reveal, visible: { ...reveal.visible, transition: { duration: 0.7, delay: 0.3 } } }}>
              <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowUpRight size={17} /></a>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="brand-icon">in</span></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="brand-icon">gh</span></a>
              </div>
            </motion.div>
          </div>
          <motion.div className="portrait-frame" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="portrait-placeholder">
              <span className="portrait-label">Tu foto aquí</span>
              <span className="portrait-initial">MS</span>
              <span className="portrait-note">Reemplaza este bloque<br />con tu imagen favorita.</span>
            </div>
            <div className="portrait-caption"><span>01 / 05</span><span>Madrid, ES</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={17} /> Scroll to explore</a>
        </section>

        <section className="about section-grid" id="about">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-content">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>Diseño con curiosidad,<br /><em>construyo con propósito.</em></motion.h2>
            <div className="about-details">
              <p>Hola, soy Marina. Me gusta moverme entre la dirección de arte y el desarrollo front-end para convertir ideas ambiciosas en experiencias digitales memorables.</p>
              <p>Trabajo con equipos que valoran las buenas preguntas, los detalles y el impacto que una interfaz puede tener en la vida real.</p>
            </div>
          </div>
        </section>

        <section className="skills-band" id="skills">
          <div className="section-grid skills-inner">
            <div className="section-label light"><span>02</span><span>Skills</span></div>
            <div className="skills-content">
              <div className="skills-heading"><Code2 size={26} /><span>Lo que hago<br /><strong>mejor.</strong></span></div>
              <div className="skill-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="projects section-grid" id="proyectos">
          <div className="section-label"><span>03</span><span>Proyectos</span></div>
          <div className="projects-content">
            <div className="projects-intro"><p>Una selección de trabajos recientes</p><Sparkles size={22} /></div>
            <div className="project-list">{projects.map((project) => <a className="project-row" href="#contacto" key={project.number}><span className="project-number">{project.number}</span><span className="project-title">{project.title}</span><span className="project-description">{project.description}</span><span className="project-tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</span><ArrowUpRight className="project-arrow" size={22} /></a>)}</div>
          </div>
        </section>

        <section className="contact section-grid" id="contacto">
          <div className="section-label light"><span>04</span><span>Contacto</span></div>
          <div className="contact-content">
            <p className="eyebrow">¿Tienes una idea?</p>
            <h2>Hablemos<br /><em>de algo genial.</em></h2>
            <a className="contact-email" href="mailto:hola@marinasoto.dev">hola@marinasoto.dev <ArrowUpRight size={24} /></a>
            <div className="contact-footer"><span>Disponible para proyectos<br />seleccionados · 2024</span><span>© Marina Soto</span></div>
          </div>
        </section>
      </main>
    </div>
  );
}
