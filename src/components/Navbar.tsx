"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverTextEffect from "./HoverTextEffect";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Work",      href: "/#work" },
  { label: "About",     href: "/about" },
  { label: "Talks",     href: "/#talks" },
];

export default function Navbar() {
  const navRef    = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [navTheme,  setNavTheme]  = useState<"dark" | "light">("dark");

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.6 }
    );

    ScrollTrigger.create({
      start: "top -80px",
      end: "max",
      onUpdate: (self) => {
        setScrolled(self.progress > 0);
        if (menuOpen) return;
        if (self.direction === 1 && self.progress > 0.04) {
          gsap.to(navRef.current, { y: -120, duration: 0.5, ease: "power3.inOut" });
        } else if (self.direction === -1) {
          gsap.to(navRef.current, { y: 0, duration: 0.5, ease: "power3.out" });
        }
      },
    });
  }, [menuOpen]);

  // Theme detection
  useEffect(() => {
    const timer = setTimeout(() => {
      const lightSections = document.querySelectorAll(".section-cream, .section-cream-2, [data-theme='light']");
      lightSections.forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 60px",
          end: "bottom 60px",
          onEnter: () => setNavTheme("light"),
          onEnterBack: () => setNavTheme("light"),
          onLeave: () => setNavTheme("dark"),
          onLeaveBack: () => setNavTheme("dark"),
        });
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileRef.current) return;
    if (menuOpen) {
      gsap.fromTo(mobileRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileRef.current, { opacity: 0, y: -20, duration: 0.3, ease: "power3.in" });
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-6 right-6 z-[9999] max-w-5xl mx-auto rounded-[18px] px-3 py-2 flex items-center justify-between opacity-0 transition-all duration-500 backdrop-blur-2xl border ${
          navTheme === "light"
            ? "bg-[rgba(255,255,255,0.72)] border-[var(--color-cream-border)]"
            : "bg-[rgba(8,8,9,0.72)] border-[var(--color-border-subtle)]"
        } ${
          scrolled
            ? navTheme === "light" 
              ? "shadow-[0_8px_48px_rgba(0,0,0,0.08)]" 
              : "shadow-[0_8px_48px_rgba(0,0,0,0.8)]"
            : "shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link 
          id="nav-logo" 
          href="/" 
          className="flex items-center gap-2.5 pl-3 group" 
          aria-label="Home"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-electric)] shadow-[0_0_8px_var(--color-electric-glow)] animate-pulse" aria-hidden="true" />
          <span className={`text-base font-black tracking-[-0.04em] transition-colors duration-500 ${navTheme === "light" ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}>
            MANAN<span className="text-[var(--color-electric)]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1" role="menubar">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative px-4 py-2.5 rounded-full group overflow-hidden transition-colors duration-500 ${
                navTheme === "light"
                  ? "text-[var(--color-text-dark-muted)] hover:bg-black/[0.04] hover:text-[var(--color-text-dark)]"
                  : "text-[var(--color-text-secondary)] hover:bg-white/[0.06] hover:text-[var(--color-text)]"
              }`}
              role="menuitem"
              data-magnetic
            >
              <span className="relative inline-flex overflow-hidden text-[10px] font-bold uppercase tracking-[0.22em]">
                <span className="flex">
                  {link.label.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]"
                      style={{ transitionDelay: `${i * 0.02}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="absolute inset-0 flex" aria-hidden="true">
                  {link.label.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0"
                      style={{ transitionDelay: `${i * 0.02}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          ))}

          <a
            href="#contact"
            className="group ml-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[var(--color-electric)] px-5 py-2.5 rounded-[14px] hover:bg-[var(--color-electric-mid)] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_var(--color-electric-glow)]"
            role="menuitem"
            data-magnetic
          >
            <HoverTextEffect text="Let's Talk" />
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-1 transition-transform stretch duration-300"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full transition-colors ${navTheme === "light" ? "hover:bg-black/[0.04]" : "hover:bg-white/[0.06]"}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${navTheme === "light" ? "bg-[var(--color-text-dark)]" : "bg-[var(--color-text)]"} ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
          <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${navTheme === "light" ? "bg-[var(--color-text-dark)]" : "bg-[var(--color-text)]"} ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
          <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${navTheme === "light" ? "bg-[var(--color-text-dark)]" : "bg-[var(--color-text)]"} ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {menuOpen && (
        <div
          ref={mobileRef}
          className="fixed inset-0 z-40 bg-[rgba(8,8,9,0.97)] backdrop-blur-2xl flex flex-col items-center justify-center gap-8 opacity-0"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Electric ambient */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(0,85,255,0.1) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <nav className="relative flex flex-col items-center gap-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-black tracking-[-0.03em] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="group mt-4 inline-flex items-center gap-2 bg-[var(--color-electric)] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.15em] shadow-[0_0_30px_var(--color-electric-glow)]"
            >
              <HoverTextEffect text="Let's Talk ↗" />
            </a>
          </nav>

          <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-bold">
            Surat, India &nbsp;&middot;&nbsp; IE Business School &rsquo;27
          </div>
        </div>
      )}
    </>
  );
}
