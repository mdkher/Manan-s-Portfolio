"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/LineReveal";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: "k+", label: "Users Impacted", note: "Across 5 live products" },
  { value: 30,  suffix: "%",  label: "Faster Hiring",  note: "Infosys platform optimisation" },
  { value: 7,   suffix: "+",  label: "Years Experience", note: "Strategy → Execution" },
  { value: 5,   suffix: "",   label: "Products Shipped", note: "Across 3 continents" },
];

const companies = ["Globant", "Infosys", "IIT-Gandhinagar", "Vaccin1st", "DesignNXT", "SparkAR"];

export default function Stats() {
  const sectionRef  = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate counters
      const triggers = gsap.utils.toArray<HTMLSpanElement>(".stat-value");
      triggers.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        gsap.fromTo(el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: countersRef.current, start: "top 75%" },
          }
        );
      });

      // Reveal cards
      gsap.fromTo(".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: countersRef.current, start: "top 80%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--color-electric)" }}
      aria-labelledby="stats-heading"
      data-technical="true"
    >
      {/* Blueprint grid overlay */}
      <div className="blueprint-overlay" aria-hidden="true" />
      <div className="dot-grid-blue absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Right glow accent */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 100% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + stats list */}
          <div>
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
                Impact
              </span>
            </div>
            <h2
              id="stats-heading"
              className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.88] text-white mb-12"
            >
              <LineReveal as="span" splitBy="words" className="block">
                Numbers that
              </LineReveal>
              <LineReveal
                as="span"
                splitBy="words"
                delay={0.1}
                className="block font-[family-name:var(--font-instrument-serif)] italic font-light"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                earned trust
              </LineReveal>
            </h2>

            {/* Stat rows */}
            <div ref={countersRef} className="flex flex-col gap-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-card flex items-start gap-8 py-7 border-b border-white/15 last:border-0"
                >
                  <div
                    className="text-[clamp(2.8rem,5vw,4.5rem)] font-black tracking-[-0.05em] leading-none counter-value text-white flex-shrink-0"
                    style={{ minWidth: "6rem" }}
                  >
                    <span className="stat-value" data-target={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-base font-bold text-white">{stat.label}</div>
                    <div className="text-sm text-white/60 mt-1">{stat.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card stack mockup */}
          <div className="lg:pt-16 flex flex-col gap-6">

            {/* Card stack (RDL pattern) */}
            <div className="relative">
              {/* Card 3 — back */}
              <div
                className="absolute top-6 left-6 right-6 h-full rounded-[20px] border border-white/10"
                style={{ background: "rgba(255,255,255,0.06)", transform: "scale(0.97)" }}
                aria-hidden="true"
              />
              {/* Card 2 — middle */}
              <div
                className="absolute top-3 left-3 right-3 h-full rounded-[20px] border border-white/10"
                style={{ background: "rgba(255,255,255,0.09)", transform: "scale(0.985)" }}
                aria-hidden="true"
              />
              {/* Card 1 — front */}
              <div
                className="relative rounded-[20px] p-6 border border-white/20"
                style={{
                  background: "rgba(255,255,255,0.13)",
                  backdropFilter: "blur(24px)",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-bold">Globant Design System</span>
                  <span className="kpi-chip-white text-[10px]">2024</span>
                </div>
                {/* Mini design system swatch grid */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {["#3B5BFF","#FF6B35","#B8FF47","#FF3D7F","#FFFFFF","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(255,255,255,0.08)"].map((c, i) => (
                    <div key={i} className="aspect-square rounded-[8px] border border-white/10" style={{ background: c }} />
                  ))}
                </div>
                {/* Bar chart mockup */}
                <div className="mb-4">
                  <div className="text-xs text-white/60 mb-2 font-medium">Component Coverage</div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[55,70,85,90,72,95,88,60].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-[3px]"
                        style={{ height: `${h}%`, background: i === 5 ? "#fff" : "rgba(255,255,255,0.25)" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="kpi-chip-white">+40 Components</span>
                  <span className="kpi-chip-white">5 Teams</span>
                </div>
              </div>
            </div>

            {/* Company name strip */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Experience at</p>
              <div className="flex flex-wrap gap-2">
                {companies.map((co) => (
                  <span key={co} className="kpi-chip-white">{co}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
