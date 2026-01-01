import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: `
    <section id="pricing-section" class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
           <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Experience</span>
           <h2 class="text-4xl md:text-6xl font-bold text-[#191919]">My professional <span class="font-serif italic font-light">journey</span></h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          <!-- Visual Card (Left) -->
          <div id="pricing-visual-card" class="bg-white rounded-[3rem] p-10 flex flex-col justify-center items-center relative overflow-hidden min-h-[500px] shadow-sm group">
             <!-- Card Mockup with animations -->
             <div class="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
             
             <div class="relative z-10 text-center mb-8">
               <div class="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                  Open to work
               </div>
               <h3 class="text-5xl font-bold mb-2">View<br/>Resume</h3>
             </div>

             <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a8_Group%201171274554.png" alt="Card Bundle" class="relative z-10 w-full max-w-md transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          <!-- Pricing Details (Right) -->
          <div id="pricing-details-card" class="bg-[#191919] text-white rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden">
             
             <div class="relative z-10">
               <div class="flex justify-between items-start mb-8">
                  <div>
                    <h3 class="text-3xl font-bold">Career Timeline</h3>
                    <p class="text-gray-400 text-sm mt-1 uppercase tracking-wider">Product Design & Strategy</p>
                  </div>
               </div>

               <div class="space-y-6 mb-12">
                  <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                    <div>
                        <div class="text-lg font-bold">Senior UX Designer @ Globant</div>
                        <div class="text-gray-400 text-sm">Led AR/VR collaboration tools & healthcare initiatives.</div>
                    </div>
                  </div>
                   <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                    <div>
                        <div class="text-lg font-bold">Product Designer @ Dropbox</div>
                        <div class="text-gray-400 text-sm">Contributed to the core design system used worldwide.</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                    <div>
                        <div class="text-lg font-bold">UX Lead @ EY</div>
                        <div class="text-gray-400 text-sm">Transformed customer support experiences.</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>
                    <div>
                        <div class="text-lg font-bold">Designer @ Infosys</div>
                        <div class="text-gray-400 text-sm">Foundation in enterprise scale applications.</div>
                    </div>
                  </div>
               </div>
             </div>

             <a href="#" class="relative z-10 bg-[#FFD000] text-black text-center py-4 rounded-xl font-bold text-lg hover:bg-[#FFC000] transition-colors flex items-center justify-center gap-2">
                Download Resume
             </a>

             <!-- Decor -->
             <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-40"></div>
          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                 Tools
              </h4>
              <p class="text-slate-500">Figma, Principle, Spline, Webflow, Angular</p>
           </div>
           <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                 Education
              </h4>
              <p class="text-slate-500">B.Des in Human Computer Interaction</p>
           </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {}