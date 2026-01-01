import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: `
    <section id="pricing" class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
           <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Pricing</span>
           <h2 class="text-4xl md:text-6xl font-bold text-[#191919]">One subscription, <span class="font-serif italic font-light">endless possibilities</span></h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          <!-- Visual Card (Left) -->
          <div class="bg-white rounded-[3rem] p-10 flex flex-col justify-center items-center relative overflow-hidden min-h-[500px] shadow-sm group">
             <!-- Card Mockup with animations -->
             <div class="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
             
             <div class="relative z-10 text-center mb-8">
               <div class="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                  Start today
               </div>
               <h3 class="text-5xl font-bold mb-2">Join<br/>Designjoy</h3>
             </div>

             <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a8_Group%201171274554.png" alt="Card Bundle" class="relative z-10 w-full max-w-md transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          <!-- Pricing Details (Right) -->
          <div class="bg-[#191919] text-white rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden">
             
             <div class="relative z-10">
               <div class="flex justify-between items-start mb-8">
                  <div>
                    <h3 class="text-3xl font-bold">Monthly Club</h3>
                    <p class="text-gray-400 text-sm mt-1 uppercase tracking-wider">Pause or cancel anytime</p>
                  </div>
               </div>

               <div class="mb-10">
                  <div class="text-6xl md:text-7xl font-bold">$5,995<span class="text-2xl text-gray-500 font-normal">/m</span></div>
               </div>

               <div class="space-y-4 mb-12">
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">One request at a time</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">Avg. 48 hour delivery</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">Unlimited brands</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">Webflow development</span>
                  </div>
                   <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">Unlimited stock photos</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span class="text-lg">Pause or cancel anytime</span>
                  </div>
               </div>
             </div>

             <a href="https://buy.stripe.com/9B68wP42335o38v2v57bW09" target="_blank" class="relative z-10 bg-[#FFD000] text-black text-center py-4 rounded-xl font-bold text-lg hover:bg-[#FFC000] transition-colors flex items-center justify-center gap-2">
                Join today
             </a>

             <!-- Decor -->
             <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-40"></div>
          </div>

        </div>

        <!-- Additional Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
                 Pause anytime
              </h4>
              <p class="text-slate-500">Temporarily pause your subscription anytime, no sweat.</p>
           </div>
           <div class="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <h4 class="font-bold text-lg mb-2 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 Try it for a week
              </h4>
              <p class="text-slate-500">Not loving it after a week? Get 75% back, no questions asked.</p>
           </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {}