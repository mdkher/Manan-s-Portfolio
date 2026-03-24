export interface ProjectMetrics {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface ProcessStep {
  title: string;
  subtitle?: string;
  description: string;
  duration?: string;
  image?: string;
  chaos?: string;
  clarity?: string;
  deliverables?: string[];
}

export interface TechStackDetail {
  name: string;
  icon?: string;
  usage: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color: string;
  }[];
}

export interface DesignSystem {
  colorPalette: string[];
  typography: string[];
}

export interface RichMedia {
  type: 'video' | 'image';
  src: string;
  caption?: string;
  isFullWidth?: boolean;
}

export interface ResearchMethod {
  name: string;
  value: string;
  icon?: string;
}

export type InsightType = 'Pain Point' | 'Opportunity' | 'Behavior';

export interface ResearchFinding {
  title: string;
  description: string;
  type: InsightType;
  severity?: 'High' | 'Medium' | 'Low';
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  problem: string;
  solution: string;
  research: {
    overview?: string;
    insights: string[];
    quote?: string;
    methods?: ResearchMethod[];
    findings?: ResearchFinding[];
    assets?: RichMedia[];
  };
  challenges?: string[];
  architecture?: {
    diagram?: string;
    description: string;
    stack: TechStackDetail[];
  };
  strategy?: {
    kpis: string[];
    roadmap: string[];
  };
  design?: {
    system: DesignSystem;
    gallery: RichMedia[];
  };
  process: ProcessStep[];
  impact: {
    metrics: ProjectMetrics[];
    testimonial?: Testimonial;
    chart?: ChartData;
  };
  reflection: string;
  color?: string;
  year?: string;
  // CEO / Business Perspective
  businessPerspective?: {
    roi: string;
    marketImpact: string;
    executiveSummary: string;
  };
  // Tech Architect Perspective
  architectPerspective?: {
    stackRationale: string;
    technicalChallenges: string[];
    scalability: string;
  };
  // UX Manager Perspective
  uxManagerPerspective?: {
    teamLeadership: string;
    userEmpathy: string;
    accessibilityFocus: string;
  };
}
