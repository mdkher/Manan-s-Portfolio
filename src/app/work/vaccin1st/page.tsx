"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import LineReveal from "@/components/LineReveal";
import BespokeGrid, { GridItem } from "@/components/BespokeGrid";
import ProjectChart from "@/components/ProjectChart";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });

export default function Vaccin1stPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectColor = "#00c896"; // Vaccin1st Emerald

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulse animation for "Real-time" indicator
      gsap.to(".status-dot", {
        opacity: 0.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-emerald-100 selection:text-emerald-900">
        <MagneticCursor />
        <Navbar />

        {/* Clinical Hero */}
        <header className="relative pt-48 pb-24 px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(${projectColor} 2px, transparent 2px)`, backgroundSize: "40px 40px" }} />
          
          <div className="max-w-7xl mx-auto z-20 relative">
            <div className="flex items-center gap-4 mb-16">
               <div className="h-4 w-4 rounded-full bg-emerald-500 status-dot" />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">System Specialist / 04</span>
            </div>
            
            <h1 className="text-7xl md:text-[14rem] font-black tracking-tighter leading-[0.8] mb-12">
              <span className="block italic font-light font-serif opacity-20">Vaccin</span>
              <span className="block text-emerald-600">1st Platform</span>
            </h1>

            <div className="max-w-2xl">
               <p className="text-2xl font-medium opacity-60 leading-relaxed">
                 A global-scale response to the COVID-19 pandemic. Coordinating complex vaccinations for 150,000+ people across three nations. 
               </p>
            </div>
          </div>
        </header>

        {/* Global Logistics Section */}
        <section className="py-40 px-6">
           <div className="max-w-7xl mx-auto">
              <BespokeGrid>
                 <GridItem className="md:col-span-12 p-16 mb-12 bg-emerald-600 text-white overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                       <div className="max-w-xl">
                          <h2 className="text-6xl font-black mb-6">Crisis <span className="text-white/40 italic font-serif">Response</span></h2>
                          <p className="text-xl opacity-80">Building at the speed of the pandemic required an absolute focus on reliability and logistical precision.</p>
                       </div>
                       <div className="flex gap-16">
                          <div className="text-center">
                             <div className="text-7xl font-black">150k+</div>
                             <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">People Served</div>
                          </div>
                          <div className="text-center">
                             <div className="text-7xl font-black">03</div>
                             <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Countries</div>
                          </div>
                       </div>
                    </div>
                 </GridItem>

                 <GridItem className="md:col-span-7 bg-white p-12">
                    <div>
                       <span className="text-emerald-600 font-bold mb-8 block uppercase text-[10px] tracking-widest">Technological Scale</span>
                       <LineReveal as="h3" splitBy="words" className="text-5xl font-black tracking-tighter mb-8">Concurrency & <span className="italic font-light font-serif text-black/30">Persistence</span></LineReveal>
                       <p className="opacity-60 text-lg leading-relaxed mb-12">
                         The platform had to handle massive concurrent traffic from employees across India, USA, and Germany. We implemented robust error boundaries and real-time syncing to ensure zero data loss during peak registration.
                       </p>
                       <ProjectChart 
                          title="Operational Efficiency"
                          className="bg-stone-50! border-stone-200!"
                          data={[
                             { label: "Data Accuracy", value: 100, suffix: "%", color: projectColor },
                             { label: "Peak Traffic Handled", value: 85, suffix: "%", color: "#000" },
                             { label: "Deployment Speed", value: 20, suffix: "%", color: projectColor }
                          ]}
                       />
                    </div>
                 </GridItem>

                 <GridItem className="md:col-span-5 aspect-square" image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop" caption="Global Deployment Monitoring" />
              </BespokeGrid>
           </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-40 px-6 bg-stone-900 text-white">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 group">
                 <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Architecture" />
                 <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] border border-white/20 p-6 rounded-full">Automated Testing Phase</span>
                 </div>
              </div>
              <div>
                 <h2 className="text-5xl font-black mb-12">Logistical <span className="text-emerald-400">Mastery</span></h2>
                 <p className="text-xl opacity-60 leading-relaxed mb-12">
                   Using AngularJS and JMeter, we stress-tested the system to its limits, ensuring that the platform was not just a tool, but a life-saving infrastructure during the most critical times.
                 </p>
                 <div className="flex gap-4">
                    {["AngularJS", "JMeter", "System Ops", "Real-time Sync"].map(tool => (
                       <div key={tool} className="px-6 py-2 rounded-full border border-white/10 text-[9px] uppercase font-bold tracking-widest">{tool}</div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Reflection */}
        <section className="py-60 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <p className="text-4xl md:text-6xl font-black italic font-serif leading-tight opacity-80 mb-16">
                &quot;At the peak of a crisis, design must be invisible and purely functional. Real-time accuracy saves lives.&quot;
              </p>
              <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-px bg-emerald-500" />
                 <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-emerald-600">Crisis Resilience System</span>
              </div>
           </div>
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
