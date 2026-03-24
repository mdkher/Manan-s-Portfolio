"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LineReveal from "@/components/LineReveal";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  color: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    id: "globant-design-system",
    title: "Globant Design System",
    category: "Design System · Brand Strategy",
    year: "2023–2025",
    role: "Brand Strategist (UX)",
    description:
      "Built a robust, scalable design system powering consistent UI across Globant's global product portfolio. Championed WCAG 2.1 AA compliance and led design-to-development workshops that cut handoff errors by 30%.",
    metrics: [
      { value: "25%", label: "Faster Delivery" },
      { value: "30%", label: "Fewer Handoff Errors" },
      { value: "800+", label: "Icons Standardised" },
    ],
    tags: ["Figma", "Design Tokens", "WCAG 2.1", "Component Library"],
    color: "#BFD730",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2000&auto=format&fit=crop",
    href: "/work/globant-design-system",
  },
  {
    id: "ar-filter-studio",
    title: "AR Filter Studio",
    category: "Augmented Reality · Product Innovation",
    year: "2021–2023",
    role: "Jr. Advanced UX Designer",
    description:
      "Conceptualised and shipped viral AR filters using SparkAR — achieving 7,000+ views. Founded Globant's AR Pod within the Design Studio, mentoring colleagues and presenting the work at DesignNXT 2022.",
    metrics: [
      { value: "7k+", label: "Filter Views" },
      { value: "1st", label: "AR Pod Founded" },
      { value: "2022", label: "DesignNXT Talk" },
    ],
    tags: ["SparkAR", "AR Design", "Prototyping", "Innovation"],
    color: "#0055ff",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    href: "/work/ar-filter-studio",
  },
  {
    id: "infosys-hiring-platform",
    title: "Infosys Hiring Platform",
    category: "Product Design · Enterprise UX",
    year: "2021",
    role: "Power Programmer → UX Lead",
    description:
      "Self-taught design to independently redesign Infosys's internal hiring platform from scratch. The new system streamlined recruitment for 15,000+ employees and cut the hiring cycle by 30%.",
    metrics: [
      { value: "15k+", label: "Employees Served" },
      { value: "30%", label: "Faster Hiring Cycle" },
      { value: "2021", label: "Insta Award Winner" },
    ],
    tags: ["Enterprise UX", "Information Architecture", "SaaS", "Figma"],
    color: "#ff5c00",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    href: "/work/infosys-hiring-platform",
  },
  {
    id: "vaccin1st",
    title: "Vaccin1st Platform",
    category: "Product Management · Public Health Tech",
    year: "2020–2021",
    role: "System Specialist",
    description:
      "Led the end-to-end development of the Vaccin1st platform at the height of the pandemic, enabling vaccination rollout for 150,000+ Infosys employees and their families across India, the USA, and Germany.",
    metrics: [
      { value: "150k+", label: "People Vaccinated" },
      { value: "3", label: "Countries" },
      { value: "20%", label: "Faster Deployment" },
    ],
    tags: ["Product Management", "AngularJS", "JMeter", "Automation"],
    color: "#00c896",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop",
    href: "/work/vaccin1st",
  },
  {
    id: "iit-gait-recognition",
    title: "Gait Recognition System",
    category: "Research · AI/ML · Robotics",
    year: "2019",
    role: "Research Intern, IIT-Gandhinagar",
    description:
      "Co-authored an IEEE paper on intention detection and gait recognition presented at IEEE RO-MAN 2019. Was awarded finalist for the Kawamura Award for the Best Indian Robotics Student.",
    metrics: [
      { value: "IEEE", label: "RO-MAN 2019" },
      { value: "Kawamura", label: "Award Finalist" },
      { value: "IIT-GN", label: "Research Intern" },
    ],
    tags: ["AI/ML", "Computer Vision", "Research", "IEEE"],
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    href: "/work/iit-gait-recognition",
  },
];

