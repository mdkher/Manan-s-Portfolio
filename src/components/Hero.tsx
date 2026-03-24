"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverTextEffect from "./HoverTextEffect";

gsap.registerPlugin(ScrollTrigger);

/* ── Text scramble utility ── */
class TextScramble {
  el: HTMLElement;
  chars = "!<>-_\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = [];
  frame = 0;
  frameRequest = 0;
  resolve!: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => { this.resolve = resolve; });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to   = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end   = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span style="color:rgba(59,91,255,0.5)">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}



export default function Hero() {
  const sectionRef    = useRef<HTMLElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const scrambleRef   = useRef<HTMLSpanElement>(null);
  const headlineRef   = useRef<HTMLHeadingElement>(null);
  const subRef        = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const spotlightRef  = useRef<HTMLDivElement>(null);
  const marqueeRef    = useRef<HTMLDivElement>(null);
  const mousePos      = useRef({ x: 0, y: 0 });

  /* ── Aurora canvas background ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Aurora nodes — each is a colored radial glow that drifts
    const nodes = [
      { x: 0.15, y: 0.4,  r: 0.55, color: [59,  91,  255], speed: 0.00015 },
      { x: 0.75, y: 0.2,  r: 0.45, color: [130, 60,  255], speed: 0.00020 },
      { x: 0.50, y: 0.80, r: 0.40, color: [255, 61,  127], speed: 0.00018 },
      { x: 0.85, y: 0.65, r: 0.35, color: [59,  180, 255], speed: 0.00012 },
      { x: 0.30, y: 0.15, r: 0.30, color: [100, 40,  200], speed: 0.00022 },
    ];

    const draw = () => {
      t++;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // Deep base
      ctx.fillStyle = "#09090F";
      ctx.fillRect(0, 0, W, H);

      // Glow nodes
      nodes.forEach((n, i) => {
        const ox = Math.sin(t * n.speed * 2.1 + i * 1.3) * 0.14;
        const oy = Math.cos(t * n.speed * 1.7 + i * 0.9) * 0.10;
        const cx = (n.x + ox) * W;
        const cy = (n.y + oy) * H;
        const radius = n.r * Math.max(W, H);
        const pulse = 0.9 + Math.sin(t * n.speed * 5 + i) * 0.1;
        const [r, g, b] = n.color;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * pulse);
        grad.addColorStop(0,   `rgba(${r},${g},${b},0.22)`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},0.08)`);
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      });

      // Subtle horizontal scan line
      const scanY = ((t * 0.3) % H);
      const scanGrad = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      scanGrad.addColorStop(0,   "rgba(59,91,255,0)");
      scanGrad.addColorStop(0.5, "rgba(59,91,255,0.04)");
      scanGrad.addColorStop(1,   "rgba(59,91,255,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 2, W, 4);

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Mouse spotlight ── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current || !spotlightRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePos.current = { x, y };
    gsap.to(spotlightRef.current, {
      left: x, top: y, duration: 0.6, ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  /* ── Entrance animation ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Immediately hide everything elements so they don't flash while Preloader is covering the screen
      gsap.set(".hero-line", { opacity: 0, y: 60, filter: "blur(16px)" });
      gsap.set([subRef.current, ctaRef.current, marqueeRef.current], { opacity: 0 });
      gsap.set(subRef.current, { y: 24 });
      gsap.set(ctaRef.current, { y: 16 });

      // 2. Play intro payload
      const playIntro = () => {
        // Text scramble on the dynamic word (indefinite loop)
        if (scrambleRef.current) {
          const scrambler = new TextScramble(scrambleRef.current);
          const phrases = ["products", "experiences", "platforms", "solutions"];
          let counter = 0;
          const next = async () => {
            await scrambler.setText(phrases[counter]);
            await new Promise(r => setTimeout(r, 2000));
            counter = (counter + 1) % phrases.length;
            next();
          };
          next();
        }

        // Headline lines fade up
        gsap.to(".hero-line", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power4.out", stagger: 0.15 });

        // Subtext
        gsap.to(subRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 });

        // CTA
        gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.0 });

        // Marquee
        gsap.to(marqueeRef.current, { opacity: 1, duration: 0.8, delay: 1.8 });
      };

      // 3. Bind to the Preloader's custom event
      window.addEventListener("startHeroIntro", playIntro, { once: true });

      // Fallback: If Preloader is bypassed or missing, play anyway
      const fallbackTimer = setTimeout(() => {
        if (!document.querySelector(".preloader")) playIntro();
      }, 500);

      return () => {
        window.removeEventListener("startHeroIntro", playIntro);
        clearTimeout(fallbackTimer);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Scroll exit parallax — hero slides up / scales out ── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      }
    });

    tl.to(".hero-content", { y: -80, scale: 0.97, opacity: 0.6, ease: "none" }, 0);
    tl.to(".hero-canvas",  { scale: 1.05, ease: "none" }, 0);

    return () => { tl.scrollTrigger?.kill(); };
  }, []);



  const marqueeItems = [
    "Brand Strategy", "UX Research", "Design Systems",
    "Figma", "SparkAR", "WCAG 2.1", "Prototyping",
    "Brand Strategy", "UX Research", "Design Systems",
    "Figma", "SparkAR", "WCAG 2.1", "Prototyping",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* ── Canvas aurora background ── */}
      <canvas
        ref={canvasRef}
        className="hero-canvas absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* ── Mouse-following spotlight ── */}
      <div
        ref={spotlightRef}
        className="absolute pointer-events-none z-10"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(59,91,255,0.06) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
        }}
        aria-hidden="true"
      />



      {/* ── Main hero content ── */}
      <div className="hero-content relative z-20 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-36 pb-12 max-w-7xl mx-auto w-full">

        {/* Headline */}
        <h1
          ref={headlineRef}
          id="hero-heading"
          className="font-black leading-[1.05] tracking-[-0.055em] mb-10 flex flex-col gap-1"
        >
          <div
            className="hero-line text-[clamp(2.5rem,8.5vw,8.5rem)] leading-[0.95]"
            style={{ color: "rgba(238,237,245,0.95)" }}
          >
            I turn complex
          </div>

          <div
            className="hero-line text-[clamp(2.5rem,8.5vw,8.5rem)] leading-[0.95] flex items-baseline gap-4 md:gap-6 flex-wrap"
          >
            <span style={{ color: "rgba(238,237,245,0.95)" }}>problems</span>
            <span
              className="font-instrument-serif italic font-light"
              style={{ color: "rgba(238,237,245,0.4)" }}
            >
              into
            </span>
          </div>

          {/* Scramble line */}
          <div
            className="hero-line text-[clamp(2.5rem,8.5vw,8.5rem)] leading-[0.95] mt-1"
            style={{ color: "#3B5BFF" }}
          >
            <span ref={scrambleRef} className="inline-block min-h-[1.1em]">products</span>
          </div>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Brand Strategist &amp; Product Designer. 7+ years turning user research
          into shipped products across{" "}
          <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
            5 continents, 150k+ users
          </span>.
        </p>

        {/* CTA row */}
        <div ref={ctaRef} className="flex items-center gap-4 flex-wrap">
          {/* Primary CTA — glowing button */}
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "var(--color-electric)",
            }}
          >
            {/* Animated shimmer */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                transform: "translateX(-100%)",
                animation: "shimmer 1.5s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <span className="relative">
              <HoverTextEffect text="View Work" />
            </span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" className="relative group-hover:translate-x-1 transition-transform stretch duration-300">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>

          {/* Secondary */}
          <a
            href="mailto:manan@manan.design"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/5"
            style={{
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <HoverTextEffect text="Say Hello" />
          </a>

          {/* Scroll hint */}
          <div className="ml-auto hidden md:flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            <div
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div
                className="w-0.5 h-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.4)",
                  animation: "scroll-bounce 1.8s ease-in-out infinite",
                }}
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Scroll</span>
          </div>
        </div>
      </div>

      {/* ── Bottom marquee ── */}
      <div
        ref={marqueeRef}
        className="relative z-20 overflow-hidden"
        aria-hidden="true"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="py-5 flex"
          style={{ background: "rgba(59,91,255,0.05)" }}
        >
          <div className="marquee-track marquee-left">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: i % 3 === 0 ? "#3B5BFF" : i % 3 === 1 ? "#FF6B35" : "#B8FF47" }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CSS animations ── */}
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); opacity: 1; }
          100% { transform: translateX(200%);  opacity: 1; }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0);   opacity: 1; }
          50%       { transform: translateY(10px); opacity: 0.3; }
        }
        @keyframes float-card-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes float-card-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(-0.3deg); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(0.4deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
