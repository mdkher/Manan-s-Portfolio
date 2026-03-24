"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

/**
 * Global Cinematic "Vibrant Kinetic Ripple" Page Transition.
 * FULL SCREEN WOW EFFECT: Origin-based exploding color ripples + Massive Kinetic Typography.
 * 100% robust implementation using scale transforms instead of clip-path.
 */
export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Curtain Wrappers (for the slide up reveal)
  const curtainBlueRef = useRef<HTMLDivElement>(null);
  const curtainPinkRef = useRef<HTMLDivElement>(null);
  const curtainBlackRef = useRef<HTMLDivElement>(null);

  // Expanding Circles (for the cover ripple)
  const circleBlueRef = useRef<HTMLDivElement>(null);
  const circlePinkRef = useRef<HTMLDivElement>(null);
  const circleBlackRef = useRef<HTMLDivElement>(null);

  // Massive Typography Container
  const textContainerRef = useRef<HTMLDivElement>(null);
  const t1Ref = useRef<HTMLHeadingElement>(null);
  const t2Ref = useRef<HTMLHeadingElement>(null);
  const t3Ref = useRef<HTMLHeadingElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const isNavigatingPathRef = useRef<string | null>(null);
  const isHashNavigatingRef = useRef<boolean>(false);
  const isFirstRender = useRef(true);
  const clickPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    clickPosRef.current = { 
      x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, 
      y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 
    };
  }, []);

  const runTransition = (x: number, y: number, isReveal = false) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const curtainBlue = curtainBlueRef.current;
    const curtainPink = curtainPinkRef.current;
    const curtainBlack = curtainBlackRef.current;

    const circleBlue = circleBlueRef.current;
    const circlePink = circlePinkRef.current;
    const circleBlack = circleBlackRef.current;

    const txtContainer = textContainerRef.current;
    
    if (!curtainBlue || !curtainPink || !curtainBlack || !circleBlue || !circlePink || !circleBlack || !txtContainer) return;

    // Calculate maximum radius required to cover the screen from the click point
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxRadius = Math.max(w, h) * 1.5;
    
    // START WITH A 100px CIRCLE TO PREVENT BROWSER GPU COMPOSITING ERRORS ON HUGE DIVS
    const baseSize = 100;
    const requiredScale = (maxRadius * 2) / baseSize;

    if (isReveal) {
      // REVEAL: Screen is currently fully covered. Typography is fully visible.
      gsap.killTweensOf([curtainBlue, curtainPink, curtainBlack, circleBlue, circlePink, circleBlack, t1Ref.current, t2Ref.current, t3Ref.current, txtContainer]);

      // Ensure full coverage before starting reveal
      gsap.set(overlay, { visibility: "visible" });
      
      // Circles remain fully expanded
      gsap.set([circleBlue, circlePink, circleBlack], { scale: requiredScale });
      // Curtains are covering the screen
      gsap.set([curtainBlue, curtainPink, curtainBlack], { y: "0%" });
      
      gsap.set([t1Ref.current, t2Ref.current, t3Ref.current], { y: "0%", opacity: 1, skewY: 0 });
      gsap.set(txtContainer, { opacity: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { visibility: "hidden" });
          isNavigatingPathRef.current = null;
          isHashNavigatingRef.current = false;
        }
      });

      // 1. Massive typography violently flies UP and OUT
      tl.to([t1Ref.current, t2Ref.current, t3Ref.current], {
        y: "-150%",
        skewY: 5,
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
        stagger: 0.05
      }, 0);

      // 2. The Black curtain slides UP violently
      tl.to(curtainBlack, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut"
      }, 0.2)
      // 3. The Pink curtain slides UP slightly trailing
      .to(curtainPink, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut"
      }, 0.25)
      // 4. The Blue curtain slides UP revealing the new page
      .to(curtainBlue, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut"
      }, 0.3);

    } else {
      // COVER: Screen is visible. We shoot out circular ripples.
      gsap.killTweensOf([curtainBlue, curtainPink, curtainBlack, circleBlue, circlePink, circleBlack, t1Ref.current, t2Ref.current, t3Ref.current, txtContainer]);

      gsap.set(overlay, { visibility: "visible" });
      
      // Reset curtains to fully cover viewport location
      gsap.set([curtainBlue, curtainPink, curtainBlack], { y: "0%" });

      // Reset circles to the exact click coordinate, perfectly rounded, small scale
      gsap.set([circleBlue, circlePink, circleBlack], { 
        x, 
        y, 
        xPercent: -50, 
        yPercent: -50, 
        width: baseSize, 
        height: baseSize, 
        borderRadius: "50%", 
        scale: 0 
      });
      
      // Hide text initially, shifted down
      gsap.set(txtContainer, { opacity: 1 });
      gsap.set([t1Ref.current, t2Ref.current, t3Ref.current], { y: "150%", opacity: 0, skewY: 10 });

      const tl = gsap.timeline({
        onComplete: () => {
          if (isNavigatingPathRef.current) {
            router.push(isNavigatingPathRef.current);
            if (isHashNavigatingRef.current) {
              setTimeout(() => {
                runTransition(clickPosRef.current.x, clickPosRef.current.y, true);
              }, 100);
            }
          }
        }
      });

      // 1. Expand the ripples fast from the click so the user sees them clearly
      tl.to(circleBlue, {
        scale: requiredScale,
        duration: 0.7,
        ease: "power3.inOut"
      }, 0);

      tl.to(circlePink, {
        scale: requiredScale,
        duration: 0.7,
        ease: "power3.inOut"
      }, 0.1);

      tl.to(circleBlack, {
        scale: requiredScale,
        duration: 0.7,
        ease: "power3.inOut"
      }, 0.2);

      // 2. SMASH! Massive typography flies into the black screen once it's mostly full
      tl.to([t1Ref.current, t2Ref.current, t3Ref.current], {
        y: "0%",
        skewY: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        stagger: 0.05
      }, 0.45);
    }
  };

  // --- Link Interceptor ---
  useEffect(() => {
    if (!mounted) return;

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

      if (
        isInternal &&
        target.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        const urlStr = href.startsWith("#") ? window.location.pathname + href : href;
        const url = new URL(urlStr, window.location.origin);
        
        const isHashLink = url.hash.length > 0 && url.pathname === window.location.pathname;

        if (url.pathname !== window.location.pathname || isHashLink) {
          // INTERCEPT NATIVE NEXT.JS ROUTING
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          clickPosRef.current = { x: e.clientX, y: e.clientY };
          isNavigatingPathRef.current = href;
          isHashNavigatingRef.current = isHashLink;
          
          runTransition(e.clientX, e.clientY, false);
        }
      }
    };

    // Attach to WINDOW in CAPTURE phase to brutally bypass Next.js event delegation
    window.addEventListener("click", handleLinkClick, { capture: true });
    return () => window.removeEventListener("click", handleLinkClick, { capture: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, router]);

  // --- Pathname Change Handler (Reveal) ---
  useEffect(() => {
    if (!mounted) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    runTransition(clickPosRef.current.x, clickPosRef.current.y, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{ visibility: "hidden", zIndex: 999999 }}
    >
      {/* Ripple 1: Electric Blue */}
      <div ref={curtainBlueRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <div ref={circleBlueRef} className="absolute bg-electric rounded-full" />
      </div>

      {/* Ripple 2: Neon Pink (Brand secondary) */}
      <div ref={curtainPinkRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <div ref={circlePinkRef} className="absolute bg-rose rounded-full" />
      </div>

      {/* Ripple 3: Deep Black Canvas */}
      <div ref={curtainBlackRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <div ref={circleBlackRef} className="absolute bg-[#050508] rounded-full" />
        
        {/* Massive Kinetic Typography Container */}
        <div 
          ref={textContainerRef}
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center gap-2 transform -rotate-3 scale-[1.1] md:scale-[1.5]">
            
            <div className="overflow-hidden p-2">
              <h2 ref={t1Ref} className="text-[12vw] leading-none font-black tracking-tighter uppercase text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
                BRAND STRATEGY
              </h2>
            </div>
            
            <div className="overflow-hidden p-2 relative z-10 w-full flex justify-center">
              <h2 ref={t2Ref} className="text-[16vw] leading-[0.8] font-black tracking-[-0.05em] uppercase text-electric drop-shadow-[0_0_80px_rgba(59,91,255,0.6)]">
                MANAN.
              </h2>
            </div>
            
            <div className="overflow-hidden p-2">
              <h2 ref={t3Ref} className="text-[12vw] leading-none font-black tracking-tighter uppercase text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
                PRODUCT DESIGN
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

