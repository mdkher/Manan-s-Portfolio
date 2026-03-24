"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
const FINAL_TEXT = "MANAN";

function useTextScramble(finalText: string, startDelay: number, scrambleDuration: number) {
  const [display, setDisplay] = useState(finalText.replace(/./g, " "));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let iteration = 0;
    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplay(
          finalText
            .split("")
            .map((char, i) => {
              if (i < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration += 1 / 3;
        if (iteration >= finalText.length) {
          clearInterval(intervalRef.current!);
          setDisplay(finalText);
        }
      }, 40);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [finalText, startDelay, scrambleDuration]);

  return display;
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const scrambledName = useTextScramble(FINAL_TEXT, 1800, 800);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { onComplete(); return; }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Fire custom event to tell Hero it's time to animate!
        // We fire this at the EXACT moment the curtain starts lifting.
        window.dispatchEvent(new Event("startHeroIntro"));

        // Cinematic Curtain Lift
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1.4,
          ease: "expo.inOut",
          onComplete,
        });
      },
    });

    // Count 0→100
    tl.to(counter, {
      val: 100, duration: 1.8, ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.val)),
    });

    // Fade counter, show scrambled name
    tl.to(counterRef.current, { opacity: 0, scale: 0.9, duration: 0.4, ease: "power2.in" });
    tl.fromTo(nameRef.current,
      { opacity: 0, scale: 1.1, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8, ease: "expo.out" },
      "-=0.2"
    );
    tl.to({}, { duration: 1.0 }); // Hold for scramble to resolve

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader" role="progressbar" aria-valuenow={count} aria-valuemin={0} aria-valuemax={100} aria-label="Loading portfolio">
      <div className="absolute inset-0 gradient-mesh opacity-30" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} aria-hidden="true" />

      <div className="relative flex flex-col items-center justify-center">
        {/* Counter */}
        <div ref={counterRef} className="text-center">
          <span className="text-[clamp(5rem,18vw,14rem)] font-black tracking-[-0.05em] text-[var(--color-text)] tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </span>
          <div className="w-48 h-[2px] bg-[var(--color-surface-2)] mx-auto mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-100" style={{ width: `${count}%` }} />
          </div>
        </div>

        {/* Scrambled Name */}
        <div ref={nameRef} className="absolute opacity-0 text-center">
          <span className="text-[clamp(4rem,14vw,10rem)] font-black tracking-[-0.05em] text-[var(--color-text)] font-mono">
            {scrambledName}
          </span>
          <span className="block text-sm uppercase tracking-[0.4em] text-[var(--color-text-secondary)] mt-4 font-medium">
            Product Designer & Strategist
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-bold">Manan Kher © 2026</div>
      <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-bold">System Initialization</div>
    </div>
  );
}