export default function CaseStudyGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Animate each card row with cinematic blur
      const cards = sectionRef.current?.querySelectorAll(".case-row");
      cards?.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, filter: "blur(16px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );

        // Image reveal scale & parallax
        const img = card.querySelector(".case-img-inner");
        if (img) {
          // Premium scale down on reveal
          gsap.fromTo(img,
            { scale: 1.15 },
            {
              scale: 1, duration: 2, ease: "expo.out",
              scrollTrigger: { trigger: card, start: "top 85%", once: true }
            }
          );

          // Subtle parallax on scroll
          gsap.to(img, {
            y: -40,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.5 },
          });
        }

        // Metric counters stagger
        const metricEls = card.querySelectorAll(".metric-item");
        gsap.fromTo(metricEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 70%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse hover effects removed


  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="work-heading"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Corner SVG — top right */}
      <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <path d="M220 80 L220 0 L140 0" stroke="#3B5BFF" strokeWidth="1.2" opacity="0.22"/>
          <path d="M220 130 L220 0 L90 0" stroke="#3B5BFF" strokeWidth="0.5" opacity="0.09"/>
          <circle cx="220" cy="0" r="80" stroke="#3B5BFF" strokeWidth="0.6" strokeDasharray="3 10" opacity="0.09"/>
          <circle cx="220" cy="0" r="6" fill="#3B5BFF" opacity="0.35"/>
        </svg>
      </div>

      {/* Corner SVG — bottom left */}
      <div className="absolute bottom-0 left-0 pointer-events-none" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path d="M0 80 L0 160 L80 160" stroke="#FF3D7F" strokeWidth="1" opacity="0.18"/>
          <circle cx="0" cy="160" r="60" stroke="#FF3D7F" strokeWidth="0.5" strokeDasharray="3 9" opacity="0.1"/>
        </svg>
      </div>

      {/* Floating ring cluster — right center */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block" aria-hidden="true">
        <svg width="48" height="120" viewBox="0 0 48 120" fill="none">
          <circle cx="24" cy="24" r="22" stroke="rgba(59,91,255,0.1)" strokeWidth="1"/>
          <circle cx="24" cy="24" r="8"  stroke="rgba(59,91,255,0.2)" strokeWidth="1"/>
          <circle cx="24" cy="24" r="3"  fill="rgba(59,91,255,0.5)"/>
          <line x1="24" y1="47" x2="24" y2="75" stroke="rgba(59,91,255,0.15)" strokeWidth="1"/>
          <circle cx="24" cy="88" r="12" stroke="rgba(255,107,53,0.15)" strokeWidth="1"/>
          <circle cx="24" cy="88" r="3"  fill="rgba(255,107,53,0.4)"/>
          <line x1="24" y1="101" x2="24" y2="120" stroke="rgba(255,107,53,0.12)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Left vertical rule */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-px pointer-events-none hidden xl:block" aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(59,91,255,0.2), transparent)" }}
      />

      {/* Ambient glow — center top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,91,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="electric-rule mb-5" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold block mb-4">Selected Work</span>
            <h2
              id="work-heading"
              className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.88]"
            >
              <LineReveal as="span" splitBy="words" className="block" style={{ color: "var(--color-text)" }}>
                Work that
              </LineReveal>
              <LineReveal
                as="span"
                splitBy="words"
                delay={0.1}
                className="block font-[family-name:var(--font-instrument-serif)] italic font-light"
                style={{ color: "var(--color-electric-mid)" }}
              >
                speaks
              </LineReveal>
            </h2>
          </div>
          <p className="text-base font-medium max-w-xs leading-relaxed md:text-right" style={{ color: "var(--color-text-secondary)" }}>
            7+ years of impact across enterprise products, emerging tech, and design systems.
          </p>
        </div>

        {/* Project rows */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="case-row relative overflow-hidden"
            >
                <Link
                  href={project.href}
                  className={`case-card-inner group flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]`}
                  aria-label={`View ${project.title} case study`}
                  data-cursor="view"
                >
                  {/* Image block */}
                  <div className="relative md:w-[45%] aspect-[4/3] md:aspect-auto overflow-hidden flex-shrink-0">
                    {/* Base Image */}
                    <div
                      className="case-img-inner absolute inset-[-10%] bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    {/* Lando-style Clip-path Colorized Reveal */}
                    <div className="absolute inset-0 clip-reveal-up pointer-events-none z-10 transition-transform duration-1000 group-hover:scale-105">
                      <div
                        className="case-img-inner absolute inset-[-10%] bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: project.color, mixBlendMode: "color" }}
                      />
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{ background: project.color, mixBlendMode: "overlay" }}
                      />
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-5 left-5 electric-pill z-20" style={{ color: "#fff", background: "rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
                      {project.year}
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="flex-1 flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: project.color, boxShadow: `0 0 8px ${project.color}60` }}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[var(--color-text)] mb-3 group-hover:text-[var(--color-electric-mid)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-5">
                        {project.role}
                      </p>
                      <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics — KPI chips (RDL style) */}
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {project.metrics.map((m, j) => (
                        <div
                          key={j}
                          className="metric-item inline-flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-bold"
                          style={{
                            background: `${project.color}14`,
                            border: `1px solid ${project.color}30`,
                            color: project.color,
                          }}
                        >
                          <span className="font-black">{m.value}</span>
                          <span style={{ color: `${project.color}99` }}>·</span>
                          <span className="font-medium uppercase tracking-[0.08em] text-[10px]">{m.label}</span>
                        </div>
                      ))}

                      <div className="ml-auto">
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-300"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          View Case
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-[10px] font-bold border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-surface-2)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
