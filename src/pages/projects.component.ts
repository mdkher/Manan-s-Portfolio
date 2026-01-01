import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../directives/fade-in.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FadeInDirective, RouterLink],
  template: `
    <div class="min-h-screen pt-32 pb-24 px-6">
      <div class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8" appFadeIn>
           <div>
              <div class="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4">
                 <span class="opacity-50">Home</span>
                 <span>/</span>
                 <span class="text-[#191919]">Work</span>
              </div>
              <h1 class="text-5xl md:text-7xl font-bold text-[#191919] tracking-tight">
                 Selected Work
              </h1>
           </div>
           
           <div class="text-right hidden md:block">
              <span class="text-xl md:text-2xl font-serif italic text-slate-500">(07) Projects</span>
           </div>
        </div>

        <!-- Broken Masonry Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
           
           <!-- Project 1: Large Featured (Top Left) -->
           <div [routerLink]="['/work', 'project-alpha']" class="group relative md:col-span-2 rounded-[2.5rem] overflow-hidden cursor-pointer" appFadeIn>
              <img src="https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Project Alpha">
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              <!-- Creative Title Placement -->
              <div class="absolute bottom-8 left-8 text-white z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <h2 class="text-4xl font-bold">Project Alpha</h2>
                 <span class="text-sm uppercase tracking-widest opacity-80">Fintech</span>
              </div>
           </div>

           <!-- Project 2: Tall Portrait (Right Top) -->
           <div [routerLink]="['/work', 'neon-nexus']" class="group relative md:row-span-2 rounded-[2.5rem] overflow-hidden cursor-pointer mt-0 lg:mt-12" appFadeIn style="animation-delay: 100ms">
               <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Neon Nexus">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute top-8 right-8 text-white z-10 text-right transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h2 class="text-3xl font-bold">Neon Nexus</h2>
                  <span class="text-sm uppercase tracking-widest opacity-80">Cybersecurity</span>
               </div>
           </div>

           <!-- Project 3: Standard Card (Mid Left) -->
           <div [routerLink]="['/work', 'aero-systems']" class="group relative rounded-[2.5rem] overflow-hidden cursor-pointer" appFadeIn style="animation-delay: 200ms">
               <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aero Systems">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute bottom-8 right-8 text-white z-10 text-right transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <h2 class="text-2xl font-bold">Aero Systems</h2>
                  <span class="text-sm uppercase tracking-widest opacity-80">Dashboard</span>
               </div>
           </div>

           <!-- Project 4: Standard Card (Mid Center) -->
           <div [routerLink]="['/work', 'quantum']" class="group relative rounded-[2.5rem] overflow-hidden cursor-pointer lg:translate-y-12" appFadeIn style="animation-delay: 300ms">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Quantum Leap">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h2 class="text-3xl font-bold">Quantum</h2>
                   <span class="text-xs uppercase tracking-widest opacity-80">AI Research</span>
               </div>
           </div>

           <!-- Project 5: Wide Span (Bottom) -->
           <div [routerLink]="['/work', 'velocite']" class="group relative md:col-span-2 rounded-[2.5rem] overflow-hidden cursor-pointer" appFadeIn style="animation-delay: 400ms">
               <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Velocite">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute bottom-8 left-8 text-white z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <h2 class="text-4xl font-bold">Velocite</h2>
                   <span class="text-sm uppercase tracking-widest opacity-80">Automotive Interface</span>
               </div>
           </div>

           <!-- Project 6: Tall Portrait (Bottom Right) -->
            <div [routerLink]="['/work', 'echo']" class="group relative rounded-[2.5rem] overflow-hidden cursor-pointer lg:-mt-24" appFadeIn style="animation-delay: 500ms">
               <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Echo Chamber">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute bottom-8 right-8 text-white z-10 text-right transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                   <h2 class="text-2xl font-bold">Echo</h2>
                   <span class="text-sm uppercase tracking-widest opacity-80">Audio App</span>
               </div>
           </div>

           <!-- Project 7: Final Card (Bottom Left) -->
           <div [routerLink]="['/work', 'zenith']" class="group relative rounded-[2.5rem] overflow-hidden cursor-pointer" appFadeIn style="animation-delay: 600ms">
               <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Zenith">
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
               
               <div class="absolute top-8 left-8 text-white z-10 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <h2 class="text-2xl font-bold">Zenith</h2>
                   <span class="text-sm uppercase tracking-widest opacity-80">Wellness</span>
               </div>
           </div>

        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {}
