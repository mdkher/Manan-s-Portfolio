"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import HoverTextEffect from "@/components/HoverTextEffect";
import LineReveal from "@/components/LineReveal";
import BespokeGrid, { GridItem } from "@/components/BespokeGrid";
import ProjectChart from "@/components/ProjectChart";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Dynamic Imports
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });

export default function GlobantDesignSystemPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Custom Blueprint Animation
      gsap.from(".blueprint-line", {
        drawSVG: "0%",
        duration: 2,
        stagger: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".blueprint-section",
          start: "top 60%",
        }
      });

      // Scale in components
      gsap.from(".component-preview", {
        scale: 0.8,
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".grid-section",
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projectColor = "#BFD730"; // Globant Lime

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-bg text-text selection:bg-lime-400 selection:text-black">
        <MagneticCursor />
        <Navbar />

        {/* Hero: The Blueprint */}
        <header className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Structural Grid Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: `linear-gradient(${projectColor} 1px, transparent 1px), linear-gradient(90deg, ${projectColor} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          
          <div className="max-w-7xl mx-auto z-20 relative text-center">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-subtle text-[10px] font-bold uppercase tracking-[0.4em] mb-20 transition-all hover:border-lime-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
              <HoverTextEffect text="Archives / 01" />
            </Link>
            
            <h1 className="text-7xl md:text-[14rem] font-black tracking-[-0.06em] leading-[0.8] mb-12">
              <span className="block italic font-light font-serif opacity-30">Globant</span>
              <span className="block text-lime-400">Design System</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12 opacity-60">
              {["Atomic Design", "Tokenization", "Web Components", "Agile Handoff"].map((tag) => (
                <span key={tag} className="px-6 py-2 rounded-full border border-border-subtle text-[9px] uppercase font-bold tracking-widest">{tag}</span>
              ))}
            </div>
          </div>

          {/* Abstract Component Blueprint */}
          <div className="absolute bottom-0 right-[-10%] w-1/2 h-1/2 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="300" height="300" stroke={projectColor} strokeWidth="2" strokeDasharray="10 5" />
                <circle cx="200" cy="200" r="100" stroke={projectColor} strokeWidth="1" />
                <path d="M50 50L350 350M50 350L350 50" stroke={projectColor} strokeWidth="0.5" />
             </svg>
          </div>
        </header>

        {/* The Structure Section */}
        <section className="py-40 px-6 blueprint-section relative">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
              <div>
                <span className="text-lime-400 font-bold mb-8 block tracking-widest uppercase text-[10px]">01 / Infrastructure</span>
                <LineReveal as="h2" splitBy="words" className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">The <span className="italic font-light font-serif text-white/40">Atomic</span> Framework</LineReveal>
                <p className="text-2xl leading-relaxed opacity-70 mb-12">
                  Building for scale means building for atoms. We moved from isolated UI kits to a token-driven, multi-framework ecosystem that powers 50+ global products.
                </p>
                <ProjectChart 
                  title="Impact Analysis"
                  data={[
                    { label: "Cycle Time reduction", value: 30, suffix: "%", color: projectColor },
                    { label: "Design Debt Cleared", value: 40, suffix: "%", color: projectColor },
                    { label: "Component Adoption", value: 360, color: "#ffffff" }
                  ]}
                />
              </div>
              <div className="relative aspect-square bg-surface-card rounded-[40px] border border-border-subtle overflow-hidden p-20 flex items-center justify-center">
                  {/* Decorative Blueprint elements */}
                  <div className="absolute inset-0 blueprint-grid opacity-10" 
                       style={{ backgroundImage: `radial-gradient(${projectColor} 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
                  <div className="w-full h-full relative border border-lime-400/20 rounded-2xl flex items-center justify-center">
                      <div className="p-12 bg-lime-400 text-black font-black text-6xl rounded-2xl shadow-2xl rotate-3">Button_01</div>
                      <div className="absolute top-10 left-10 p-4 border border-white/20 rounded-lg text-[8px] font-mono opacity-40">padding: 1rem 2rem;</div>
                      <div className="absolute bottom-10 right-10 p-4 border border-white/20 rounded-lg text-[8px] font-mono opacity-40">border-radius: 12px;</div>
                  </div>
              </div>
           </div>
        </section>

        {/* Bespoke Layout Section */}
        <section className="py-40 px-6 grid-section bg-surface-card/30">
           <div className="max-w-7xl mx-auto">
              <div className="mb-24">
                <LineReveal as="h2" splitBy="words" className="text-6xl font-black tracking-tight text-center">Scalable <span className="text-lime-400">Governance</span></LineReveal>
              </div>
              <BespokeGrid>
                <GridItem className="md:col-span-8 md:row-span-2" image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop" caption="The Master Library" />
                <GridItem className="md:col-span-4">
                   <div className="space-y-6">
                      <h3 className="text-2xl font-black">Tokens over Pixels</h3>
                      <p className="opacity-60 text-sm">We established a multi-tier token architecture (Primitive &rarr; Semantic &rarr; Component) using Style Dictionary.</p>
                      <div className="flex gap-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border border-white/10" style={{ background: i%2===0 ? projectColor : 'white', opacity: i*0.2 }} />)}
                      </div>
                   </div>
                </GridItem>
                <GridItem className="md:col-span-4" image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" caption="Atomic Research" />
                <GridItem className="md:col-span-12 mt-12">
                  <div className="grid md:grid-cols-3 gap-12">
                     {[
                       { title: "Standardisation", desc: "Unified consistent UI across 50+ products." },
                       { title: "Accessibility", desc: "100% WCAG 2.1 compliance for core library." },
                       { title: "Framework Agnostic", desc: "Used Stencil.js to deliver React/Angular/Vue wrappers." }
                     ].map((item, i) => (
                       <div key={i} className="component-preview p-10 border border-white/5 bg-black/20 rounded-3xl">
                          <span className="text-lime-400 font-mono text-xs mb-4 block">0{i+1}</span>
                          <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                          <p className="text-sm opacity-50">{item.desc}</p>
                       </div>
                     ))}
                  </div>
                </GridItem>
              </BespokeGrid>
           </div>
        </section>

        {/* Reflection */}
        <section className="py-60 px-6 relative overflow-hidden">
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 mb-12 block">The Reflection</span>
              <p className="text-4xl md:text-6xl font-medium tracking-tight leading-tight italic font-serif">
                &quot;Design systems are 20% components and 80% communication. It&apos;s not about how it looks; it&apos;s about how it scales.&quot;
              </p>
           </div>
           {/* Abstract Background geometry */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full pointer-events-none" />
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
