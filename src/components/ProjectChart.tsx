"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChartData {
  label: string;
  value: number;
  suffix?: string;
  color?: string;
}

interface ProjectChartProps {
  data: ChartData[];
  title?: string;
  className?: string;
}

export default function ProjectChart({
  data,
  title,
  className = "",
}: ProjectChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chart-bar", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".chart-value", {
        opacity: 0,
        x: -10,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`p-10 rounded-[32px] bg-surface-card border border-border-subtle ${className}`}
    >
      {title && (
        <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-12 text-text-muted">
          {title}
        </h4>
      )}
      <div className="space-y-8">
        {data.map((item, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-bold text-text-secondary tracking-tight">
                {item.label}
              </span>
              <span className="chart-value text-2xl font-black tracking-tighter">
                {item.value}
                {item.suffix}
              </span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="chart-bar h-full rounded-full origin-left"
                style={{
                  width: `${(item.value / Math.max(...data.map((d) => d.value))) * 100}%`,
                  background: item.color || "var(--color-electric)",
                  boxShadow: `0 0 20px ${item.color || "var(--color-electric)"}40`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
