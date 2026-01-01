import { CaseStudy } from '../models/portfolio.models';

export const PROJECTS: CaseStudy[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    tagline: 'Revolutionizing Fintech Onboarding',
    heroImage: 'https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=2000&auto=format&fit=crop',
    role: 'Lead Product Designer',
    timeline: '3 Months',
    team: '1 PM, 3 Engineers',
    tools: ['Figma', 'Principle', 'Linear'],
    problem: 'Users were dropping off at a rate of 65% during the KYC verification process due to unclear instructions and friction.',
    solution: 'Designed a step-by-step, gamified onboarding flow with real-time feedback, reducing cognitive load and increasing completion rates.',
    research: {
      overview: 'We needed to understand why users were abandoning the process after uploading their ID. Quantitative data showed the drop-off, but qualitative research revealed the anxiety behind it.',
      insights: [
        'Users felt overwhelmed by asking for documents upfront.',
        'Lack of progress indicators caused anxiety.',
        'Mobile responsiveness was poor on older devices.'
      ],
      quote: '"I just want to open an account without feeling like I need a law degree."',
      methods: [
        { name: 'User Interviews', value: '15', icon: '🎤' },
        { name: 'Survey Responses', value: '250+', icon: '📝' },
        { name: 'Usability Tests', value: '10', icon: '🧪' },
        { name: 'Heatmaps Analyzed', value: '500+', icon: '🔥' }
      ],
      findings: [
        {
          title: 'Document Anxiety',
          description: 'Users hesitated to upload ID without knowing "why" it was needed immediately. Trust was a major barrier.',
          type: 'Pain Point',
          severity: 'High'
        },
        {
          title: 'The "Lost" Feeling',
          description: 'Without a clear progress stepper, users over-estimated the time remaining and bailed out early.',
          type: 'Behavior',
          severity: 'Medium'
        },
        {
          title: 'Gamification Opportunity',
          description: 'Users responded positively to small "success" animations during testing, suggesting a desire for positive reinforcement.',
          type: 'Opportunity',
          severity: 'Low'
        }
      ],
      assets: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
          caption: 'Affinity Mapping session categorizing user feedback into core themes.'
        }
      ]
    },
    challenges: [
      'Legacy backend API latency (avg 2.5s) restricted real-time validation.',
      'Strict legal compliance required unskippable legal disclaimers.',
      'Integrating 3rd party OCR tool without breaking the UI flow.'
    ],
    architecture: {
      description: 'We moved from a monolithic server-side rendering to a micro-frontend architecture to allow the onboarding flow to scale independently.',
      stack: [
        { name: 'React', usage: 'Component Library' },
        { name: 'GraphQL', usage: 'Data Fetching' },
        { name: 'AWS Lambda', usage: 'Serverless Functions' },
        { name: 'Storybook', usage: 'Design System Documentation' }
      ]
    },
    strategy: {
      kpis: [
        'Reduce Time-to-Value (TTV) by 50%',
        'Increase Day-1 Retention by 20%',
        'Lower Customer Support tickets related to KYC by 30%'
      ],
      roadmap: [
        'Q1: MVP Launch with basic OCR',
        'Q2: Biometric Authentication integration',
        'Q3: International market support (Multi-language)'
      ]
    },
    design: {
      system: {
        colorPalette: ['#191919', '#3B82F6', '#10B981', '#F59E0B', '#F3F4F6'],
        typography: ['Inter', 'Merriweather']
      },
      gallery: [
        { 
          type: 'image', 
          src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop', 
          caption: 'Early wireframe explorations focused on simplifying the form layout.' 
        },
        { 
          type: 'image', 
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', 
          caption: 'Final high-fidelity dashboard showing the progressive success state.',
          isFullWidth: true
        }
      ]
    },
    process: [
      {
        title: 'Definition',
        subtitle: 'Taming the Ambiguity',
        description: 'Stakeholders had conflicting visions. I facilitated workshops to align everyone on a single problem statement.',
        duration: '2 Weeks',
        chaos: 'Conflicting stakeholder visions and no clear user journey definition.',
        clarity: 'Aligned KPIs and a unified, simplistic user flow map.',
        deliverables: ['Stakeholder Interviews', 'Competitive Audit', 'User Journey Map'],
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Exploration',
        subtitle: 'Wide Net to Narrow Focus',
        description: 'We generated over 50 ideas. Through voting and feasibility checks, we narrowed it down to 3 viable concepts.',
        duration: '3 Weeks',
        chaos: '50+ divergent ideas and inconsistent visual patterns.',
        clarity: '3 distinct, viable design concepts ready for testing.',
        deliverables: ['Low-fi Wireframes', 'Concept Sketches', 'Crazy 8s'],
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Refinement',
        subtitle: 'Polishing the Diamond',
        description: 'We took the winning concept and stress-tested it against edge cases, ensuring accessibility and compliance.',
        duration: '4 Weeks',
        chaos: 'Friction in edge cases and accessibility gaps in the MVP.',
        clarity: 'A fully accessible, crash-proof prototype ready for dev.',
        deliverables: ['High-fi Prototypes', 'Usability Report', 'Design Handoff'],
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    impact: {
      metrics: [
        { value: '40%', label: 'Reduction in Drop-offs' },
        { value: '+15%', label: 'Conversion Rate' },
        { value: '4.8/5', label: 'App Store Rating' }
      ],
      testimonial: {
        quote: 'The new flow is not just better, it is a competitive advantage.',
        author: 'Sarah Jenkins',
        role: 'VP of Product'
      },
      chart: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Conversion Rate %',
            data: [12, 14, 13, 22, 28],
            color: '#10B981'
          }
        ]
      }
    },
    reflection: 'Balancing security compliance with user experience was the toughest challenge. I learned that transparency is key to trust.'
  },
  {
    id: 'neon-nexus',
    title: 'Neon Nexus',
    tagline: 'Next-Gen Cybersecurity Dashboard',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    role: 'Senior UI Designer',
    timeline: '6 Months',
    team: '2 PMs, 5 Engineers, 1 Data Scientist',
    tools: ['Figma', 'D3.js', 'After Effects'],
    problem: 'Security analysts were experiencing "alert fatigue" due to a cluttered interface that treated every threat with equal visual weight.',
    solution: 'Created a "Threat Heatmap" visualization and a dedicated triage workflow to help analysts prioritize critical issues instantly.',
    research: {
      insights: [
        'Analysts spend 4 hours a day just filtering false positives.',
        'Dark mode is essential for 24/7 SOC environments.',
        'Critical alerts were often missed in list views.'
      ]
    },
    process: [
      {
        title: 'Shadowing',
        description: 'Spent 3 days in the SOC (Security Operations Center) observing analysts.'
      },
      {
        title: 'Prototyping',
        description: 'Built high-fidelity interactive prototypes to test the new alert triage gestures.'
      }
    ],
    impact: {
      metrics: [
        { value: '-60%', label: 'Response Time' },
        { value: '95%', label: 'Analyst Satisfaction' }
      ]
    },
    reflection: 'Designing for experts requires deep domain immersion. Standard patterns often do not apply to high-stakes control rooms.'
  },
  {
    id: 'aero-systems',
    title: 'Aero Systems',
    tagline: 'Modernizing Flight Logistics',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    role: 'UX Designer',
    timeline: '4 Months',
    team: 'Start-up Core Team',
    tools: ['Figma', 'Webflow'],
    problem: 'Pilots and ground crew relied on disjointed paper trails and legacy software for flight planning.',
    solution: 'A unified iPad-first application that integrates weather, cargo, and crew schedules in one offline-capable interface.',
    research: {
      insights: [
        'Connectivity is intermittent on the tarmac.',
        'Text legibility is critical in variable lighting conditions.'
      ]
    },
    process: [
      {
        title: 'Field Research',
        description: 'Interviewed pilots at the hanger to understand their pre-flight checklist flow.'
      }
    ],
    impact: {
      metrics: [
        { value: '0', label: 'Paper Forms Used' },
        { value: '2x', label: 'Faster Pre-flight' }
      ]
    },
    reflection: 'Offline-first thinking must happen at the design stage, not just engineering.'
  },
   {
    id: 'quantum',
    title: 'Quantum',
    tagline: 'AI Research Visualization',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    role: 'Visual Designer',
    timeline: '2 Months',
    team: 'Research Team',
    tools: ['Blender', 'Figma'],
    problem: 'Complex neural network architectures were difficult to explain to stakeholders and non-technical investors.',
    solution: 'A series of 3D interactive visualizations and a design system for representing AI nodes and data flows.',
    research: {
      insights: [
        'Investors need simple metaphors for complex tech.',
        'Static 2D diagrams fail to show the depth of the network.'
      ]
    },
    process: [
      {
        title: '3D Modeling',
        description: 'Used Blender to create abstract representations of neural layers.'
      }
    ],
    impact: {
      metrics: [
        { value: '$2M', label: 'Funding Secured' }
      ]
    },
    reflection: 'Visual design is a powerful tool for communication, effectively acting as a translator for complex ideas.'
  },
  {
    id: 'velocite',
    title: 'Velocite',
    tagline: 'Next-Gen Automotive Interface',
    heroImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop',
    role: 'Product Designer',
    timeline: '5 Months',
    team: 'Automotive OEM',
    tools: ['Protopie', 'Figma'],
    problem: 'In-car infotainment systems are often distracting and buried under deep menus.',
    solution: 'A voice-first, gesture-supported driver interface that surfaces context-aware controls (e.g., parking mode when stopped).',
    research: {
      insights: [
        'Drivers glance at screens for less than 2 seconds.',
        'Physical feedback is missed in touch-only screens.'
      ]
    },
    process: [
       {
        title: 'Simulator Testing',
        description: 'Tested prototypes in a driving simulator to measure eye-off-road time.'
      }
    ],
    impact: {
      metrics: [
        { value: '<1s', label: 'Task Time' },
        { value: '100%', label: 'Safety Score' }
      ]
    },
    reflection: 'Safety is the ultimate constraint in automotive design. Minimalism is a safety feature.'
  },
  {
    id: 'echo',
    title: 'Echo',
    tagline: 'Social Audio Experience',
    heroImage: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop',
    role: 'Founder & Designer',
    timeline: 'Ongoing',
    team: 'Solo',
    tools: ['SwiftUI', 'Figma'],
    problem: 'Existing audio apps feel isolating or purely transactional (podcasts/music).',
    solution: 'A spatial audio social network where users drift in and out of conversations based on proximity in a virtual room.',
    research: {
      insights: [
        'Serendipity is missing in digital social spaces.'
      ]
    },
    process: [
      {
        title: 'MVP',
        description: 'Launched a TestFlight beta to 50 users.'
      }
    ],
    impact: {
      metrics: [
        { value: '1k+', label: 'Beta Waitlist' }
      ]
    },
    reflection: 'Building a social product requires designing for critical mass and empty states.'
  },
  {
    id: 'zenith',
    title: 'Zenith',
    tagline: 'Holistic Wellness Companion',
    heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    role: 'UX Researcher',
    timeline: '3 Months',
    team: 'Agency',
    tools: ['Dovetail', 'Figma'],
    problem: 'Wellness apps often feel like chores rather than supportive companions.',
    solution: 'A wellness app based on "Micro-habits" and distinct day/night modes to align with circadian rhythms.',
    research: {
      insights: [
        'Users abandon apps that demand too much time.',
        'Blue light at night disrupts sleep, counteracting the app purpose.'
      ]
    },
    process: [
      {
        title: 'Diary Studies',
        description: 'Participants tracked their mood and energy for 2 weeks.'
      }
    ],
    impact: {
      metrics: [
        { value: '85%', label: 'Retention Day 30' }
      ]
    },
    reflection: 'Small interactions build big habits. The UI must be friction-free.'
  }
];
