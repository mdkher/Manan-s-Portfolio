"use client";

import dynamic from "next/dynamic";

const SmoothScroll         = dynamic(() => import("@/components/SmoothScroll"),        { ssr: false });
const Navbar               = dynamic(() => import("@/components/Navbar"),              { ssr: false });
const Hero                 = dynamic(() => import("@/components/Hero"),                { ssr: false });
const ServicesBlock        = dynamic(() => import("@/components/ServicesBlock"),       { ssr: false });
const CaseStudyGrid        = dynamic(() => import("@/components/CaseStudyGrid"),       { ssr: false });
const Stats                = dynamic(() => import("@/components/Stats"),               { ssr: false });
const Manifesto            = dynamic(() => import("@/components/Manifesto"),           { ssr: false });
const VelocityMarquee      = dynamic(() => import("@/components/VelocityMarquee"),     { ssr: false });
const MassiveFooter        = dynamic(() => import("@/components/MassiveFooter"),       { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />

      <main aria-label="Portfolio content">
        {/* 1 — Hero: gradient mesh + left-aligned headline + glow card */}
        <Hero />

        {/* 2 — Services: cream 2×2 card grid */}
        <ServicesBlock />

        {/* 3 — Case Studies: 5 real projects with KPI chips */}
        <CaseStudyGrid />

        {/* 4 — Stats: full electric blue + blueprint overlay */}
        <Stats />

        {/* 5 — Philosophy: numbered accordion rows */}
        <Manifesto />

        {/* 6 — Skills marquee: bold orange strip */}
        <VelocityMarquee />
      </main>

      <MassiveFooter />
    </SmoothScroll>
  );
}

