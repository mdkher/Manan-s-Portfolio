"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const gridItems = [
  // ROW 1-2: Main Experience + Quick stats
  {
    title: "Globant",
    subtitle: "Brand Strategist (UX)",
    desc: "Spearheaded design systems, AR Pod initiatives, and WCAG accessibility standards across products.",
    span: "md:col-span-2 md:row-span-2",
    bgClass: "bg-gradient-to-br from-[#3B5BFF]/30 via-[#3B5BFF]/10 to-transparent",
    borderClass: "border-[#3B5BFF]/30",
    accent: "text-white",
    size: "text-4xl md:text-6xl",
    floater: "bg-[#3B5BFF]",
  },
  {
    title: "7+ Years",
    subtitle: "Experience",
    desc: "Crafting digital experiences & scalable systems.",
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/10 to-transparent",
    borderClass: "border-[#FF6B35]/30",
    accent: "text-[#FF6B35]",
    size: "text-3xl md:text-4xl",
    floater: "bg-[#FF6B35]",
  },
  {
    title: "Surat ✈️ Madrid",
    subtitle: "Location",
    desc: "Currently in India, relocating to Spain soon.",
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-white/10 to-transparent",
    borderClass: "border-white/20",
    accent: "text-white",
    size: "text-2xl md:text-3xl",
    floater: "bg-white",
  },
  {
    title: "Photography",
    subtitle: "Creative",
    desc: "Featured photo story at the NID 2019 expo.",
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#A855F7]/30 via-[#A855F7]/10 to-transparent",
    borderClass: "border-[#A855F7]/30",
    accent: "text-[#A855F7]",
    size: "text-2xl md:text-3xl",
    floater: "bg-[#A855F7]",
  },
  {
    title: "Table Tennis",
    subtitle: "State Champ",
    desc: "Tournament winner in Abu Dhabi & state-level player.",
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#00D97E]/30 via-[#00D97E]/10 to-transparent",
    borderClass: "border-[#00D97E]/30",
    accent: "text-[#00D97E]",
    size: "text-2xl md:text-3xl",
    floater: "bg-[#00D97E]",
  },

  // ROW 3: Education & Impact
  {
    title: "IE Business School",
    subtitle: "IMBA &apos;26",
    desc: "Admitted to the highly-ranked International MBA program in Madrid.",
    span: "md:col-span-2 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#FF3D7F]/30 via-[#FF3D7F]/10 to-transparent",
    borderClass: "border-[#FF3D7F]/30",
    accent: "text-[#FF3D7F]",
    size: "text-3xl md:text-5xl",
    floater: "bg-[#FF3D7F]",
  },
  {
    title: "150K+ Users",
    subtitle: "Vaccin1st Impact",
    desc: "Led pandemic vaccination platform across 3 countries.",
    span: "md:col-span-2 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#FF9F1C]/30 via-[#FF9F1C]/10 to-transparent",
    borderClass: "border-[#FF9F1C]/30",
    accent: "text-[#FF9F1C]",
    size: "text-3xl md:text-5xl",
    floater: "bg-[#FF9F1C]",
  },

  // ROW 4: Tech & Thought Leadership
  {
    title: "Speaker & Author",
    subtitle: "Thought Leadership",
    desc: "Talks at DesignNXT & RO-MAN '19. Articles on Medium.",
    span: "md:col-span-1 md:row-span-2",
    bgClass: "bg-gradient-to-br from-[#F43F5E]/30 via-[#F43F5E]/10 to-transparent",
    borderClass: "border-[#F43F5E]/30",
    accent: "text-[#F43F5E]",
    size: "text-3xl",
    floater: "bg-[#F43F5E]",
  },
  {
    title: "Infosys",
    subtitle: "Power Programmer",
    desc: "Designed recruitment platform UX for 15,000+ employees globally.",
    span: "md:col-span-2 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#B8FF47]/30 via-[#B8FF47]/10 to-transparent",
    borderClass: "border-[#B8FF47]/30",
    accent: "text-[#B8FF47]",
    size: "text-3xl md:text-4xl",
    floater: "bg-[#B8FF47]",
  },
  {
    title: "Awards",
    subtitle: "Recognition",
    desc: "Innovator of the Quarter, IEEE Best Robotics Student.",
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#EAB308]/30 via-[#EAB308]/10 to-transparent",
    borderClass: "border-[#EAB308]/30",
    accent: "text-[#EAB308]",
    size: "text-2xl md:text-3xl",
    floater: "bg-[#EAB308]",
  },

  // ROW 5: Toolkit & Current Focus
  {
    title: "Toolkit",
    subtitle: "Creative Tech",
    pills: ["Figma", "SparkAR", "Angular", "Next.js", "Python"],
    span: "md:col-span-1 md:row-span-1",
    bgClass: "bg-gradient-to-br from-white/10 to-transparent",
    borderClass: "border-white/20",
    accent: "text-white",
    size: "text-2xl",
    floater: "bg-white",
  },
  {
    title: "AI & Vibe-Coding",
    subtitle: "Current Focus",
    desc: "Building custom AI solutions & autonomous systems blending dev and design.",
    span: "md:col-span-2 md:row-span-1",
    bgClass: "bg-gradient-to-br from-[#06B6D4]/30 via-[#06B6D4]/10 to-transparent",
    borderClass: "border-[#06B6D4]/30",
    accent: "text-[#06B6D4]",
    size: "text-3xl md:text-4xl",
    floater: "bg-[#06B6D4]",
  },
];

