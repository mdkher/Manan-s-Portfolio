"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import HoverTextEffect from "@/components/HoverTextEffect";
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

export default function GaitRecognitionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectColor = "#8b5cf6"; // IIT Purple

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-900/40 selection:text-purple-200">
        <MagneticCursor />
        <Navbar />

        {/* Analytical Hero */}
        <header className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Scientific Scanline background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `linear-gradient(transparent 95%, ${projectColor} 95%)`, backgroundSize: "100% 4px" }} />
          
          <div className="max-w-7xl mx-auto z-20 relative text-center">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl text-[10px] font-bold uppercase tracking-[0.4em] mb-12 shadow-2xl transition-all hover:border-purple-500"
            >
              <HoverTextEffect text="Research / 05" />
            </Link>
            
            <h1 className="text-7xl md:text-[14rem] font-black tracking-[-0.04em] leading-[0.8] mb-12">
               Gait <span className="block italic font-light font-serif text-purple-400">Recognition</span>
            </h1>

            <div className="max-w-3xl mx-auto">
               <p className="text-xl md:text-2xl font-medium opacity-40 leading-relaxed tracking-tight">
                 Advancing Biometric Identification through Deep Learning. Award-winning research into spatial-temporal intention detection.
               </p>
            </div>
          </div>
        </header>

        {/* Research Excellence Section */}
        <section className="py-40 px-6">
           <div className="max-w-7xl mx-auto">
              <BespokeGrid>
                 <GridItem className="md:col-span-12 p-16 mb-12 bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[60px] overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                       <div>
                          <span className="text-purple-500 font-bold mb-6 block tracking-widest uppercase text-[10px]">Academic Achievement</span>
                          <LineReveal as="h2" splitBy="words" className="text-6xl font-black mb-12">IEEE <span className="italic font-light font-serif text-white/30">RO-MAN</span> 2019</LineReveal>
                          <p className="text-xl opacity-60 mb-12 leading-relaxed">
                            Co-authored a research paper presented at the 28th IEEE RO-MAN Conference in New Delhi. Our work focused on intention detection using biometric gait analysis.
                          </p>
                          <div className="p-8 border border-purple-500/20 bg-purple-500/5 rounded-3xl">
                             <h4 className="text-sm font-black mb-4 uppercase tracking-widest text-purple-400">Awarded</h4>
                             <p className="font-bold text-2xl">Kawamura Award Finalist</p>
                             <p className="opacity-40 text-sm mt-2">Best Indian Robotics Student Category</p>
                          </div>
                       </div>
                       <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                          <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" fill className="object-cover" alt="Research Lab" />
                          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                          <div className="absolute bottom-8 left-8">
                             <div className="text-[10px] font-black tracking-widest opacity-60">IIT GANDHINAGAR</div>
                             <div className="text-xs font-bold">RESEARCH INITIATIVE</div>
                          </div>
                       </div>
                    </div>
                 </GridItem>

                 <GridItem className="md:col-span-8 p-12 bg-white/2 border border-white/5">
                    <div>
                       <span className="text-purple-500 font-bold mb-8 block uppercase text-[10px] tracking-widest">Scientific results</span>
                       <LineReveal as="h3" splitBy="words" className="text-5xl font-black tracking-tighter mb-12">Algorithm <span className="italic font-light font-serif text-white/30">Efficiency</span></LineReveal>
                       <ProjectChart 
                          title="Evaluation Metrics"
                          data={[
                             { label: "Accuracy Score", value: 92, suffix: "%", color: projectColor },
                             { label: "Processing Latency", value: 45, suffix: "ms", color: "#ffffff" },
                             { label: "Confidence Threshold", value: 85, color: projectColor }
                          ]}
                       />
                    </div>
                 </GridItem>

                 <GridItem className="md:col-span-4 p-12 flex flex-col justify-center bg-purple-600 text-white">
                    <div className="space-y-6">
                       <h3 className="text-3xl font-black">AI/ML Core</h3>
                       <p className="font-medium opacity-80 leading-relaxed">Utilized CNNs and LSTM architectures to capture temporal features of human movement.</p>
                       <div className="flex flex-wrap gap-2 pt-4">
                          {["Python", "PyTorch", "OpenCV", "Matlab"].map(tag => (
                             <span key={tag} className="px-4 py-2 bg-black/20 rounded-full text-[8px] font-black uppercase tracking-widest">{tag}</span>
                          ))}
                       </div>
                    </div>
                 </GridItem>
              </BespokeGrid>
           </div>
        </section>

        {/* Impact */}
        <section className="py-40 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-12 block">Philosophy</span>
              <p className="text-4xl md:text-6xl font-black leading-tight italic font-serif opacity-80 mb-16">
                 &quot;Technical complexity should be handled by the machine; transparency should be handled by the design.&quot;
              </p>
              <div className="flex flex-col items-center gap-4">
                 <div className="w-16 h-px bg-purple-500" />
                 <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-purple-400">Intelligent Systems</span>
              </div>
           </div>
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
