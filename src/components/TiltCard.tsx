"use client";

import { useRef, useEffect, useCallback, ReactNode } from "react";
import { gsap } from "gsap";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  scale?: number;
}

export default function TiltCard({ children, className = "", intensity = 15, glare = true, scale = 1.02 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });

    if (glare && glareRef.current) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.25) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  }, [intensity, scale, glare]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0, rotateY: 0, scale: 1,
      duration: 0.6, ease: "elastic.out(1, 0.5)",
    });
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={cardRef} className={`relative ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
