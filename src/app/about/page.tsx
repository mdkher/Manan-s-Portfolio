"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll  = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Navbar        = dynamic(() => import("@/components/Navbar"),        { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });
const AboutGrid     = dynamic(() => import("@/components/AboutGrid"),     { ssr: false });
const LineReveal    = dynamic(() => import("@/components/LineReveal"),    { ssr: false });
const HoverTextEffect = dynamic(() => import("@/components/HoverTextEffect"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const initAnimations = () => {
        // Hero Section Blur Reveal
        gsap.fromTo(".about-reveal",
          { opacity: 0, y: 30, filter: "blur(16px)" },
          { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            duration: 1.5, 
            stagger: 0.15, 
            ease: "expo.out"
          }
        );

        // Narrative Section Scroll Reveal
        if (textRef.current) {
          gsap.fromTo(textRef.current.querySelectorAll(".text-reveal"),
            { opacity: 0, y: 30, filter: "blur(12px)" },
            {
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              duration: 1.2, 
              stagger: 0.2, 
              ease: "expo.out",
              scrollTrigger: { 
                trigger: textRef.current, 
                start: "top 80%",
              }
            }
          );
        }
      };

      // Listen for global preloader exit or fire immediately if not present
      const handleIntro = () => initAnimations();
      window.addEventListener("startHeroIntro", handleIntro);

      // Force fire if preloader was already done (direct nav)
      if (typeof window !== "undefined" && (window as unknown as { preloaderDone: boolean }).preloaderDone) handleIntro();

      return () => window.removeEventListener("startHeroIntro", handleIntro);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <MagneticCursor />
      <Navbar />

      <main aria-label="About Manan Kher">
        {/* About Hero */}
        <section className="relative pt-48 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center text-center min-h-[70vh]">
          <div className="max-w-4xl relative z-10">
            <div className="about-reveal inline-block mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 transition-colors duration-300">
               <HoverTextEffect text="Identity & Focus" />
            </div>

            <LineReveal as="h1" splitBy="words" className="about-reveal text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 text-white">
              Transiting to <br />
              <span className="italic font-light font-serif text-electric opacity-50">Product</span>
            </LineReveal>
          </div>

          {/* Decorative glows */}
          <div className="absolute top-1/2 left-[10%] w-64 h-64 bg-[var(--color-electric)] rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-[var(--color-orange)] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        </section>

        {/* Narrative Text */}
        <section ref={textRef} className="py-20 px-6 max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-8 text-xl md:text-3xl font-medium leading-relaxed text-[var(--color-text-secondary)]">
            <p className="text-reveal">
              I&apos;m currently leveraging my 7+ years of experience in <span className="text-white font-bold">tech, UX design, and creative technology</span> to transition into Product Management.
            </p>
            <p className="text-reveal">
              Beyond my professional work at Globant and Infosys, I&apos;m building a business providing custom AI solutions, exploring <span className="text-[var(--color-electric-mid)] italic">vibe-coding</span>, and architecting autonomous systems.
            </p>
            <p className="text-reveal">
              In 2026, I&apos;ll be joining <span className="text-white font-bold">IE Business School</span> in Madrid for the International MBA program. Here is a look at my journey so far.
            </p>
          </div>
        </section>

        <AboutGrid />
      </main>

      <MassiveFooter />
    </SmoothScroll>
  );
}
