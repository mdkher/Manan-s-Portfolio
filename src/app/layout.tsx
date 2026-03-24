import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import GlobalShell from "@/components/GlobalShell";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manan Kher — Brand Strategist & Product Thinker",
  description:
    "7+ years designing scalable systems, AR experiences, and enterprise platforms for Globant & Infosys. Transitioning to Product Management · IE Business School MBA '27.",
  keywords: [
    "Product Designer", "Brand Strategist", "UX Design", "Design Systems",
    "Manan Kher", "Globant", "Infosys", "AR Design", "WCAG Accessibility",
  ],
  authors: [{ name: "Manan Kher" }],
  creator: "Manan Kher",
  openGraph: {
    title: "Manan Kher — Brand Strategist & Product Thinker",
    description:
      "7+ years designing scalable systems, AR experiences, and enterprise platforms for Globant & Infosys.",
    type: "website",
    locale: "en_US",
    siteName: "Manan Kher Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Kher — Brand Strategist & Product Thinker",
    description:
      "7+ years designing scalable systems for Globant & Infosys. IE MBA '27.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-[family-name:var(--font-outfit)] antialiased"
        suppressHydrationWarning
      >
        <div className="grain-overlay" aria-hidden="true" />

        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div id="main-content">
          <GlobalShell>{children}</GlobalShell>
        </div>
      </body>
    </html>
  );
}