export default function AboutGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Cinematic Blur Reveal
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".about-bento-reveal") || [],
        { opacity: 0, y: 30, filter: "blur(16px)", scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 85%",
          },
        }
      );
      
      // Floating orbs animation
      gsap.to(".floating-orb", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-[88rem] mx-auto w-full relative z-20" aria-label="Detailed Experience Grid">
      <div className="text-center mb-24 relative">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block mb-4">
          Experience In A Glance
        </span>
        
        {/* Playful background glowing shape behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-32 bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-rose)] to-[var(--color-lime)] opacity-20 blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 lg:gap-6 auto-rows-fr">
        {gridItems.map((item, i) => (
          <div key={i} className={`about-bento-reveal ${item.span} opacity-0 perspective-1000 h-full`} style={{ willChange: "transform, opacity" }}>
            <TiltCard className="rounded-[32px] md:rounded-[40px] h-full shadow-2xl transition-transform duration-300 hover:scale-[1.02]" intensity={6} scale={1.03}>
              <div 
                className={`h-full ${item.bgClass} rounded-[32px] md:rounded-[40px] p-6 lg:p-10 border ${item.borderClass} overflow-hidden relative backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group flex flex-col justify-between`}
              >
                {/* Playful animated floater in background */}
                <div className={`floating-orb absolute -top-10 -right-10 w-40 h-40 rounded-full ${item.floater} opacity-20 blur-[50px] mix-blend-screen group-hover:opacity-40 group-hover:scale-150 transition-all duration-700`} />
                <div className={`floating-orb absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${item.floater} opacity-10 blur-[40px] mix-blend-screen group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 delay-100`} />

                <div className="relative z-10">
                  <div className={`${item.size} font-black ${item.accent} tracking-tighter mb-3 leading-none drop-shadow-2xl font-[family-name:var(--font-sans)]`}>
                    {item.title}
                  </div>
                  <div className="text-lg lg:text-xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                    {item.subtitle}
                  </div>
                  
                  {item.desc && (
                    <p className="text-[rgba(255,255,255,0.7)] leading-relaxed tracking-tight font-medium max-w-sm mt-3 text-sm md:text-base mix-blend-lighten">
                      {item.desc}
                    </p>
                  )}
                </div>

                {item.pills && (
                  <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                    {item.pills.map((pill, j) => (
                      <span key={j} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white backdrop-blur-md transition-all duration-300 tracking-tight hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-white/50 cursor-default">
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
