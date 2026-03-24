import { CaseStudy } from "../types/project";

export const PROJECTS: CaseStudy[] = [
  {
    id: "globant-design-system",
    title: "Global Design System",
    tagline: "Standardizing Experience at Scale",
    heroImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop",
    role: "Lead Product Designer",
    timeline: "2.5 Years",
    team: "13+ (4 FE, 1 QA, 8 Designers)",
    tools: ["Figma", "Storybook", "Stencil.js", "React", "Angular"],
    color: "#4F46E5",
    problem: "A fragmented ecosystem of 50+ products led to inconsistent UI, massive design debt, and recurring accessibility gaps. Teams were 'reinventing the button' in every sprint.",
    solution: "Architected a multi-framework, token-driven design system using Web Components. Established a centralized 'source of truth' that bridges the gap between Figma and Production.",
    research: {
      overview: "Conducted a cross-organizational audit revealing 14 different button styles and 60+ shades of gray. Interviewed 20+ developers to identify handoff friction points.",
      insights: [
        "Inconsistency slowed down QA by 30% due to repetitive UI bug reporting.",
        "Designers spent 40% of their time on pixel-pushing instead of UX logic.",
        "Accessibility was treated as a post-launch fix rather than a core requirement."
      ],
      findings: [
        {
          title: "Token Fragmentation",
          description: "Hardcoded hex values across products made dark mode implementation impossible.",
          type: "Pain Point",
          severity: "High"
        },
        {
          title: "Library Adoption",
          description: "Teams resisted libraries that were framework-specific (React only).",
          type: "Behavior",
          severity: "Medium"
        }
      ]
    },
    challenges: [
      "Persuading 50+ legacy product teams to migrate to a new system.",
      "Handling versioning and breaking changes across a massive library.",
      "Ensuring WCAG 2.1 AA compliance across every single component."
    ],
    architecture: {
      description: "Implemented a multi-tier token architecture (Primitive -> Semantic -> Component) using Style Dictionary. Used Stencil.js to deliver framework-agnostic Web Components.",
      stack: [
        { name: "Stencil.js", usage: "Web Component Compiler" },
        { name: "Style Dictionary", usage: "Token Management" },
        { name: "Storybook", usage: "Documentation & Testing" }
      ]
    },
    strategy: {
      kpis: [
        "40% reduction in Design/Tech debt",
        "30% faster feature handoff",
        "100% WCAG 2.1 Compliance for core components"
      ],
      roadmap: [
        "Phase 1: Atomic Foundations (Tokens, Buttons, Inputs)",
        "Phase 2: Complex Patterns (Tables, Data Viz, Navigation)",
        "Phase 3: Automated Accessibility Testing & Governance"
      ]
    },
    design: {
      system: {
        colorPalette: ["#4F46E5", "#10B981", "#EF4444", "#1F2937", "#F8FAFC"],
        typography: ["Inter", "Fira Code"]
      },
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
          caption: "Atomic level component documentation in Storybook.",
          isFullWidth: true
        }
      ]
    },
    process: [
      {
        title: "Audit & Align",
        subtitle: "The Fragmented Reality",
        description: "Mapped every UI variant across the ecosystem to create a unified component backlog.",
        duration: "3 Months"
      },
      {
        title: "Tokenization",
        subtitle: "The Semantic Shift",
        description: "Moved from hardcoded values to a semantic token system supporting dark/light/high-contrast modes.",
        duration: "4 Months"
      },
      {
        title: "Governance",
        subtitle: "Evolving the System",
        description: "Established a contribution model and versioning workflow to ensure sustainability.",
        duration: "Ongoing"
      }
    ],
    impact: {
      metrics: [
        { value: "360+", label: "Teams Adopted" },
        { value: "40%", label: "Debt Reduction" },
        { value: "30%", label: "Cycle Time Gain" }
      ],
      testimonial: {
        quote: "This design system is not just a UI kit; it's our engine for innovation. It's transformed how we build products.",
        author: "Tech Lead",
        role: "Global Design Studio"
      }
    },
    reflection: "Building a design system is 20% design and 80% communication. Adoption is the only metric that truly matters.",
    businessPerspective: {
      roi: "Saved an estimated $1.2M annually in developer hours previously lost to redundant UI work.",
      marketImpact: "Standardized the brand identity across all international sectors, increasing brand trust and recognition.",
      executiveSummary: "A strategic infrastructure play that turned design from a bottleneck into a competitive advantage for Globant."
    },
    architectPerspective: {
      stackRationale: "Chose Web Components to avoid framework lock-in. Stencil.js allowed us to output React and Angular wrappers natively.",
      technicalChallenges: ["Shadow DOM styling limitations", "Cross-framework event propagation", "Binary size optimization"],
      scalability: "Architecture supports unlimited child themes and secondary brand palettes via CSS Variables."
    },
    uxManagerPerspective: {
      teamLeadership: "Managed a cross-functional team across 3 timezones, pivoting to an Agile-Design workflow.",
      userEmpathy: "Conducted usability sessions with screen-reader users to refine our complex accessible components like Data Tables.",
      accessibilityFocus: "Implemented a 'Shift-Left' accessibility approach, identifying issues at the Figma stage through automated plugins."
    }
  },
  {
    id: "ar-filter-studio",
    title: "Globant AR Pod",
    tagline: "Defining Spatial Engagement",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    role: "AR Initiative Lead",
    timeline: "Ongoing",
    team: "3 Designers + Self-Initiated",
    tools: ["Spark AR", "Blender", "8th Wall", "Lens Studio"],
    color: "#8B5CF6",
    problem: "Traditional digital marketing was seeing diminishing returns. AR was an untapped opportunity at Globant with no structured team or frameworks.",
    solution: "Spearheaded the 'AR Pod,' a dedicated innovation unit. Developed viral AR experiences that demonstrated technical leadership in the Metaverse space.",
    research: {
      insights: [
        "Social AR has 70% higher dwell time than static ads.",
        "WebAR (8th Wall) reduces friction by removing the need for app installs.",
        "Gamification drives 3x higher brand recall."
      ],
      findings: [
        {
          title: "The Friction Barrier",
          description: "Users abandonded AR experiences that required a separate app download.",
          type: "Behavior",
          severity: "High"
        }
      ]
    },
    process: [
      {
        title: "POC",
        description: "Built three rapid prototypes (Face Filters, World Tracking, Portals)."
      },
      {
        title: "Evangelism",
        description: "Hosted 5+ internal workshops to upskill designers in 3D modeling."
      }
    ],
    impact: {
      metrics: [
        { value: "10k+", label: "Organic Views" },
        { value: "1st", label: "AR Specialized Team" },
        { value: "100%", label: "Studio Recognition" }
      ]
    },
    reflection: "Innovation isn't given; it's taken. Side projects can transform an entire organization's capability.",
    businessPerspective: {
      roi: "Captured high-value immersive marketing deals previously outsourced by the Design Studio.",
      marketImpact: "Positioned Globant as a front-runner in Emerging Tech and spatial computing.",
      executiveSummary: "Evolved a personal experiment into a revenue-generating business unit."
    },
    architectPerspective: {
      stackRationale: "Used 8th Wall for high-impact web-based AR and Spark/Lens for social reach.",
      technicalChallenges: ["Optimizing high-poly Blender models for mobile", "Real-world light estimation", "Latency in SLAM tracking"],
      scalability: "Created a reusable plugin library for Spark AR to accelerate filter development (e.g., standard UI/logic templates)."
    },
    uxManagerPerspective: {
      teamLeadership: "Built the AR Pod from zero, establishing hiring criteria and skill benchmarks for immersive designers.",
      userEmpathy: "Focused on 'Natural Interaction'—ensuring AR gestures were intuitive for non-technical users.",
      accessibilityFocus: "Designed for 'Environmental Accessibility'—considering lighting and physical space constraints of the end user."
    }
  },
  {
    id: "globant-travelnxt-glow",
    title: "TravelNXT Glow",
    tagline: "The Future of Enterprise Travel",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2000&auto=format&fit=crop",
    role: "Product Designer",
    timeline: "3 Months",
    team: "2 Designers, 5 Developers",
    tools: ["Figma", "Protopie", "React", "Cramer Motion"],
    color: "#BE185D",
    problem: "Globant's internal travel platform felt clinical and tedious. Approval bottlenecks and a high 'perceived effort' caused employee frustration and booking delays.",
    solution: "Re-imagined the platform with a 'consumer-grade' aesthetic. Focused on micro-interactions and mobile-first logic to make enterprise workflows feel effortless.",
    research: {
      insights: [
        "Managers often approved travel while commuting, making mobile responsiveness critical.",
        "Lack of visual feedback during flight searches caused users to double-click and error out.",
        "Visual hierarchy was cluttered with legacy flight data that wasn't relevant to most users."
      ]
    },
    process: [
      {
        title: "Auditing Friction",
        description: "Mapped the 'Search to Approval' journey, identifying 4 major drop-off points."
      },
      {
        title: "Glow-up Phase",
        description: "Implemented a refined UI system focused on clarity, spacing, and meaningful motion."
      }
    ],
    impact: {
      metrics: [
        { value: "20%", label: "Faster Booking" },
        { value: "65%", label: "Mobile Approvals" },
        { value: "Low", label: "Error Rate" }
      ]
    },
    reflection: "Enterprise tools don't have to be boring. In fact, they shouldn't be. 'Delight' is a functional requirement.",
    businessPerspective: {
      roi: "Reduced travel support tickets by 40%, freeing up the administrative team for more complex tasks.",
      marketImpact: "Improved internal employee NPS scores recorded via survey.",
      executiveSummary: "A UX modernization that directy improved employee productivity and platform compliance."
    },
    architectPerspective: {
      stackRationale: "Used Framer Motion for high-fidelity micro-interactions that communicate state changes clearly.",
      technicalChallenges: ["Real-time GDS data synchronization", "Handling edge-case travel policies in a simple UI", "Offline-first approval caching"],
      scalability: "Modular component approach allowed the new 'Glow' UI to be themed for different internal studio sub-brands."
    },
    uxManagerPerspective: {
      teamLeadership: "Collaborated with the Internal Systems team to align design vision with technical capability.",
      userEmpathy: "Focused on the 'Commuter Manager' persona—designing large tap targets and contextual summaries for quick approval.",
      accessibilityFocus: "Ensured high color contrast for the new 'Glow' palette (Pink/Indigo) to pass WCAG AA standards."
    }
  },
  {
    id: "globant-automobile",
    title: "Automobile in Metaverse",
    tagline: "Visualizing Trust through Digital Twins",
    heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    role: "Lead UX Researcher",
    timeline: "2 Months",
    team: "2 UX Researchers, 1 3D Artist",
    tools: ["Unity", "Blender", "Adobe Aero", "Figma"],
    color: "#0EA5E9",
    problem: "Car servicing is often a 'black box' for owners. Non-technical users feel anxious about being overcharged or misinformed about vehicle part replacements.",
    solution: "Conceptualized a 'Metaverse Garage' using Digital Twins. Users can watch a 3D visualization of their car's health and specific service actions in real-time.",
    research: {
      insights: [
        "Users felt a 'blind' trust gap during vehicle handovers.",
        "Gamified 'Health Bars' for car parts were more intuitive than technical reports.",
        "Transparency directly correlated with higher 'Upsell Acceptance' rates for necessary repairs."
      ]
    },
    process: [
      {
        title: "Persona Deep-dive",
        description: "Focused on underserved demographics who felt most excluded from technical mechanic jargon."
      },
      {
        title: "3D Visualization",
        description: "Prototyped a 'Holographic Service Receipt' where users can see parts in 3D."
      }
    ],
    impact: {
      metrics: [
        { value: "High", label: "Trust Score" },
        { value: "85", label: "NPS Score" },
        { value: "100%", label: "Transparency" }
      ]
    },
    reflection: "Technical complexity should be handled by the machine; transparency should be handled by the design.",
    businessPerspective: {
      roi: "A concept that could potentially reduce customer churn at premium service centers by 15-20%.",
      marketImpact: "Pioneered a new CX model for the automotive industry using emerging metaverse technologies.",
      executiveSummary: "An exploration into trust-based CX that leverages spatial data to humanize technical services."
    },
    architectPerspective: {
      stackRationale: "Leveraged Unity for the high-fidelity Digital Twin simulation.",
      technicalChallenges: ["Mapping real-world OBD-II sensor data to 3D animations", "Optimizing real-time rendering on web/mobile browsers", "Data security for vehicle telemetry"],
      scalability: "Designing for the future of Connected Vehicles—where the Digital Twin lives throughout the car's lifecycle."
    },
    uxManagerPerspective: {
      teamLeadership: "Facilitated co-creation workshops between mechanics and customers to bridge the information gap.",
      userEmpathy: "Maintained a strong 'Human-First' approach, ensuring the tech (Metaverse) served the user need (Trust).",
      accessibilityFocus: "Used redundant coding (Text + Icon + 3D) to communicate vehicle issues, ensuring users with different learning styles could understand."
    }
  },
  {
    id: "infosys-hiring-platform",
    title: "Infosys Hiring Platform",
    tagline: "Streamlining Enterprise Recruitment",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    role: "UX Lead",
    timeline: "1 Year",
    team: "Self-Initiated",
    tools: ["Figma", "SaaS", "Enterprise UX"],
    color: "#ff5c00",
    problem: "Infosys's internal hiring platform was outdated, causing massive friction for recruiters and candidates.",
    solution: "Independently redesigned the platform from scratch, streamlining recruitment for 15,000+ employees.",
    process: [
      { title: "Research", description: "Interviewed internal hiring managers." },
      { title: "Design", description: "Created high-fidelity prototypes in Figma." }
    ],
    impact: {
      metrics: [
        { value: "15k+", label: "Employees Served" },
        { value: "30%", label: "Faster Hiring" }
      ]
    },
    research: {
      insights: ["Recruitment bottlenecks identified in legacy system.", "Mobile-first approach preferred by hiring managers."]
    },
    reflection: "Technical skill is only half the battle; the other half is understanding the human workflow."
  },
  {
    id: "vaccin1st",
    title: "Vaccin1st Platform",
    tagline: "Public Health Tech at Scale",
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop",
    role: "System Specialist",
    timeline: "1 Year",
    team: "Global Team",
    tools: ["AngularJS", "JMeter", "Automation"],
    color: "#00c896",
    problem: "Coordinating mass vaccinations during the pandemic was an unprecedented logistical challenge.",
    solution: "Led end-to-end development of a platform enabling 150k+ vaccinations across three countries.",
    process: [
      { title: "Development", description: "Built on AngularJS with complex back-end logic." },
      { title: "Testing", description: "Load testing using JMeter for high concurrency." }
    ],
    impact: {
      metrics: [
        { value: "150k+", label: "Vaccinated" },
        { value: "3", label: "Countries" }
      ]
    },
    research: {
      insights: ["Real-time data sync was critical for multi-site coordination.", "Simplicity in UX reduced registration errors by 50%."]
    },
    reflection: "At the peak of a crisis, design must be invisible and purely functional."
  },
  {
    id: "iit-gait-recognition",
    title: "Gait Recognition System",
    tagline: "Advancing Biometric Identification",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    role: "Research Intern",
    timeline: "2019",
    team: "IIT-Gandhinagar",
    tools: ["AI/ML", "Computer Vision", "Research"],
    color: "#8b5cf6",
    problem: "Accurate human identification via gait patterns in low-resolution video.",
    solution: "Co-authored an IEEE paper on intention detection and gait recognition using deep learning.",
    process: [
      { title: "Research", description: "Studied biomechanical gait models." },
      { title: "Modeling", description: "Developed neural networks for pattern recognition." }
    ],
    impact: {
      metrics: [
        { value: "IEEE", label: "Publication" },
        { value: "Finalist", label: "Award" }
      ]
    },
    research: {
      insights: ["Temporal features played a larger role than spatial frames alone.", "CNN-LSTM architectures outperformed traditional SVM models."]
    },
    reflection: "Biometrics is a bridge between biology and mathematics."
  }
];
