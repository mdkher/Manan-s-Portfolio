"use client";

const skills = [
  "Figma", "Product Strategy", "WCAG 2.1", "Design Systems",
  "User Research", "SparkAR", "DesignNXT", "Prototyping",
  "IA Design", "Usability Testing", "Brand Identity", "Motion Design",
  "Figma", "Product Strategy", "WCAG 2.1", "Design Systems",
  "User Research", "SparkAR", "DesignNXT", "Prototyping",
  "IA Design", "Usability Testing", "Brand Identity", "Motion Design",
];

export default function VelocityMarquee() {
  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ background: "var(--color-orange)" }}
      aria-hidden="true"
    >
      {/* Subtle grain on orange */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.06, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Row 1 — moves left */}
      <div className="flex overflow-hidden mb-3">
        <div className="marquee-track marquee-left">
          {skills.map((skill, i) => (
            <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
              <span className="text-[1.05rem] font-bold uppercase tracking-[0.18em] text-white">
                {skill}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — moves right, slightly italic */}
      <div className="flex overflow-hidden">
        <div className="marquee-track marquee-right">
          {[...skills].reverse().map((skill, i) => (
            <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
              <span
                className="text-[1.05rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {skill}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
