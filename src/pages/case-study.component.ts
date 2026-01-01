import { Component, ChangeDetectionStrategy, inject, signal, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, PLATFORM_ID, Inject, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FadeInDirective } from '../directives/fade-in.directive';
import { PROJECTS } from '../data/portfolio-data';
import { CaseStudy } from '../models/portfolio.models';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink, FadeInDirective],
  template: `
    <div *ngIf="project() as p" class="bg-white min-h-screen">
      <!-- Sticky Progress/Nav -->
      <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
           [class.shadow-sm]="isScrolled">
         <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a routerLink="/work" class="text-sm font-bold uppercase tracking-widest text-[#191919] hover:text-blue-600 transition-colors">
               ← Back to Work
            </a>
            <div class="text-sm font-bold text-[#191919] hidden md:block">{{ p.title }}</div>
            <a [href]="'mailto:manan@example.com?subject=Chat about ' + p.title" class="bg-[#191919] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">
               Hired Me
            </a>
         </div>
         <!-- Scroll Progress Bar -->
         <div class="h-0.5 bg-gray-100 w-full absolute bottom-0">
            <div class="h-full bg-blue-600 transition-all duration-100" [style.width.%]="scrollProgress"></div>
         </div>
      </nav>

      <!-- Hero Section -->
      <header class="pt-32 pb-20 px-6">
         <div class="max-w-7xl mx-auto">
            <h1 class="text-5xl md:text-7xl font-bold text-[#191919] mb-4 tracking-tight" appFadeIn>{{ p.title }}</h1>
            <p class="text-xl md:text-2xl text-slate-500 max-w-2xl font-light" appFadeIn style="animation-delay: 100ms">{{ p.tagline }}</p>
         </div>
         
         <div class="mt-16 w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-[2.5rem]" appFadeIn style="animation-delay: 200ms">
            <img [src]="p.heroImage" class="w-full h-full object-cover" [alt]="p.title">
         </div>
      </header>

      <!-- At a Glance -->
      <section class="py-12 px-6 border-b border-gray-100">
         <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
               <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Role</div>
               <div class="text-slate-900 font-medium">{{ p.role }}</div>
            </div>
            <div>
               <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Timeline</div>
               <div class="text-slate-900 font-medium">{{ p.timeline }}</div>
            </div>
            <div>
               <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Team</div>
               <div class="text-slate-900 font-medium">{{ p.team }}</div>
            </div>
             <div>
               <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Tools</div>
               <div class="flex flex-wrap gap-2">
                 @for (tool of p.tools; track tool) {
                    <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-slate-700">{{ tool }}</span>
                 }
               </div>
            </div>
         </div>
      </section>

      <!-- Context (Problem & Solution) -->
      <section class="py-24 px-6 bg-[#F9F5F2]">
         <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div appFadeIn>
               <h2 class="text-3xl font-bold mb-6 text-[#191919]">The Problem</h2>
               <p class="text-lg text-slate-700 leading-relaxed">{{ p.problem }}</p>
               
               <div *ngIf="p.challenges" class="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                  <div class="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Constraints & Challenges</div>
                  <ul class="space-y-3">
                     @for (challenge of p.challenges; track challenge) {
                        <li class="flex gap-3 text-sm text-slate-600 font-medium">
                           <span class="text-orange-400">⚠️</span>
                           {{ challenge }}
                        </li>
                     }
                  </ul>
               </div>

            </div>
            <div appFadeIn style="animation-delay: 200ms">
               <h2 class="text-3xl font-bold mb-6 text-[#191919]">The Solution</h2>
               <p class="text-lg text-slate-700 leading-relaxed">{{ p.solution }}</p>
               
               <div *ngIf="p.strategy" class="mt-8">
                  <div class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Strategic Goals</div>
                   <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <div *ngFor="let kpi of p.strategy.kpis" class="flex items-center gap-2 mb-2 last:mb-0">
                         <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                         <span class="text-sm font-semibold text-blue-900">{{ kpi }}</span>
                      </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

       <!-- Architecture (CTO View) -->
      <section *ngIf="p.architecture" class="py-24 px-6 bg-[#191919] text-white">
          <div class="max-w-5xl mx-auto">
             <div class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">Technical Architecture</div>
             <div class="grid md:grid-cols-2 gap-16 items-start">
                <div appFadeIn>
                   <h2 class="text-3xl font-bold mb-6">Built for Scale</h2>
                   <p class="text-lg text-gray-300 leading-relaxed mb-8">{{ p.architecture.description }}</p>
                   
                   <div class="grid grid-cols-2 gap-4">
                      @for (item of p.architecture.stack; track item.name) {
                         <div class="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div class="font-bold text-white">{{ item.name }}</div>
                            <div class="text-xs text-gray-400 mt-1">{{ item.usage }}</div>
                         </div>
                      }
                   </div>
                </div>
                
                <div class="relative bg-white/5 p-8 rounded-3xl border border-white/10 aspect-video flex items-center justify-center overflow-hidden" appFadeIn>
                   <!-- Abstract Code Pattern -->
                   <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
                   <div class="text-center">
                      <div class="text-6xl mb-4">⚙️</div>
                      <div class="text-sm font-mono text-gray-400">Micro-Frontend Architecture</div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      <!-- Design System (Designer View) -->
      <section *ngIf="p.design" class="py-32 px-6 bg-white overflow-hidden">
         <div class="max-w-7xl mx-auto">
             
             <!-- Section Header -->
             <div class="flex items-end justify-between mb-24 border-b border-gray-100 pb-8" appFadeIn>
                <h2 class="text-4xl md:text-6xl font-bold text-[#191919] tracking-tighter">Visual Language</h2>
                <div class="hidden md:block text-right">
                   <div class="text-xs font-bold uppercase tracking-widest text-slate-400">System V1.0</div>
                </div>
             </div>

             <!-- Typography Showcase -->
             <div class="grid lg:grid-cols-2 gap-20 mb-32">
                @for (font of p.design.system.typography; track font) {
                   <div class="group" appFadeIn>
                      <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Typeface 0{{ $index + 1 }}</div>
                      <!-- Large Specimen -->
                      <div class="text-[8rem] leading-none font-bold text-[#191919] -ml-2 mb-4 transition-transform duration-700 group-hover:translate-x-4" [style.font-family]="font">Aa</div>
                      <div class="text-3xl font-medium mb-2 border-l-4 border-[#191919] pl-4" [style.font-family]="font">{{ font }}</div>
                      <p class="text-slate-500 pl-5">Primary Headers & Display</p>
                   </div>
                }
             </div>

             <!-- Color Palette Accordion -->
             <div class="mb-32" appFadeIn>
                <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Color Palette</div>
                <div class="flex h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-sm">
                   @for (color of p.design.system.colorPalette; track color) {
                      <div class="flex-1 h-full relative group transition-[flex] duration-500 ease-out hover:flex-[2] cursor-pointer border-r border-white/10 last:border-0" [style.background-color]="color">
                         <!-- Hex Code -->
                         <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <div class="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">{{ color }}</div>
                         </div>
                      </div>
                   }
                </div>
             </div>
             
             <!-- Gallery -->
             <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                @for (media of p.design.gallery; track media.src) {
                   <div [class.md:col-span-2]="media.isFullWidth" class="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500" appFadeIn>
                      <img [src]="media.src" class="w-full h-auto transition-transform duration-700 group-hover:scale-105" [alt]="media.caption">
                      <div *ngIf="media.caption" class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <p class="text-sm font-medium italic">{{ media.caption }}</p>
                      </div>
                   </div>
                }
             </div>
         </div>
      </section>

      <!-- Research -->
      <section class="py-24 px-6 bg-[#F9F5F2]">
         <div class="max-w-5xl mx-auto">
            <div class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">Discovery & Research</div>
            <h2 class="text-4xl font-bold mb-12 text-[#191919]" appFadeIn>Understanding the <span class="font-serif italic font-light">Why</span></h2>
            
            <p *ngIf="p.research.overview" class="text-xl text-slate-700 leading-relaxed max-w-3xl mb-16" appFadeIn>{{ p.research.overview }}</p>

            <!-- Methods Stats -->
            <div *ngIf="p.research.methods" class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
               @for (method of p.research.methods; track method.name) {
                  <div class="text-center" appFadeIn>
                     <div class="text-4xl mb-2">{{ method.icon }}</div>
                     <div class="text-3xl font-bold text-[#191919] mb-1">{{ method.value }}</div>
                     <div class="text-xs font-bold uppercase tracking-widest text-slate-400">{{ method.name }}</div>
                  </div>
               }
            </div>

            <!-- Key Findings & Insights -->
            <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
               <div class="space-y-6" appFadeIn>
                  <h3 class="text-2xl font-bold text-[#191919] mb-8">Key Findings</h3>
                  
                  @if (p.research.findings) {
                      @for (finding of p.research.findings; track finding.title) {
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                           <div class="flex justify-between items-start mb-2">
                              <span class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest"
                                 [class.bg-red-100]="finding.type === 'Pain Point'"
                                 [class.text-red-600]="finding.type === 'Pain Point'"
                                 [class.bg-green-100]="finding.type === 'Opportunity'"
                                 [class.text-green-600]="finding.type === 'Opportunity'"
                                 [class.bg-blue-100]="finding.type === 'Behavior'"
                                 [class.text-blue-600]="finding.type === 'Behavior'">
                                 {{ finding.type }}
                              </span>
                              <span *ngIf="finding.severity" class="text-xs font-medium text-slate-400">{{ finding.severity }} Impact</span>
                           </div>
                           <h4 class="font-bold text-[#191919] mb-1">{{ finding.title }}</h4>
                           <p class="text-sm text-slate-600 leading-relaxed">{{ finding.description }}</p>
                        </div>
                      }
                  } @else {
                      <!-- Fallback for legacy data -->
                       <div class="bg-white p-10 rounded-3xl">
                          <ul class="space-y-4">
                             @for (insight of p.research.insights; track insight) {
                                <li class="flex gap-4 items-start">
                                   <div class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                   <p class="text-slate-700 leading-relaxed">{{ insight }}</p>
                                </li>
                             }
                          </ul>
                       </div>
                  }
               </div>
               
               <div class="space-y-8" appFadeIn style="animation-delay: 200ms">
                   <div *ngIf="p.research.quote" class="text-center md:text-left">
                       <blockquote class="text-3xl font-serif italic text-slate-800 leading-normal mb-6">
                          {{ p.research.quote }}
                       </blockquote>
                    </div>
                    
                    <!-- Research Assets (e.g. Affinity Map) -->
                    <div *ngIf="p.research.assets">
                       @for (asset of p.research.assets; track asset.src) {
                          <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                             <img [src]="asset.src" class="w-full h-auto" [alt]="asset.caption">
                             <div *ngIf="asset.caption" class="bg-white p-3 text-xs text-center text-slate-500 font-medium border-t border-slate-50">
                                {{ asset.caption }}
                             </div>
                          </div>
                       }
                    </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Process (Horizontal Scroll) -->
      <section class="relative w-full" #processContainer [style.height.px]="processSectionHeight">
         <!-- Fixed/Sticky Wrapper -->
         <div class="h-screen w-full overflow-hidden bg-white flex flex-col"
              [class.fixed]="isFixed"
              [class.top-0]="isFixed"
              [class.left-0]="isFixed"
              [class.absolute]="!isFixed"
              [class.bottom-0]="isBottom"
              [class.top-auto]="isBottom">
             
             <!-- Static Header (Pinned Top) -->
             <div class="pt-32 pb-8 text-center z-10 bg-white/95 backdrop-blur-sm" appFadeIn>
                <div class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Journey</div>
                <h2 class="text-4xl md:text-6xl font-black text-[#191919]">From Chaos to Clarity</h2>
             </div>

             <!-- Horizontal Track -->
             <div class="flex-1 flex items-center w-full">
                <div #horizontalTrack class="flex items-center px-12 md:px-32 gap-24 will-change-transform" 
                     [style.transform]="'translateX(' + horizontalOffset + 'px)'">
                   
                   <!-- Intro Spacer -->
                   <div class="w-[5vw] shrink-0"></div>

                   @for (step of p.process; track step.title; let i = $index) {
                      <div class="w-[85vw] md:w-[75vw] lg:w-[65vw] shrink-0 flex flex-col gap-6 opacity-40 transition-all duration-500 scale-95" 
                           [class.active-step]="isStepActive(i)">
                         
                         <!-- Step Header -->
                         <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <span class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#191919] font-bold text-sm bg-white">{{ i + 1 }}</span>
                            <span class="w-12 h-px bg-slate-200"></span>
                            <span>{{ step.duration }}</span>
                         </div>

                         <!-- Main Card -->
                         <div class="bg-white rounded-[2.5rem] p-2 shadow-2xl border border-slate-100">
                             <div class="bg-slate-50 rounded-[2rem] p-6 md:p-10"> <!-- Compact Padding -->
                                <h3 class="text-3xl font-bold text-[#191919] mb-2">{{ step.title }}</h3>
                                <p *ngIf="step.subtitle" class="text-lg text-slate-500 italic font-serif mb-6">{{ step.subtitle }}</p>
                                <p class="text-slate-700 leading-relaxed mb-8 text-base md:text-lg">{{ step.description }}</p>

                                <!-- Chaos vs Clarity -->
                                <div class="grid md:grid-cols-2 gap-4 bg-white rounded-2xl p-4 shadow-sm">
                                   <div class="p-4 border-l-4 border-red-200 bg-red-50/50 rounded-r-xl">
                                      <div class="text-[10px] font-bold uppercase text-red-400 mb-1">Chaos</div>
                                      <p class="text-slate-600 text-sm font-medium">{{ step.chaos }}</p>
                                   </div>
                                   <div class="p-4 border-l-4 border-green-400 bg-green-50/50 rounded-r-xl">
                                      <div class="text-[10px] font-bold uppercase text-green-600 mb-1">Clarity</div>
                                      <p class="text-[#191919] font-bold text-sm">{{ step.clarity }}</p>
                                   </div>
                                </div>
                             </div>
                         </div>

                         <!-- Image or Deliverables -->
                         <div class="grid grid-cols-2 gap-4 h-40"> <!-- Reduced height -->
                            <div *ngIf="step.image" class="h-full rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
                               <img [src]="step.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Process">
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col justify-center h-full">
                               <div class="text-xs font-bold uppercase text-slate-400 mb-2">Deliverables</div>
                                <div class="flex flex-wrap gap-2 content-start">
                                   @for (d of step.deliverables; track d) {
                                      <span class="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium rounded-full border border-slate-100">{{ d }}</span>
                                   }
                                </div>
                            </div>
                         </div>

                      </div>
                   }

                   <!-- Outro Spacer -->
                   <div class="w-[30vw] shrink-0"></div>
                </div>
             </div>
         </div>
      </section>

      <!-- Impact -->
      <section class="py-24 px-6 bg-[#191919] text-white z-20 relative">
          <div class="max-w-7xl mx-auto">
             <div class="grid lg:grid-cols-2 gap-20 items-start">
                
                <div>
                   <h2 class="text-4xl md:text-6xl font-bold mb-6">The Impact</h2>
                   <p class="text-xl text-gray-400 mb-12">Measuring success through tangible results.</p>
                   
                   <div class="grid grid-cols-2 gap-12 mb-16">
                      @for (metric of p.impact.metrics; track metric.label) {
                         <div>
                            <div class="text-5xl md:text-6xl font-black text-[#FFD000] mb-2 tracking-tight">{{ metric.value }}</div>
                            <div class="text-sm font-bold uppercase tracking-widest text-gray-500">{{ metric.label }}</div>
                         </div>
                      }
                   </div>

                   <div *ngIf="p.impact.testimonial" class="bg-white/10 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10">
                      <div class="text-4xl text-[#FFD000] mb-6 font-serif">"</div>
                      <p class="text-2xl text-white leading-relaxed mb-8 font-light italic">
                         {{ p.impact.testimonial.quote }}
                      </p>
                      <div>
                         <div class="font-bold text-white">{{ p.impact.testimonial.author }}</div>
                         <div class="text-sm text-gray-400">{{ p.impact.testimonial.role }}</div>
                      </div>
                   </div>
                </div>

                <!-- Simple Chart (CSS) -->
                <div *ngIf="p.impact.chart" class="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 h-full flex flex-col justify-end" appFadeIn>
                   <div class="text-lg font-bold mb-8 text-center">{{ p.impact.chart.datasets[0].label }}</div>
                   <div class="flex justify-between items-end h-[300px] gap-4 px-4">
                      @for (data of p.impact.chart.datasets[0].data; track $index; let i = $index) {
                         <div class="w-full bg-[#FFD000]/20 rounded-t-xl hover:bg-[#FFD000] transition-colors group relative" [style.height.%]="(data / 30) * 100">
                             <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">{{ data }}%</div>
                             <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500">{{ p.impact.chart.labels[i] }}</div>
                         </div>
                      }
                   </div>
                   <div class="h-px w-full bg-white/20 mt-8"></div>
                </div>

             </div>
          </div>
      </section>

      <!-- Navigation Footer -->
      <section class="py-32 px-6 bg-white text-center z-20 relative">
         <h3 class="text-2xl font-bold mb-8">Ready to see more?</h3>
         <a routerLink="/work" class="inline-flex items-center gap-2 bg-[#191919] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all hover:-translate-y-1 shadow-xl">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
         </a>
      </section>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
     .active-step {
         opacity: 1 !important;
         transform: scale(1) !important;
     }
  `]
})
export class CaseStudyComponent implements OnInit, AfterViewInit {
  // Signal to hold the current project data
  project = signal<CaseStudy | undefined>(undefined);
  isScrolled = false;
  scrollProgress = 0;
  
  // Horizontal Scroll Logic
  horizontalOffset = 0;
  activeStepIndex = 0;
  processSectionHeight = 3000;
  
  // Manual Sticky Logic
  isFixed = false;
  isBottom = false;
  
  @ViewChild('processContainer') processContainer!: ElementRef;
  @ViewChild('horizontalTrack') horizontalTrack!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       const id = params['id'];
       const found = PROJECTS.find(p => p.id === id);
       this.project.set(found);
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
           this.calculateDimensions();
           this.updateScroll();
        });
    }
  }

  @HostListener('window:resize')
  onResize() {
     if (isPlatformBrowser(this.platformId)) {
        this.calculateDimensions();
        this.updateScroll();
     }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScroll();
  }

  calculateDimensions() {
      if (this.horizontalTrack && this.processContainer) {
          const trackWidth = this.horizontalTrack.nativeElement.scrollWidth;
          const viewportWidth = window.innerWidth;
          const scrollDistance = trackWidth - viewportWidth;
          // Ensure enough scrolling space + buffer
          this.processSectionHeight = window.innerHeight + scrollDistance + 200;
      }
  }

  updateScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.isScrolled = scrollTop > 50;
    this.scrollProgress = (scrollTop / docHeight) * 100;

    // Horizontal Scroll Logic
    if (this.processContainer) {
       const containerRect = this.processContainer.nativeElement.getBoundingClientRect();
       const viewportHeight = window.innerHeight;
       const viewportTop = 0;
       
       // Fixed Logic
       // When container top <= 0, we are "in" the section.
       // We stay fixed until container bottom <= viewportHeight (meaning we reached the end of the section container)
       // Actually, since the container is tall, content stays fixed at top:0 while we scroll the container body behind/around it?
       // No, the container is relevant to document.
       // We fix the child.
       
       const offsetTop = containerRect.top;
       // We only fix if we are active
       
       const isEntered = offsetTop <= 0;
       const isFinished = (containerRect.bottom <= viewportHeight);
       
       if (isEntered && !isFinished) {
           this.isFixed = true;
           this.isBottom = false;
           this.horizontalOffset = offsetTop; // Negative value
       } else if (isFinished) {
           this.isFixed = false;
           this.isBottom = true;
           // Max scroll
           this.horizontalOffset = -(this.processSectionHeight - viewportHeight);
       } else {
           // Not reached yet
           this.isFixed = false;
           this.isBottom = false;
           this.horizontalOffset = 0;
       }

       // Update active index
       if (this.horizontalTrack && this.isFixed) {
          const trackChildren = Array.from(this.horizontalTrack.nativeElement.children) as HTMLElement[];
          let cleanOffset = 0;
          // Intro spacer is 5vw approx. 
          // Let's just index by width roughly.
          
          // Actually, let's just stick to the index math
          if (trackChildren.length > 2) {
             const stepWidth = trackChildren[1].offsetWidth + 96; // 96 = gap-24 (6rem)
             // Approx
             const index = Math.floor( Math.abs(this.horizontalOffset) / stepWidth );
             this.activeStepIndex = index;
          }
       }
    }
  }

  isStepActive(index: number): boolean {
     return index === this.activeStepIndex;
  }
}
