"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LineRevealProps {
  children: ReactNode;
  /** "lines" splits by line, "words" by word, "chars" by character */
  splitBy?: "lines" | "words" | "chars";
  /** tag rendered as the outer wrapper */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  /** Stagger between each item in seconds */
  stagger?: number;
  /** GSAP easing string */
  ease?: string;
  /** ScrollTrigger start string */
  triggerStart?: string;
  /** Extra delay in seconds before the animation begins */
  delay?: number;
}

/**
 * Lando-style clip-path line reveal.
 *
 * Each line/word/char is wrapped in an overflow-hidden clip div.
 * On scroll enter, the inner element translates from yPercent 110 → 0,
 * revealing each piece upward through the clip mask.
 *
 * This is the SIGNATURE effect used on every heading on landonorris.com.
 */
export default function LineReveal({
  children,
  splitBy = "lines",
  as: Tag = "div",
  className = "",
  style,
  stagger = 0.1,
  ease = "power3.out",
  triggerStart = "top 85%",
  delay = 0,
}: LineRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const originalHTML = el.innerHTML;

    // --- 1. Split the text into tokens ---
    const splitText = (node: Element): { wrappers: HTMLElement[]; originals: string[] } => {
      const text = node.innerHTML;
      const wrappers: HTMLElement[] = [];
      const originals: string[] = [];

      if (splitBy === "lines") {
        // Force a temp render to measure lines
        const range = document.createRange();
        // Regex that matches: 1. HTML tags, 2. Non-whitespace/non-tag chunks, 3. Whitespace chunks
        const tokens = text.match(/(<[^>]*>|[^<>\s]+|\s+)/g) || [];
        node.innerHTML = tokens
          .map((t) => {
            if (t.startsWith("<") && t.endsWith(">")) return t; // Return tag as is
            if (t.trim()) {
              return `<span class="lr-word" style="display:inline-block;white-space:nowrap">${t}</span>`;
            }
            return t;
          })
          .join("");

        const wordEls = Array.from(node.querySelectorAll<HTMLElement>(".lr-word"));
        // Group words by their approximate Y position (line grouping)
        const lines: HTMLElement[][] = [];
        let lastTop = -1;
        wordEls.forEach((w) => {
          const top = Math.round(w.getBoundingClientRect().top);
          if (top !== lastTop) { lines.push([]); lastTop = top; }
          lines[lines.length - 1].push(w);
        });

        // Wrap each line group in a clip div
        node.innerHTML = "";
        lines.forEach((group) => {
          const clipDiv = document.createElement("div");
          clipDiv.style.cssText = "overflow:hidden; display:block; padding: 0.15em; margin: -0.15em;";
          const inner = document.createElement("div");
          inner.className = "lr-inner";
          group.forEach((w, i) => {
            inner.appendChild(w);
            if (i < group.length - 1) inner.appendChild(document.createTextNode(" "));
          });
          clipDiv.appendChild(inner);
          node.appendChild(clipDiv);
          wrappers.push(inner);
        });

        range.detach();
        return { wrappers, originals };
      }

      if (splitBy === "words") {
        const tokens = text.match(/(<[^>]*>|[^<>\s]+|\s+)/g) || [];
        node.innerHTML = tokens
          .map((t) => {
            if (t.startsWith("<") && t.endsWith(">")) return t;
            if (t.trim()) {
              return `<span class="lr-clip" style="display:inline-block;overflow:hidden;vertical-align:bottom;padding:0.15em;margin:-0.15em"><span class="lr-inner" style="display:inline-block">${t}</span></span>`;
            }
            return t;
          })
          .join("");
        const inners = Array.from(node.querySelectorAll<HTMLElement>(".lr-inner"));
        return { wrappers: inners, originals };
      }

      // chars
      const tokens = text.match(/(<[^>]*>|[^<>\s]|\s+)/g) || [];
      node.innerHTML = tokens
        .map((t) => {
          if (t.startsWith("<") && t.endsWith(">")) return t;
          if (t === " ") return "&nbsp;";
          return `<span class="lr-clip" style="display:inline-block;overflow:hidden;vertical-align:bottom;padding:0.15em;margin:-0.15em"><span class="lr-inner" style="display:inline-block">${t}</span></span>`;
        })
        .join("");
      const inners = Array.from(node.querySelectorAll<HTMLElement>(".lr-inner"));
      return { wrappers: inners, originals };
    };

    const { wrappers } = splitText(el);

    // --- 2. Set initial state ---
    gsap.set(wrappers, { yPercent: 130 });

    // --- 3. Animate in on scroll ---
    const ctx = gsap.context(() => {
      gsap.to(wrappers, {
        yPercent: 0,
        duration: 1,
        stagger,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          once: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      el.innerHTML = originalHTML;
    };
  }, [splitBy, stagger, ease, triggerStart, delay]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={containerRef as any} className={className} style={style}>
      {children}
    </Tag>
  );
}
