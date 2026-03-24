"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface GridItemProps {
  children?: ReactNode;
  image?: string;
  caption?: string;
  className?: string;
}

export function GridItem({ children, image, caption, className = "" }: GridItemProps) {
  return (
    <div className={`relative group overflow-hidden rounded-[32px] bg-surface-card border border-border-subtle ${className}`}>
      {image ? (
        <>
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src={image}
              alt={caption || "Project visual"}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {caption && (
               <div className="absolute bottom-6 left-6 electric-pill bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {caption}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="p-10 h-full flex flex-col justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

interface BespokeGridProps {
  children: ReactNode;
  className?: string;
}

export default function BespokeGrid({ children, className = "" }: BespokeGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${className}`}>
      {children}
    </div>
  );
}
