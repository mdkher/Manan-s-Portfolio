"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "./LineReveal";

gsap.registerPlugin(ScrollTrigger);

interface PerspectiveSectionProps {
  type: "ceo" | "architect" | "ux";
  data: {
    title: string;
    items: { label: string; value: string | string[] }[];
    summary: string;
    accentColor: string;
  };
}

export default function PerspectiveSection({ type, data }: PerspectiveSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".perspective-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.to(iconRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getIcon = () => {
    switch (type) {
      case "ceo": return "💼";
      case "architect": return "🏗️";
      case "ux": return "🧠";
      default: return "✨";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "ceo": return "CEO / Strategic Perspective";
      case "architect": return "Technical Architect Perspective";
      case "ux": return "UX Manager / Leadership Perspective";
    }
  };

  return (
    <div ref={containerRef} className="py-20 border-t border-border-subtle relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${data.accentColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <div ref={iconRef} className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 border border-border bg-black/5 backdrop-blur-sm">
              {getIcon()}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-text-muted">
              {getTypeLabel()}
            </span>
            <LineReveal as="h3" className="text-4xl font-black tracking-tighter mb-6 leading-tight">
              {data.title}
            </LineReveal>
            <p className="text-lg leading-relaxed text-text-secondary">
              {data.summary}
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {data.items.map((item, i) => (
              <div key={i} className="perspective-card p-8 rounded-3xl border border-border-subtle bg-surface-card hover:border-text-muted transition-all duration-500 group">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-text-muted group-hover:text-text transition-colors">
                  {item.label}
                </div>
                {Array.isArray(item.value) ? (
                  <ul className="space-y-3">
                    {item.value.map((v, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium text-text">
                        <div className="w-1 h-1 rounded-full bg-electric" style={{ background: data.accentColor }} />
                        {v}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xl font-bold tracking-tight text-text">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
