"use client";

import { useEffect, useRef, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/projects";
import dynamic from "next/dynamic";
import Image from "next/image";
import HoverTextEffect from "@/components/HoverTextEffect";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Dynamic Imports for Client Components
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const MassiveFooter = dynamic(() => import("@/components/MassiveFooter"), { ssr: false });
const HorizontalStrip = dynamic(() => import("@/components/HorizontalStrip"), { ssr: false });

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-image-wrapper", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Section Fade-ins
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Metrics counter animation
      const metrics = gsap.utils.toArray<HTMLElement>(".metric-value");
      metrics.forEach((metric) => {
        const value = metric.innerText;
        if (value.includes("%") || value.includes("+") || value.includes("$")) {
            // For simple values, we can animate the number if we strip the symbols
            // But let's just do a simple reveal for now to avoid complexity with strings
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen selection:bg-[var(--color-electric)] selection:text-white" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
        <MagneticCursor />
        <Navbar />

        {/* Hero Section */}
        <header ref={heroRef} className="relative pt-40 pb-20 px-6 overflow-hidden">
          {/* Subtle glow mesh */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: `radial-gradient(ellipse at 50% -20%, ${project.color}25 0%, transparent 60%)` }} />
          
          <div className="max-w-7xl mx-auto z-10 relative hero-content text-center">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-subtle)] text-[10px] font-bold uppercase tracking-[0.2em] mb-12 transition-all duration-300 hover:border-[var(--color-electric)] hover:text-[var(--color-text)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform stretch duration-300"><path d="m15 18-6-6 6-6"/></svg>
              <HoverTextEffect text="All Projects" />
            </Link>
            <h1 className="text-5xl md:text-[7.5rem] font-black tracking-[-0.04em] leading-[0.88] mb-8 max-w-5xl mx-auto">
              {project.title.split(' ').map((word, i) => (
                i % 2 === 1 ? <span key={i} className="font-[family-name:var(--font-instrument-serif)] italic font-light" style={{ color: project.color }}>{word} </span> : <span key={i}>{word} </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl font-medium tracking-tight max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              {project.tagline}
            </p>
          </div>

          <div 
            className="mt-20 w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-[24px] relative hero-image-wrapper mx-auto max-w-[95vw]"
            style={{ boxShadow: `0 30px 60px -15px ${project.color}30` }}
          >
            <Image 
              src={project.heroImage} 
              fill
              className="object-cover" 
              alt={project.title} 
              priority
            />
          </div>
        </header>

        {/* At a Glance */}
        <section className="py-24 px-6 section-cream overflow-hidden reveal-section relative">
          <div className="absolute inset-0 dot-grid-dark opacity-[0.05] pointer-events-none" />
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[var(--color-text-dark-muted)]">Role</div>
              <div className="text-xl font-black tracking-tight text-[var(--color-text-dark)]">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[var(--color-text-dark-muted)]">Timeline</div>
              <div className="text-xl font-black tracking-tight text-[var(--color-text-dark)]">{project.timeline}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[var(--color-text-dark-muted)]">Team</div>
              <div className="text-xl font-black tracking-tight text-[var(--color-text-dark)]">{project.team}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[var(--color-text-dark-muted)]">Tools</div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="kpi-chip-dark">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solution */}
        <section className="py-32 px-6 relative overflow-hidden reveal-section">
          {/* subtle blueprint lines */}
          <div className="absolute inset-0 blueprint-overlay opacity-30 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <div className="electric-rule mb-5" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}50` }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block" style={{ color: "var(--color-text-muted)" }}>The Challenge</span>
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-[-0.04em] text-[var(--color-text)]">The Problem Space</h2>
                <p className="text-xl leading-relaxed font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {project.problem}
                </p>
                
                {project.challenges && (
                  <div className="mt-12 space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <div key={i} className="flex gap-5 items-center card-dark p-6 group">
                        <span className="text-2xl font-black tracking-tighter" style={{ color: project.color }}>0{i+1}</span>
                        <p className="font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">{challenge}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="electric-rule mb-5" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}50` }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block" style={{ color: "var(--color-text-muted)" }}>The Solution</span>
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-[-0.04em] text-[var(--color-text)]">Strategic Approach</h2>
                <p className="text-xl leading-relaxed font-medium mb-12" style={{ color: "var(--color-text-secondary)" }}>
                  {project.solution}
                </p>

                {project.strategy && (
                  <div className="grid gap-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 mt-4" style={{ color: "var(--color-text-muted)" }}>Core KPIs</div>
                    {project.strategy.kpis.map((kpi, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-4 card-dark p-5"
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }} />
                        <span className="text-sm font-bold tracking-[-0.01em] text-[var(--color-text)]">{kpi}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Process - Horizontal Walkthrough */}
        <section className="py-40 px-6 bg-[var(--color-bg)] reveal-section relative border-t border-[var(--color-border)]">
          {/* Noise layer overlay */}
          <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: "var(--color-text-muted)" }}>The Journey</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-[var(--color-text)]">Chaos to <span className="font-[family-name:var(--font-instrument-serif)] italic font-light" style={{ color: project.color }}>Clarity</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {project.process.map((step, i) => (
                <div key={i} className="group relative bg-[var(--color-surface-card)] p-10 rounded-[40px] border border-[var(--color-border)] hover:border-[var(--color-electric)] hover:shadow-[0_20px_50px_var(--color-electric-glow)] transition-all duration-500 overflow-hidden">
                  <div className="absolute top-6 right-8 text-8xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity" style={{ color: project.color }}>{i+1}</div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block" style={{ color: "var(--color-text-muted)" }}>{step.duration || 'Phase'}</span>
                    <h3 className="text-3xl font-black mb-4 tracking-[-0.02em] text-[var(--color-text)]">{step.title}</h3>
                    {step.subtitle && <p className="text-sm italic mb-6 font-[family-name:var(--font-instrument-serif)]" style={{ color: "var(--color-text-secondary)" }}>{step.subtitle}</p>}
                    <p className="leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>{step.description}</p>
                    
                    {(step.chaos || step.clarity) && (
                      <div className="space-y-4 mt-8 pt-8 border-t border-[var(--color-border)]">
                        {step.chaos && (
                          <div className="p-4 rounded-[16px] border border-[var(--color-orange-pale)] bg-[rgba(255,107,53,0.02)]">
                            <span className="text-[8px] uppercase font-bold tracking-widest block mb-2" style={{ color: "var(--color-orange)" }}>Chaos</span>
                            <p className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>{step.chaos}</p>
                          </div>
                        )}
                        {step.clarity && (
                          <div className="p-4 rounded-[16px] border border-[var(--color-lime-pale)] bg-[rgba(184,255,71,0.02)]">
                            <span className="text-[8px] uppercase font-bold tracking-widest block mb-2" style={{ color: "var(--color-lime)" }}>Clarity</span>
                            <p className="text-xs font-medium text-[var(--color-text)]">{step.clarity}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design System Showcase */}
        {project.design && (
          <section className="py-40 px-6 reveal-section relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                <div>
                  <div className="electric-rule mb-5" style={{ background: project.color }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 block">Visual Language</span>
                  <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em]">Design <span className="font-[family-name:var(--font-instrument-serif)] italic font-light" style={{ color: project.color }}>DNA</span></h2>
                </div>
                <div className="flex gap-4">
                  {project.design.system.colorPalette.map((color, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border border-[var(--color-border-subtle)] group relative cursor-help"
                      style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}40` }}
                    >
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[var(--color-surface-2)] px-2 py-1 rounded">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid Replaced by HorizontalStrip */}
            </div>
            {/* Notice how we place the strip outside the max-w container so it gets full bleed */}
            <div className="mt-12">
               <HorizontalStrip items={project.design.gallery} />
            </div>
          </section>
        )}

        {/* Impact */}
        <section className="py-40 px-6 rounded-t-[60px] reveal-section relative overflow-hidden" style={{ background: project.color, color: "#fff" }}>
          {/* Inner mesh glow pattern or noise to keep it rich */}
          <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
               <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-6 block">Conclusion</span>
                  <h2 className="text-6xl md:text-[7rem] font-black tracking-[-0.05em] mb-12 leading-[0.9]">The Impact</h2>
                  <p className="text-2xl leading-relaxed font-medium mb-12 text-white/90">
                    {project.reflection}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-12">
                    {project.impact.metrics.map((metric, i) => (
                      <div key={i} className="reveal-section">
                        <div className="text-5xl md:text-7xl font-black tracking-[-0.04em] mb-3 metric-value">{metric.value}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
               </div>

               {project.impact.testimonial && (
                  <div className="bg-black/10 backdrop-blur-md p-12 md:p-16 rounded-[40px] border border-white/20 relative shadow-2xl">
                    <div className="text-[10rem] font-[family-name:var(--font-instrument-serif)] text-white/10 absolute -top-8 left-6 leading-none pointer-events-none">&quot;</div>
                    <blockquote className="text-3xl md:text-4xl font-medium leading-[1.2] mb-12 z-10 relative italic">
                      {project.impact.testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-5">
                      {project.impact.testimonial.avatar && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                          <Image src={project.impact.testimonial.avatar} fill className="object-cover" alt={project.impact.testimonial.author} />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-xl">{project.impact.testimonial.author}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-white/60 mt-1">{project.impact.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
               )}
            </div>
          </div>
        </section>

        <MassiveFooter />
      </div>
    </SmoothScroll>
  );
}
