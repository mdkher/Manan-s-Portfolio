import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="book" class="bg-[#191919] text-white pt-24 pb-12 px-6 rounded-t-[3rem]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <!-- Left Side -->
        <div class="flex flex-col justify-between">
           <div>
              <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d7_Designjoy.svg" class="h-8 mb-12 invert brightness-0 grayscale-0 contrast-200" alt="Logo">
              
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                See if Designjoy is the right fit for you <span class="font-serif italic text-gray-400 font-normal">(it totally is)</span>
              </h2>
              <p class="text-xl text-gray-400 mb-12">
                Schedule a quick, 15 minute guided tour through Designjoy.
              </p>
           </div>

           <div class="space-y-4">
              <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d8_Smiley%20faces.svg" alt="Smiles" class="w-32 opacity-80">
              <div class="flex flex-col md:flex-row md:items-center gap-6 text-sm text-gray-500">
                 <span>Headquartered in Phoenix, Arizona</span>
                 <a href="#" class="hover:text-white transition-colors">Terms of service</a>
                 <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
              </div>
           </div>
        </div>

        <!-- Right Side (Booking Embed Placeholder) -->
        <div class="bg-black/50 rounded-[2rem] p-4 h-[600px] border border-white/10 overflow-hidden relative">
           <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 class="text-2xl font-bold mb-4">Book a call</h3>
              <p class="text-gray-400 mb-8 max-w-sm">Designjoy is experiencing a high volume of bookings, so slots are limited. For faster service, email hello@designjoy.co</p>
              
              <!-- Simulated Calendar Visual -->
              <div class="w-full max-w-sm bg-[#222] rounded-xl p-6 border border-white/5">
                 <div class="flex justify-between items-center mb-6">
                    <span class="font-bold">January 2026</span>
                    <div class="flex gap-2">
                       <div class="w-6 h-6 rounded bg-[#333]"></div>
                       <div class="w-6 h-6 rounded bg-[#333]"></div>
                    </div>
                 </div>
                 <div class="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                    <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                 </div>
                 <div class="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                    <span class="p-2 opacity-20">29</span><span class="p-2 opacity-20">30</span><span class="p-2 opacity-20">31</span>
                    <span class="p-2 bg-white text-black rounded-full">1</span><span class="p-2 bg-[#333] rounded-full">2</span><span class="p-2">3</span><span class="p-2">4</span>
                    <span class="p-2">5</span><span class="p-2">6</span><span class="p-2 bg-[#333] rounded-full">7</span><span class="p-2 bg-[#333] rounded-full">8</span><span class="p-2 bg-[#333] rounded-full">9</span><span class="p-2">10</span><span class="p-2">11</span>
                    <span class="p-2">12</span><span class="p-2 bg-[#333] rounded-full">13</span><span class="p-2 bg-[#333] rounded-full">14</span><span class="p-2 bg-[#333] rounded-full">15</span><span class="p-2 bg-[#333] rounded-full">16</span><span class="p-2">17</span><span class="p-2">18</span>
                    <span class="p-2">19</span><span class="p-2 bg-[#333] rounded-full">20</span><span class="p-2 bg-[#333] rounded-full">21</span><span class="p-2 bg-[#333] rounded-full">22</span><span class="p-2 bg-[#333] rounded-full">23</span><span class="p-2">24</span><span class="p-2">25</span>
                    <span class="p-2">26</span><span class="p-2 bg-[#333] rounded-full">27</span><span class="p-2 bg-[#333] rounded-full">28</span><span class="p-2 bg-[#333] rounded-full">29</span><span class="p-2 bg-[#333] rounded-full">30</span><span class="p-2">31</span>
                 </div>
                 
                 <div class="mt-6 space-y-2">
                    <div class="h-10 border border-white/10 rounded-lg flex items-center justify-center text-sm">21:30</div>
                    <div class="h-10 border border-white/10 rounded-lg flex items-center justify-center text-sm">22:00</div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}