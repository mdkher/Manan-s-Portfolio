"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/LineReveal";
gsap.registerPlugin(ScrollTrigger);

/* ── Inline SVG illustrations for each principle ── */

function EmpathySVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Concentric ripple circles */}
      <circle cx="100" cy="100" r="20" stroke="#3B5BFF" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.9" className="ripple-1"/>
      <circle cx="100" cy="100" r="42" stroke="#3B5BFF" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" className="ripple-2"/>
      <circle cx="100" cy="100" r="64" stroke="#3B5BFF" strokeWidth="0.8" strokeDasharray="3 10" opacity="0.35" className="ripple-3"/>
      <circle cx="100" cy="100" r="86" stroke="#3B5BFF" strokeWidth="0.6" strokeDasharray="2 12" opacity="0.18" className="ripple-4"/>
      {/* Person silhouette — center */}
      <circle cx="100" cy="88" r="10" fill="#3B5BFF" opacity="0.9"/>
      <path d="M78 120 Q100 108 122 120" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
      {/* Listening lines */}
      <path d="M60 72 Q50 80 54 90" stroke="#5573FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" strokeDasharray="3 5"/>
      <path d="M140 72 Q150 80 146 90" stroke="#5573FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" strokeDasharray="3 5"/>
      {/* Orbital dots */}
      <circle cx="100" cy="36" r="3" fill="#3B5BFF" opacity="0.5" className="orbit-dot"/>
      <circle cx="164" cy="100" r="3" fill="#3B5BFF" opacity="0.5" className="orbit-dot"/>
      <circle cx="100" cy="164" r="3" fill="#3B5BFF" opacity="0.5" className="orbit-dot"/>
      <circle cx="36" cy="100" r="3" fill="#3B5BFF" opacity="0.5" className="orbit-dot"/>
    </svg>
  );
}

function StrategySVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Node graph — strategy network */}
      {/* Central node */}
      <circle cx="100" cy="100" r="12" fill="#FF6B35" opacity="0.9"/>
      {/* Satellite nodes */}
      <circle cx="48" cy="65"  r="7" fill="#FF6B35" opacity="0.6"/>
      <circle cx="152" cy="65"  r="7" fill="#FF6B35" opacity="0.6"/>
      <circle cx="48" cy="135" r="7" fill="#FF6B35" opacity="0.5"/>
      <circle cx="152" cy="135" r="7" fill="#FF6B35" opacity="0.5"/>
      <circle cx="100" cy="30"  r="5" fill="#FF6B35" opacity="0.35"/>
      <circle cx="100" cy="170" r="5" fill="#FF6B35" opacity="0.35"/>
      {/* Connecting lines */}
      <line x1="100" y1="100" x2="48" y2="65"  stroke="#FF6B35" strokeWidth="1.2" opacity="0.5" strokeDasharray="4 6"/>
      <line x1="100" y1="100" x2="152" y2="65"  stroke="#FF6B35" strokeWidth="1.2" opacity="0.5" strokeDasharray="4 6"/>
      <line x1="100" y1="100" x2="48" y2="135" stroke="#FF6B35" strokeWidth="1.2" opacity="0.4" strokeDasharray="4 6"/>
      <line x1="100" y1="100" x2="152" y2="135" stroke="#FF6B35" strokeWidth="1.2" opacity="0.4" strokeDasharray="4 6"/>
      <line x1="100" y1="88"  x2="100" y2="30"  stroke="#FF6B35" strokeWidth="0.9" opacity="0.3" strokeDasharray="3 7"/>
      <line x1="100" y1="112" x2="100" y2="170" stroke="#FF6B35" strokeWidth="0.9" opacity="0.3" strokeDasharray="3 7"/>
      {/* Cross links */}
      <line x1="48" y1="65"  x2="152" y2="65"  stroke="#FF6B35" strokeWidth="0.6" opacity="0.2"/>
      <line x1="48" y1="135" x2="152" y2="135" stroke="#FF6B35" strokeWidth="0.6" opacity="0.2"/>
      {/* Outer ring */}
      <circle cx="100" cy="100" r="80" stroke="#FF6B35" strokeWidth="0.5" opacity="0.12" strokeDasharray="2 14"/>
      {/* Data pulse dot */}
      <circle cx="100" cy="100" r="20" stroke="#FF6B35" strokeWidth="1" opacity="0.3" className="strategy-pulse"/>
    </svg>
  );
}

function CraftSVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Precision grid — craft / measurement */}
      {/* Grid lines */}
      {[40,60,80,100,120,140,160].map((v) => (
        <line key={`h${v}`} x1="30" y1={v} x2="170" y2={v} stroke="#FF3D7F" strokeWidth="0.4" opacity="0.12"/>
      ))}
      {[40,60,80,100,120,140,160].map((v) => (
        <line key={`v${v}`} x1={v} y1="30" x2={v} y2="170" stroke="#FF3D7F" strokeWidth="0.4" opacity="0.12"/>
      ))}
      {/* Precision crosshair */}
      <line x1="100" y1="30" x2="100" y2="170" stroke="#FF3D7F" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="100" x2="170" y2="100" stroke="#FF3D7F" strokeWidth="1" opacity="0.5"/>
      {/* Target circles */}
      <circle cx="100" cy="100" r="30" stroke="#FF3D7F" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="100" cy="100" r="12" stroke="#FF3D7F" strokeWidth="1.5" opacity="0.9"/>
      <circle cx="100" cy="100" r="4"  fill="#FF3D7F" opacity="1"/>
      <circle cx="100" cy="100" r="56" stroke="#FF3D7F" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 8"/>
      {/* Tick marks */}
      <line x1="100" y1="68" x2="100" y2="74"  stroke="#FF3D7F" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="132" y1="100" x2="126" y2="100" stroke="#FF3D7F" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="100" y1="132" x2="100" y2="126" stroke="#FF3D7F" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <line x1="68" y1="100" x2="74" y2="100"  stroke="#FF3D7F" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      {/* Corner markers */}
      <path d="M40 40 L40 52 M40 40 L52 40" stroke="#FF3D7F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M160 40 L160 52 M160 40 L148 40" stroke="#FF3D7F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M40 160 L40 148 M40 160 L52 160" stroke="#FF3D7F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M160 160 L160 148 M160 160 L148 160" stroke="#FF3D7F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

