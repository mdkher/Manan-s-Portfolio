"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import HoverTextEffect from "@/components/HoverTextEffect";
import LineReveal from "@/components/LineReveal";
import BespokeGrid, { GridItem } from "@/components/BespokeGrid";
import ProjectChart from "@/components/ProjectChart";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });

export default function InfosysHiringPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-white text-black selection:bg-orange-100 selection:text-orange-900">
        <MagneticCursor />
        <Navbar />

        {/* Clean Enterprise Hero */}
        <header className="relative pt-48 pb-24 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden bg-stone-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto z-20 relative">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/5 bg-white text-[10px] font-bold uppercase tracking-[0.4em] mb-16 shadow-sm hover:shadow-md transition-all"
            >
              <HoverTextEffect text="Enterprise / 03" />
            </Link>
            
            <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12">
              <span className="block opacity-20">Infosys</span>
              <span className="block text-orange-600">Hiring Platform</span>
            </h1>

            <div className="flex items-center gap-12 mt-12">
               <div className="h-px w-24 bg-orange-600/30" />
               <p className="text-xl font-medium opacity-60 max-w-xl">
                 Modernizing the recruitment engine for 15,000+ employees. A case for enterprise design transformation.
               </p>
            </div>
          </div>
        </header>

        {/* The Transformation: Before & After */}
        <section className="py-40 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                 <div>
                    <span className="text-orange-600 font-bold mb-6 block tracking-widest uppercase text-[10px]">The Transformation</span>
                    <LineReveal as="h2" splitBy="words" className="text-5xl md:text-7xl font-black mb-8 leading-tight">Closing the <span className="italic font-light font-serif opacity-30">Friction</span> Gap</LineReveal>
                    <p className="text-xl leading-relaxed opacity-70 mb-12">
                      Legacy enterprise software is often the biggest bottleneck in growth. By redesigning the hiring platform from the ground up, we prioritized speed, clarity, and the human side of recruitment.
                    </p>
                    <div className="flex gap-4">
                       <div className="p-6 bg-stone-50 rounded-2xl border border-black/5 flex-1">
                          <div className="text-3xl font-black text-orange-600 mb-2">30%</div>
                          <div className="text-[10px] uppercase font-bold opacity-40">Hiring Cycle Redux</div>
                       </div>
                       <div className="p-6 bg-stone-50 rounded-2xl border border-black/5 flex-1">
                          <div className="text-3xl font-black text-black mb-2">15k+</div>
                          <div className="text-[10px] uppercase font-bold opacity-40">Employees Served</div>
                       </div>
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-orange-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <BeforeAfterSlider 
                        beforeImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                        afterImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
                        beforeLabel="Legacy Portal"
                        afterLabel="Redesigned platform"
                        className="shadow-3xl"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Impact & Strategy */}
        <section className="py-40 px-6 bg-stone-900 text-white rounded-[80px]">
           <div className="max-w-7xl mx-auto">
              <BespokeGrid>
                 <GridItem className="md:col-span-12 p-12 mb-12" />
                 <GridItem className="md:col-span-12 p-12 mb-12">
                    <div className="text-center">
                       <h2 className="text-5xl md:text-[8rem] font-black leading-none mb-12">Metric <span className="text-orange-500 italic font-serif font-light">Driven</span> Impact</h2>
                    </div>
                 </GridItem>
                 <GridItem className="md:col-span-8 p-12 bg-white/5 border border-white/10">
                    <ProjectChart 
                       title="Business Efficiency Gains"
                       className="bg-transparent! border-none!"
                       data={[
                          { label: "Application Processing Time", value: 45, suffix: "m", color: "#fb923c" },
                          { label: "Candidate Dropout Rate", value: 12, suffix: "%", color: "#ffffff" },
                          { label: "Interview Scheduling Speed", value: 60, suffix: "%", color: "#fb923c" }
                       ]}
                    />
                 </GridItem>
                 <GridItem className="md:col-span-4 p-12 flex flex-col justify-center bg-orange-600 text-black">
                    <div className="space-y-6">
                       <h3 className="text-3xl font-black">2021 Insta Award</h3>
                       <p className="font-medium opacity-80">Recognized for technical excellence and impact on company-wide hiring efficiency.</p>
                       <div className="pt-4">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7c0 3.31 2.69 6 6 6s6-2.69 6-6V2ZM12 15V2"/></svg>
                       </div>
                    </div>
                 </GridItem>
              </BespokeGrid>
           </div>
        </section>

        {/* Reflection */}
        <section className="py-60 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-12 block">Philosophy</span>
              <p className="text-4xl md:text-6xl font-black leading-tight italic font-serif opacity-80 mb-16">
                &quot;Enterprise tools don&apos;t have to be boring. In fact, they shouldn&apos;t be. &apos;Delight&apos; is a functional requirement.&quot;
              </p>
           </div>
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
