"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const text = textRef.current;
    
    // Disable on touch devices
    if (!dot || !text || window.matchMedia("(pointer: coarse)").matches) {
       if (dot) dot.style.display = 'none';
       return;
    }

    let isHoveringView = false;
    let isHoveringLink = false;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    
    const xTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const cursorTarget = target.closest('[data-cursor]');
      const linkTarget = target.closest('a, button, [role="button"], input, [data-magnetic]');
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view' && !isHoveringView) {
          isHoveringView = true;
          isHoveringLink = false;
          gsap.to(dot, {
            width: 80,
            height: 80,
            backgroundColor: "rgba(59, 91, 255, 0.95)",
            boxShadow: "0 0 30px rgba(59, 91, 255, 0.5)",
            borderColor: "rgba(255,255,255,0.2)",
            borderWidth: 1,
            backdropFilter: "blur(6px)",
            duration: 0.4,
            ease: "expo.out"
          });
          text.innerText = "VIEW";
          gsap.to(text, { opacity: 1, scale: 1, color: "white", duration: 0.3, delay: 0.1 });
        }
      } else if (linkTarget && !isHoveringView && !isHoveringLink) {
         isHoveringLink = true;
         gsap.to(dot, { scale: 2.5, backgroundColor: "transparent", borderColor: "#3B5BFF", borderWidth: 1, duration: 0.3, ease: "expo.out" });
      } else if (!cursorTarget && !linkTarget && (isHoveringView || isHoveringLink)) {
        isHoveringView = false;
        isHoveringLink = false;
        gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.2 });
        gsap.to(dot, {
          width: 10,
          height: 10,
          scale: 1,
          backgroundColor: "#3B5BFF",
          boxShadow: "0 0 10px rgba(59,91,255,0.6)",
          borderColor: "transparent",
          borderWidth: 0,
          backdropFilter: "none",
          duration: 0.4,
          ease: "expo.out"
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[100000] pointer-events-none flex items-center justify-center rounded-full"
      style={{
        width: 10,
        height: 10,
        background: "#3B5BFF",
        boxShadow: "0 0 10px rgba(59,91,255,0.6)",
      }}
      aria-hidden="true"
    >
      <span 
        ref={textRef} 
        className="text-[10px] font-mono font-bold tracking-widest opacity-0 scale-50"
      ></span>
    </div>
  );
}