const principles = [
  {
    num: "01",
    word: "EMPATHY",
    color: "#3B5BFF",
    colorName: "electric",
    tagline: "Listen before you design.",
    desc: "Ruthless listening unlocks the right question — and the right question unlocks the right answer. I spend more time understanding a problem than solving it.",
    SVG: EmpathySVG,
    stat: "150k+ users across 5 products",
  },
  {
    num: "02",
    word: "STRATEGY",
    color: "#FF6B35",
    colorName: "orange",
    tagline: "Every pixel has a purpose.",
    desc: "Design is business. It must move metrics, reduce friction, and align with the north star. I connect every design decision to a measurable outcome.",
    SVG: StrategySVG,
    stat: "30% faster hiring speed",
  },
  {
    num: "03",
    word: "CRAFT",
    color: "#FF3D7F",
    colorName: "rose",
    tagline: "The details make the design.",
    desc: "From typographic rhythm to micro-interactions — the small things users feel but rarely consciously notice. I sweat those details so the whole feels inevitable.",
    SVG: CraftSVG,
    stat: "7+ years, 5 shipped products",
  },
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Cards slide in staggered
      gsap.fromTo(".principle-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.18,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
        }
      );

      // Empathy ripple animation
      gsap.to(".ripple-1", { rotation: 360, transformOrigin: "100px 100px", duration: 20, repeat: -1, ease: "none" });
      gsap.to(".ripple-2", { rotation: -360, transformOrigin: "100px 100px", duration: 30, repeat: -1, ease: "none" });
      gsap.to(".ripple-3", { rotation: 360, transformOrigin: "100px 100px", duration: 45, repeat: -1, ease: "none" });
      gsap.to(".ripple-4", { rotation: -360, transformOrigin: "100px 100px", duration: 60, repeat: -1, ease: "none" });

      // Strategy pulse
      gsap.to(".strategy-pulse", { scale: 1.4, opacity: 0, transformOrigin: "100px 100px", duration: 2, repeat: -1, ease: "power2.out" });

      // Orbit dots float
      gsap.to(".orbit-dot", {
        y: -6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="manifesto-heading"
    >
      {/* ── Rich dark background ── */}
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true"/>

      {/* Corner accent lines — top left */}
      <div className="absolute top-0 left-0 pointer-events-none" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M0 60 L0 0 L60 0" stroke="#3B5BFF" strokeWidth="1" opacity="0.25"/>
          <path d="M0 100 L0 0 L100 0" stroke="#3B5BFF" strokeWidth="0.5" opacity="0.12"/>
          <circle cx="0" cy="0" r="60" stroke="#3B5BFF" strokeWidth="0.5" opacity="0.1" strokeDasharray="3 9"/>
        </svg>
      </div>

      {/* Corner accent lines — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M180 120 L180 180 L120 180" stroke="#FF6B35" strokeWidth="1" opacity="0.22"/>
          <path d="M180 80 L180 180 L80 180" stroke="#FF6B35" strokeWidth="0.5" opacity="0.1"/>
          <circle cx="180" cy="180" r="60" stroke="#FF6B35" strokeWidth="0.5" opacity="0.1" strokeDasharray="3 9"/>
        </svg>
      </div>

      {/* Ambient gradient glow — blue left, orange right */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[35vw] h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at left, rgba(59,91,255,0.1) 0%, transparent 70%)" }} aria-hidden="true"/>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[35vw] h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right, rgba(255,107,53,0.1) 0%, transparent 70%)" }} aria-hidden="true"/>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="manifesto-heading mb-16">
          <div className="electric-rule mb-5" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-4">
            Design Philosophy
          </p>
          <h2
            id="manifesto-heading"
            className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.88]"
          >
            <LineReveal as="span" splitBy="words" className="block">
              Three principles
            </LineReveal>
            <LineReveal
              as="span"
              splitBy="words"
              className="block font-[family-name:var(--font-instrument-serif)] italic font-light"
              style={{ color: "var(--color-text-secondary)" }}
              delay={0.12}
            >
              I never compromise on
            </LineReveal>
          </h2>
        </div>

        {/* 3-column card grid — ALL visible at once */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((p) => (
            <div
              key={p.num}
              className="principle-card group relative rounded-[20px] p-7 overflow-hidden border transition-all duration-500 cursor-default"
              style={{
                background: "var(--color-surface-card)",
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.color;
                e.currentTarget.style.boxShadow = `0 0 0 1px ${p.color}, 0 24px 60px ${p.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Subtle inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${p.color}18 0%, transparent 70%)`
                }}
                aria-hidden="true"
              />

              {/* Card content */}
              <div className="relative z-10">

                {/* Number + tag row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[3.5rem] font-black tracking-[-0.05em] leading-none select-none"
                    style={{ color: p.color, opacity: 0.18 }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}35`,
                      color: p.color,
                    }}
                  >
                    {p.colorName}
                  </span>
                </div>

                {/* SVG illustration */}
                <div
                  className="w-32 h-32 mx-auto mb-6 transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: `drop-shadow(0 0 20px ${p.color}40)` }}
                >
                  <p.SVG />
                </div>

                {/* Principle word */}
                <h3
                  className="text-3xl font-black tracking-[-0.05em] mb-2 transition-colors duration-300"
                  style={{ color: "var(--color-text)" }}
                >
                  {p.word}
                </h3>

                {/* Tagline */}
                <p
                  className="text-sm font-bold mb-3 italic"
                  style={{ color: p.color }}
                >
                  {p.tagline}
                </p>

                {/* Hairline */}
                <div className="hairline mb-4" />

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {p.desc}
                </p>

                {/* Proof stat chip */}
                <div
                  className="inline-flex items-center gap-2 text-[11px] font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}28`,
                    color: p.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: p.color }}
                  />
                  {p.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom connecting line — decorative */}
        <div className="mt-16 flex items-center gap-4" aria-hidden="true">
          <div className="flex-1 hairline" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-bold">
            Manan Kher · Since 2018
          </span>
          <div className="flex-1 hairline" />
        </div>
      </div>
    </section>
  );
}
