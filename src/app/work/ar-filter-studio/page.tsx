"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import HoverTextEffect from "@/components/HoverTextEffect";
import LineReveal from "@/components/LineReveal";
import BespokeGrid, { GridItem } from "@/components/BespokeGrid";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });

export default function ARFilterStudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for "spatial" elements
      gsap.to(".floating-card", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

      // Depth reveal
      gsap.from(".depth-layer", {
        z: -500,
        opacity: 0,
        filter: "blur(20px)",
        stagger: 0.2,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".spatial-section",
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#050510] text-white selection:bg-purple-500/30 selection:text-white">
        <MagneticCursor />
        <Navbar />

        {/* Spatial Hero */}
        <header className="relative h-screen flex flex-col justify-center items-center overflow-hidden perspective-1000">
          {/* Animated Background Atmosphere */}
          <div className="absolute inset-0 opacity-40">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[180px] rounded-full animate-pulse delay-700" />
          </div>

          <div className="z-20 text-center px-6">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] font-bold uppercase tracking-[0.4em] mb-12 transition-all hover:bg-white/10"
            >
              <HoverTextEffect text="Innovation Lab / 02" />
            </Link>
            
            <h1 className="text-8xl md:text-[16rem] font-black tracking-tighter leading-[0.8] mb-8">
              <span className="block depth-layer">AR Filter</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-indigo-600 depth-layer">Studio</span>
            </h1>

            <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-40 depth-layer">
              Defining Spatial Engagement
            </p>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="floating-card absolute top-[20%] right-[15%] p-6 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-3xl rotate-12">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
                </div>
                <div className="text-[8px] font-bold opacity-40">TRACKING_STATE</div>
                <div className="text-xs font-black">ACTIVE.STABILIZED</div>
             </div>
             <div className="floating-card absolute bottom-[25%] left-[10%] p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-3xl -rotate-6">
                <div className="text-2xl font-black mb-2 text-purple-400">7.4k+</div>
                <div className="text-[8px] uppercase tracking-widest opacity-60">Global Impressions</div>
             </div>
          </div>
        </header>

        {/* Spatial Section */}
        <section className="py-24 px-6 spatial-section">
           <div className="max-w-7xl mx-auto">
              <BespokeGrid className="items-center">
                 <GridItem className="md:col-span-6 md:row-span-2 aspect-4/5" image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop" caption="The Metaverse Experience" />
                 <GridItem className="md:col-span-6 p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[60px]">
                    <div className="space-y-12">
                       <span className="text-purple-400 font-bold tracking-[0.4em] uppercase text-[10px]">Spatial UX</span>
                       <LineReveal as="h2" splitBy="words" className="text-5xl md:text-7xl font-black leading-tight">Beyond the <span className="italic font-light font-serif text-white/40">Viewport</span></LineReveal>
                       <p className="text-2xl leading-relaxed opacity-60">
                         We spearheaded Globant&apos;s AR Pod to bridge the gap between static screens and immersive reality. Our filters didn&apos;t just add graphics; they added value through engagement.
                       </p>
                       <div className="grid grid-cols-2 gap-8 pt-8">
                          <div>
                             <div className="text-4xl font-black text-purple-400 mb-2">1st</div>
                             <div className="text-[9px] uppercase tracking-widest opacity-40">AR specialized team</div>
                          </div>
                          <div>
                             <div className="text-4xl font-black text-white mb-2">Social</div>
                             <div className="text-[9px] uppercase tracking-widest opacity-40">Viral reach initiative</div>
                          </div>
                       </div>
                    </div>
                 </GridItem>
                 <GridItem className="md:col-span-6 mt-6 md:mt-0" image="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop" caption="Dynamic Spatial Depth Mapping" />
              </BespokeGrid>
           </div>
        </section>

        {/* Immersive Gallery */}
        <section className="py-40 px-6 relative overflow-hidden bg-white/2">
           <div className="max-w-7xl mx-auto text-center mb-32">
              <h2 className="text-6xl md:text-9xl font-black tracking-tight mb-8">Viral <span className="text-purple-500">Innovation</span></h2>
              <p className="text-xl opacity-40 max-w-2xl mx-auto">Scaling immersive prototypes from personal experiments to enterprise-wide standards.</p>
           </div>

           <div className="flex flex-nowrap gap-8 overflow-hidden relative group">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="min-w-[400px] h-[600px] rounded-[40px] overflow-hidden border border-white/10 relative transition-transform duration-700 group-hover:scale-[0.98] hover:scale-[1.05]! z-10">
                   <Image 
                      src={`https://images.unsplash.com/photo-${1633356122544 + i}-f134324a6cee?q=80&w=800&auto=format&fit=crop`} 
                      fill 
                      className="object-cover" 
                      alt={`AR Portfolio ${i}`} 
                    />
                    <div className="absolute inset-x-0 bottom-0 p-10 bg-linear-to-t from-black/80 to-transparent">
                       <div className="text-xs font-black uppercase text-purple-400 mb-2">Prototype_0{i}</div>
                       <div className="text-sm font-medium leading-tight">Spatial Interaction Study</div>
                    </div>
                </div>
              ))}
           </div>
        </section>

        {/* Reflection */}
        <section className="py-60 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <blockquote className="text-4xl md:text-6xl font-black italic font-serif leading-tight mb-12 opacity-80">
                &quot;AR isn&apos;t just about what you see; it&apos;s about how it makes you feel in your own space.&quot;
              </blockquote>
              <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-px bg-purple-500" />
                 <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-purple-400">Innovation Pulse</span>
              </div>
           </div>
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
