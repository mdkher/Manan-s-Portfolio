"use client";

import Link from "next/link";
import HoverTextEffect from "./HoverTextEffect";

const navLinks = [
  { label: "Work",  href: "#work" },
  { label: "About", href: "#about" },
  { label: "Talks", href: "#talks" },
  { label: "CV",    href: "/cv.pdf", external: true },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manan-kher/",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/manankher",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/manankher",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
];

export default function MassiveFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--color-bg-deep)" }}
      aria-label="Site footer"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/3 w-[60vw] h-[50vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,91,255,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Main CTA ── */}
        <div className="pt-28 pb-20 border-b" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-6">
            Let&apos;s connect
          </p>

          {/* Massive headline */}
          <h2 className="font-black tracking-[-0.05em] leading-[0.88] mb-10" aria-label="Let's talk">
            <div className="text-[clamp(5rem,15vw,14rem)] text-[var(--color-text)]">
              Let&apos;s
            </div>
            <div className="text-[clamp(5rem,15vw,14rem)] flex items-baseline">
              <span className="text-[var(--color-text)]">talk</span>
              <span style={{ color: "var(--color-electric)" }}>.</span>
            </div>
          </h2>

          {/* Social links */}
          <div className="flex items-center gap-4 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 hover:border-[var(--color-electric)] hover:text-[var(--color-electric)] hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                aria-label={s.label}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}

            <a
              href="mailto:manan@manan.design"
              className="group flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:scale-[1.04] ml-auto"
              style={{
                background: "var(--color-electric)",
                boxShadow: "0 0 28px var(--color-electric-glow)"
              }}
            >
              <HoverTextEffect text="Say Hello" />
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" className="group-hover:translate-x-1 transition-transform stretch duration-300">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo + copyright */}
          <div className="flex items-center gap-4">
            <span className="font-black text-lg tracking-[-0.04em] text-[var(--color-text)]">
              MANAN<span style={{ color: "var(--color-electric)" }}>.</span>
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              © 2025 Manan Kher · Built with ♥ in Madrid
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* Email */}
              <li>
                <a
                  href="mailto:manan@manan.design"
                  className="text-xs font-medium hover:text-[var(--color-electric-mid)] transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  manan@manan.design
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
