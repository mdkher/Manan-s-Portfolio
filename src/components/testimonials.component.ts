import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section id="impact-reach-section" class="py-24 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <!-- Key Metrics -->
          <div class="flex flex-col gap-10">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6 text-[#191919]">
                Impact <span class="text-slate-400 font-light">&</span> Reach
              </h2>
              <p class="text-xl text-slate-600 max-w-md leading-relaxed">
                Driving results through data-backed design strategies and user-centric problem solving.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-x-8 gap-y-12">
               <div>
                  <div class="text-5xl md:text-6xl font-black text-[#191919] mb-2 tracking-tight">7+</div>
                  <div class="text-sm font-bold uppercase tracking-widest text-slate-500">Years Exp.</div>
               </div>
               <div>
                  <div class="text-5xl md:text-6xl font-black text-[#191919] mb-2 tracking-tight">50+</div>
                  <div class="text-sm font-bold uppercase tracking-widest text-slate-500">Projects</div>
               </div>
               <div>
                  <div class="text-5xl md:text-6xl font-black text-[#191919] mb-2 tracking-tight">100k+</div>
                  <div class="text-sm font-bold uppercase tracking-widest text-slate-500">Users Impacted</div>
               </div>
               <div>
                  <div class="text-5xl md:text-6xl font-black text-[#191919] mb-2 tracking-tight">15+</div>
                  <div class="text-sm font-bold uppercase tracking-widest text-slate-500">Awards</div>
               </div>
            </div>
          </div>

          <!-- Trusted By (Client Logos) -->
          <div class="relative">
             <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none md:hidden"></div>
             
             <div class="bg-slate-50 rounded-[2.5rem] p-10 md:p-14">
                <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10 text-center">Worked with Global Technology Leaders</h3>
                
                <div class="grid grid-cols-2 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                   <!-- Globant -->
                   <div class="flex justify-center transition-transform hover:scale-110">
                      <!-- Fallback to styled text if logo unavailable, or use external clean SVG -->
                      <span class="text-2xl font-black font-sans tracking-tight text-[#BFD730]">Globant</span>
                   </div>

                   <!-- Dropbox -->
                   <div class="flex justify-center transition-transform hover:scale-110">
                     <img src="https://cdn.simpleicons.org/dropbox" class="h-8 md:h-10 w-auto" alt="Dropbox">
                   </div>

                   <!-- EY -->
                   <div class="flex justify-center transition-transform hover:scale-110">
                      <!-- EY Logo is simple enough to render or text -->
                      <span class="text-3xl font-bold font-serif italic text-black">EY</span>
                   </div>

                   <!-- Infosys -->
                   <div class="flex justify-center transition-transform hover:scale-110">
                     <img src="https://cdn.simpleicons.org/infosys" class="h-8 md:h-12 w-auto" alt="Infosys">
                   </div>
                </div>

                <!-- Decorative elements -->
                <div class="mt-12 pt-8 border-t border-slate-200 text-center">
                   <p class="text-slate-500 text-sm font-medium">And diverse startups across the globe.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {}