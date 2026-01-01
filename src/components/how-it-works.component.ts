import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  template: `
    <section id="how-it-works-section" class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
           <h2 class="text-4xl md:text-6xl font-bold text-[#191919] max-w-4xl mx-auto leading-tight">
             My design <span class="font-serif italic font-light">process</span>
           </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Card 1: Subscribe -->
          <div id="how-it-works-card-subscribe" class="group relative bg-[#FFD700] rounded-[2rem] p-10 h-[500px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
             <!-- Fluid Background -->
             <div class="absolute inset-0 w-full h-full">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#FFA500] rounded-full mix-blend-multiply filter blur-[60px] opacity-70 animate-blob"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-[60px] opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFC0CB] rounded-full mix-blend-multiply filter blur-[60px] opacity-70 animate-blob animation-delay-4000"></div>
             </div>
             
             <!-- Icon/Illustration -->
             <div class="relative z-10 self-end w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 border border-white/20 shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M19 14c1.49-1.28 3.6-2.34 4.52-2.74a2 2 0 0 0 .15-3.65C22.69 7.21 20.57 6.16 19 4.88c-1.56-1.28-2.61-3.4-3.02-4.32a2 2 0 0 0-3.65-.15C11.94 1.31 10.89 3.43 9.61 5c-1.28 1.56-3.4 2.61-4.32 3.02a2 2 0 0 0-.15 3.65c1.09.41 3.2 1.46 4.47 2.74 1.28 1.56 2.34 3.6 2.74 4.52a2 2 0 0 0 3.65.15c.41-1.09 1.46-3.2 2.74-4.47z"/></svg>
             </div>
             <div class="relative z-10 text-[#191919]">
               <h3 class="text-3xl font-bold mb-4">Immersion</h3>
               <p class="text-lg font-medium opacity-90 leading-relaxed">Deep dive into the problem space, understanding users and business goals.</p>
             </div>
          </div>

          <!-- Card 2: Request (Marquee) -->
          <div id="how-it-works-card-request" class="group relative bg-[#0055FF] rounded-[2rem] h-[500px] flex flex-col justify-between overflow-hidden text-white shadow-sm hover:shadow-xl transition-shadow duration-300">
             <!-- Fluid Background -->
             <div class="absolute inset-0 w-full h-full">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF] rounded-full mix-blend-overlay filter blur-[60px] opacity-70 animate-blob"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#4CC9F0] rounded-full mix-blend-normal filter blur-[60px] opacity-60 animate-blob animation-delay-2000"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4361EE] rounded-full mix-blend-overlay filter blur-[60px] opacity-70 animate-blob animation-delay-4000"></div>
             </div>

             <!-- Marquee Container -->
             <div class="relative z-10 flex flex-col gap-4 mt-8 opacity-80 group mask-linear-gradient">
                <!-- Row 1 -->
                <div class="flex gap-4 overflow-hidden">
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 12.5s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">User Research</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Strategy</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Architecture</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Stakeholder Mgmt</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">User Research</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Strategy</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Architecture</span>
                   </div>
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 12.5s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">User Research</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Strategy</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Architecture</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Stakeholder Mgmt</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">User Research</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Strategy</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Architecture</span>
                   </div>
                </div>

                <!-- Row 2 -->
                <div class="flex gap-4 overflow-hidden">
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 10s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Wireframing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Prototyping</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Figma</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Design Systems</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Wireframing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Prototyping</span>
                   </div>
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 10s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Wireframing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Prototyping</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Figma</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Design Systems</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Wireframing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Prototyping</span>
                   </div>
                </div>

                <!-- Row 3 -->
                <div class="flex gap-4 overflow-hidden">
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 12.5s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Usability Testing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Iterative Design</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Final Polish</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Handoff</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Usability Testing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Iterative Design</span>
                   </div>
                   <div class="flex gap-4 animate-marquee whitespace-nowrap shrink-0" style="animation-duration: 12.5s">
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Usability Testing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Iterative Design</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Final Polish</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Handoff</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Usability Testing</span>
                       <span class="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full">Iterative Design</span>
                   </div>
                </div>
             </div>

             <div class="relative z-10 p-10">
               <h3 class="text-3xl font-bold mb-4">Synthesis</h3>
               <p class="text-lg font-medium opacity-90 leading-relaxed">Connecting the dots to craft a strategic north star and architecture.</p>
             </div>
          </div>

          <!-- Card 3: Execution -->
          <div id="how-it-works-card-receive" class="group relative bg-[#FF4500] rounded-[2rem] p-10 h-[500px] flex flex-col overflow-hidden text-white shadow-sm hover:shadow-xl transition-shadow duration-300">
              <!-- Fluid Background -->
             <div class="absolute inset-0 w-full h-full">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-[60px] opacity-70 animate-blob"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#FF0000] rounded-full mix-blend-multiply filter blur-[60px] opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF8C00] rounded-full mix-blend-overlay filter blur-[60px] opacity-70 animate-blob animation-delay-4000"></div>
             </div>

             <!-- Stacked Cards Animation -->
             <div class="relative z-10 h-48 w-full mt-8 mb-auto flex items-end justify-center transition-transform duration-700 ease-out">
                <div class="absolute w-40 h-56 bg-white rounded-xl shadow-lg transform rotate-[-6deg] translate-x-[-20px] translate-y-[10px] opacity-80 transition-all duration-700 ease-out group-hover:rotate-[-15deg] group-hover:translate-x-[-50px] group-hover:translate-y-[5px]"></div>
                <div class="absolute w-40 h-56 bg-white rounded-xl shadow-lg transform rotate-[6deg] translate-x-[20px] translate-y-[10px] opacity-80 transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:translate-x-[50px] group-hover:translate-y-[5px]"></div>
                <div class="relative w-40 h-56 bg-white rounded-xl shadow-2xl z-10 overflow-hidden transition-all duration-700 ease-out group-hover:translate-y-[-10px] group-hover:scale-105">
                   <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec196c_card.png" class="w-full h-full object-cover" alt="Card">
                </div>
             </div>

              <div class="relative z-10">
                <h3 class="text-3xl font-bold mb-4">Execution</h3>
                <p class="text-lg font-medium opacity-90 leading-relaxed">Precision crafting of high-fidelity interfaces and interactive prototypes.</p>
              </div>
          </div>

        </div>

        <!-- Logos -->
        <!-- Logos -->
        <div class="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <!-- Figma -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/figma" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Figma">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Figma</span>
           </div>

           <!-- Behance -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/behance" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Behance">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Behance</span>
           </div>

           <!-- Angular -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/angular" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Angular">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Angular</span>
           </div>

           <!-- TypeScript -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/typescript" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="TypeScript">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">TypeScript</span>
           </div>

           <!-- Google AI (Gemini) -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/googlegemini" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Google AI">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Google AI</span>
           </div>

           <!-- Miro -->
           <div class="group relative flex flex-col items-center justify-center">
             <img src="https://cdn.simpleicons.org/miro" class="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Miro">
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Miro</span>
           </div>

           <!-- Antigravity (Custom Rocket Icon) -->
           <div class="group relative flex flex-col items-center justify-center">
             <div class="h-8 md:h-10 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#191919]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-full w-auto">
                 <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                 <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                 <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                 <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
               </svg>
             </div>
             <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm font-semibold text-[#191919] whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-black/5 pointer-events-none">Antigravity</span>
           </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowItWorksComponent {}