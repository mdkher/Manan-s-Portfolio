import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  template: `
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
           <h2 class="text-4xl md:text-6xl font-bold text-[#191919] max-w-4xl mx-auto leading-tight">
             The way design <span class="font-serif italic font-light">should've</span> been done in the first place
           </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Card 1: Subscribe -->
          <div class="group relative bg-gradient-to-br from-[#FFD000] to-[#FF9900] rounded-[2rem] p-10 h-[500px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
             <div class="relative z-10">
               <h3 class="text-3xl font-bold mb-4">Subscribe</h3>
               <p class="text-lg font-medium opacity-90 leading-relaxed">Subscribe to a plan & request as many designs as you’d like.</p>
             </div>
             <!-- Icon/Illustration -->
             <div class="absolute bottom-10 right-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M19 14c1.49-1.28 3.6-2.34 4.52-2.74a2 2 0 0 0 .15-3.65C22.69 7.21 20.57 6.16 19 4.88c-1.56-1.28-2.61-3.4-3.02-4.32a2 2 0 0 0-3.65-.15C11.94 1.31 10.89 3.43 9.61 5c-1.28 1.56-3.4 2.61-4.32 3.02a2 2 0 0 0-.15 3.65c1.09.41 3.2 1.46 4.47 2.74 1.28 1.56 2.34 3.6 2.74 4.52a2 2 0 0 0 3.65.15c.41-1.09 1.46-3.2 2.74-4.47z"/></svg>
             </div>
          </div>

          <!-- Card 2: Request (Marquee) -->
          <div class="relative bg-gradient-to-br from-[#0055FF] to-[#0099FF] rounded-[2rem] h-[500px] flex flex-col justify-between overflow-hidden text-white shadow-sm hover:shadow-xl transition-shadow duration-300">
             <div class="relative z-10 p-10">
               <h3 class="text-3xl font-bold mb-4">Request</h3>
               <p class="text-lg font-medium opacity-90 leading-relaxed">Request whatever you'd like, from mobile apps to logos.</p>
             </div>
             
             <!-- Marquee Container -->
             <div class="flex flex-col gap-4 mb-8 opacity-60 group relative mask-linear-gradient">
                <!-- Row 1 -->
                <div class="flex gap-4 animate-marquee whitespace-nowrap">
                   <span class="px-6 py-2 bg-white/20 rounded-full">Mobile apps</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Logos</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Social Media</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Presentations</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Mobile apps</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Logos</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Social Media</span>
                </div>
                <!-- Row 2 -->
                 <div class="flex gap-4 animate-marquee-reverse whitespace-nowrap">
                   <span class="px-6 py-2 bg-white/20 rounded-full">Webflow</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Print design</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Packaging</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Ad creative</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Webflow</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Print design</span>
                </div>
                <!-- Row 3 -->
                 <div class="flex gap-4 animate-marquee whitespace-nowrap">
                   <span class="px-6 py-2 bg-white/20 rounded-full">Branding</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Email</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Display ads</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">User interface</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Branding</span>
                   <span class="px-6 py-2 bg-white/20 rounded-full">Email</span>
                </div>
             </div>
          </div>

          <!-- Card 3: Receive -->
          <div class="relative bg-gradient-to-br from-[#FF4D4D] to-[#FF2A00] rounded-[2rem] p-10 h-[500px] flex flex-col overflow-hidden text-white shadow-sm hover:shadow-xl transition-shadow duration-300">
             <div class="relative z-10 mb-auto">
               <h3 class="text-3xl font-bold mb-4">Receive</h3>
               <p class="text-lg font-medium opacity-90 leading-relaxed">Receive your design within two business days on average.</p>
             </div>
             
             <!-- Stacked Cards Animation -->
             <div class="relative h-48 w-full mt-8 flex items-end justify-center group-hover:scale-105 transition-transform duration-500">
                <div class="absolute w-40 h-56 bg-white rounded-xl shadow-lg transform rotate-[-12deg] translate-x-[-40px] translate-y-[20px] opacity-80 transition-all duration-500 group-hover:rotate-[-20deg] group-hover:translate-x-[-60px] group-hover:translate-y-[10px]"></div>
                <div class="absolute w-40 h-56 bg-white rounded-xl shadow-lg transform rotate-[12deg] translate-x-[40px] translate-y-[20px] opacity-80 transition-all duration-500 group-hover:rotate-[20deg] group-hover:translate-x-[60px] group-hover:translate-y-[10px]"></div>
                <div class="relative w-40 h-56 bg-white rounded-xl shadow-2xl z-10 overflow-hidden transition-all duration-500 group-hover:translate-y-[-10px]">
                   <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec196c_card.png" class="w-full h-full object-cover" alt="Card">
                </div>
             </div>
          </div>

        </div>

        <!-- Logos -->
        <div class="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1986_Nectar-sleep-logo-vector%201.svg" class="h-8 md:h-10 w-auto" alt="Nectar">
           <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1987_bmc-full-logo%201.svg" class="h-8 md:h-10 w-auto" alt="BMC">
           <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198a_svg.svg" class="h-8 md:h-10 w-auto" alt="Beehiiv">
           <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1989_Vector.svg" class="h-8 md:h-10 w-auto" alt="Laravel">
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowItWorksComponent {}