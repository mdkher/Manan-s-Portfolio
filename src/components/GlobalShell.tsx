"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";

const PageTransition = dynamic(() => import("@/components/PageTransition"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });

/**
 * GlobalShell lives in the root layout (persists across ALL page navigations).
 * Owns: one-time preloader, page transition curtain, and magnetic cursor.
 */
export default function GlobalShell({ children }: { children: React.ReactNode }) {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      {/* ── Dynamic Blueprint Background ── */}
      <div className="global-blueprint" aria-hidden="true" />

      {/* Preloader is rendered instantly on server and client to prevent any layout flash */}
      {!preloaderDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Global magnetic cursor */}
      <MagneticCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />
      <div className="global-noise" aria-hidden="true" />

      {/* Global cinematic page transition curtain wipe */}
      <PageTransition />

      {/* Page content renders fundamentally behind the preloader wrapper */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}

