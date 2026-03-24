"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/LineReveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    tag: "Discovery",
    title: "UX Research",
    desc: "Uncover what users actually need through interviews, heuristic audits, and competitive analysis sprints.",
    duration: "2 – 3 weeks",
    tools: ["User Interviews", "Journey Mapping", "WCAG Audit"],
    color: "var(--color-electric)",
  },
  {
    num: "02",
    tag: "Strategy",
    title: "Product Strategy",
    desc: "Translate research insights into a north star — feature prioritisation, information architecture, and flow.",
    duration: "1 – 2 weeks",
    tools: ["IA Design", "Opportunity Maps", "Metrics Framework"],
    color: "var(--color-orange)",
  },
  {
    num: "03",
    tag: "Design",
    title: "UI / Visual Design",
    desc: "Pixel-perfect interfaces, design systems, and brand-consistent components built for scale.",
    duration: "3 – 6 weeks",
    tools: ["Figma", "Design Systems", "Prototyping"],
    color: "var(--color-rose)",
  },
  {
    num: "04",
    tag: "Deliver",
    title: "Testing & Handoff",
    desc: "Usability testing, developer handoff with annotated specs, and iteration based on real feedback loops.",
    duration: "1 – 2 weeks",
    tools: ["Usability Testing", "Dev Specs", "A/B Testing"],
    color: "var(--color-lime)",
  },
];

export default function ServicesBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll(".service-card");
        
        if (cards && cards.length > 0) {
          gsap.fromTo(cards,
            { opacity: 0, y: 60, filter: "blur(16px)" },
            {
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: sectionRef.current?.querySelector(".grid"),
                start: "top 80%",
                once: true,
              }
            }
          );
        }
      }, sectionRef);
      return () => ctx.revert();
    }, []);

    return (
      <section
        ref={sectionRef}
        id="services"
        className="section-cream py-32 px-6 md:px-12 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Subtle dot grid on cream */}
        <div className="absolute inset-0 dot-grid-dark opacity-30 pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative">

          {/* Section header */}
          <div className="mb-16">
            <div className="amber-rule mb-5" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-dark-muted)] font-bold mb-4">
              Services
            </p>
            <h2
              id="services-heading"
              className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.88] text-[var(--color-text-dark)]"
            >
              <LineReveal as="span" splitBy="words" className="block">
                What I bring
              </LineReveal>
              <LineReveal
                as="span"
                splitBy="words"
                delay={0.1}
                className="block font-[family-name:var(--font-instrument-serif)] italic font-light"
                style={{ color: "var(--color-electric)" }}
              >
                to your table
              </LineReveal>
            </h2>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="service-card card-light p-0 group cursor-default overflow-hidden relative"
              >
                <div className="card-inner p-8 relative z-10 w-full h-full">
                    {/* Card header row */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-[2.8rem] font-black tracking-[-0.05em] leading-none opacity-12 select-none"
                        style={{ color: s.color, opacity: 0.2 }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full"
                        style={{
                          background: `color-mix(in srgb, ${s.color} 10%, transparent)`,
                          color: s.color === "var(--color-lime)" ? "#6BA320" : s.color,
                          border: `1px solid color-mix(in srgb, ${s.color} 25%, transparent)`,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-text-dark)] mb-2">
                      {s.title}
                    </h3>

                    {/* Hairline */}
                    <div className="hairline-cream my-4" />

                    {/* Description */}
                    <p className="text-sm text-[var(--color-text-dark-2)] leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    {/* Tool tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.tools.map((tool) => (
                        <span key={tool} className="kpi-chip-dark text-[11px]">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Footer row */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--color-text-dark-muted)] font-medium">
                        From {s.duration}
                      </span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        style={{ color: s.color === "var(--color-lime)" ? "#6BA320" : s.color }}
                        fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"/>
                        <polyline points="7 7 17 7 17 17"/>
                      </svg>
                    </div>
                  </div>
              </div>

            ))}
          </div>
      </div>
    </section>
  );
}
