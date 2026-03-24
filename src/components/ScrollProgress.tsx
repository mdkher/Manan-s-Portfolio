"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Thin electric-blue scroll progress bar pinned to the top of the viewport.
 * Grows from scaleX 0 → 1 as the user scrolls the page.
 * Inspired by landonorris.com's scroll-indicator bar.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Set initial state via GSAP (avoids inline style TS conflict)
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[100000] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-[var(--color-electric)]"
        style={{ boxShadow: "0 0 8px var(--color-electric-glow)" }}
      />
    </div>
  );
}

