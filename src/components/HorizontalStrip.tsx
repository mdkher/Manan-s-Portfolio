"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  src: string;
  caption?: string;
}

interface HorizontalStripProps {
  items: GalleryItem[];
}

export default function HorizontalStrip({ items }: HorizontalStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;
    
    // Check for reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const scrollAmount = wrapperRef.current!.scrollWidth - window.innerWidth;

      gsap.to(wrapperRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div ref={containerRef} className="relative h-screen bg-[#080809] overflow-hidden flex items-center border-[var(--color-border-subtle)] border-y py-12">
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
      <div ref={wrapperRef} className="flex gap-8 px-8 md:px-24 w-max items-center h-full relative z-10">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="relative w-[85vw] md:w-[65vw] h-[55vh] md:h-[75vh] rounded-[32px] overflow-hidden flex-shrink-0 group shadow-2xl border border-[var(--color-border-subtle)]"
          >
            <Image
              src={item.src}
              alt={item.caption || `Gallery image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
            {item.caption && (
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 pt-32 bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-transparent translate-y-[10%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <p className="text-xl md:text-3xl font-medium italic text-white/90 font-[family-name:var(--font-instrument-serif)]">{item.caption}</p>
              </div>
            )}
            {/* Lando-style inner clip reveal color effect on hover, subtle */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[var(--color-electric)] mix-blend-color pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
