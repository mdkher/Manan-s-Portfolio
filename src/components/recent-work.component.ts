import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recent-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="recent-work-section" class="py-24 px-6 bg-[#F9F5F2]">
      <div class="max-w-7xl mx-auto">
        


        <!-- Awards & Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Awards -->
          <div id="recent-work-awards" class="group bg-white rounded-[2.5rem] shadow-sm flex flex-col relative overflow-hidden h-[600px] lg:col-span-2">
             
             <!-- Top Half: Angled Marquee -->
             <div class="relative h-[55%] overflow-hidden bg-gray-50">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="transform -rotate-[25deg] scale-110 translate-y-4 w-[120%] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        <!-- Row 1 (Right to Left) -->
                       <div class="flex gap-6 mb-6 animate-marquee whitespace-nowrap">
                          @for (item of [1,2,3,4,5,6]; track $index) {
                            <div class="w-64 h-40 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden shadow-md">
                               <img [src]="getImage($index)" class="w-full h-full object-cover" alt="Work">
                            </div>
                          }
                       </div>
                       <!-- Row 2 (Left to Right) -->
                       <div class="flex gap-6 animate-marquee-reverse whitespace-nowrap">
                          @for (item of [1,2,3,4,5,6]; track $index) {
                            <div class="w-64 h-40 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden shadow-md">
                               <img [src]="getImage($index + 2)" class="w-full h-full object-cover" alt="Work">
                            </div>
                          }
                       </div>
                    </div>
                </div>
                <!-- Fade to bottom content -->
                <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
             </div>

             <!-- Bottom Half: Content -->
             <div class="relative z-20 h-[45%] bg-white p-8 md:p-10 flex flex-col justify-between">
                <!-- Awards Row -->
                <div class="flex flex-wrap gap-6 mb-4">
                  <!-- Highlight 1 -->
                  <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                     <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                     <div>
                       <div class="font-bold text-sm">Globant</div>
                       <div class="text-xs text-slate-500">AR/VR Collaboration</div>
                     </div>
                  </div>
    
                   <!-- Highlight 2 -->
                  <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                     <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">D</div>
                     <div>
                       <div class="font-bold text-sm">Dropbox</div>
                       <div class="text-xs text-slate-500">Design Systems</div>
                     </div>
                  </div>
                </div>
    
                <div class="flex items-end justify-between">
                   <div>
                       <h3 class="text-3xl font-bold mb-2">Selected Work</h3>
                       <p class="text-slate-600 font-medium">Impactful solutions for global brands including EY & Infosys.</p>
                   </div>
                   <button routerLink="/work" class="bg-[#191919] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">See recent work</button>
                </div>
             </div>
          </div>

          <!-- Apps & Logos -->
          <div id="recent-work-apps" class="bg-[#FFE5E5] rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
             <!-- Pink abstract bg -->
             
             <div class="relative z-10">
                <div class="flex flex-wrap gap-2 mb-8">
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Healthcare</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">AR/VR</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Design Systems</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Customer Support</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Fintech</span>
                   <span class="px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-slate-500">+ more</span>
                </div>
                
                <h3 class="text-3xl font-bold mb-2 text-[#191919]">Expertise across<br/>industries</h3>
                <p class="text-slate-700">From healthcare to immersive tech.</p>
             </div>

             <!-- Decorative Illustrations -->
             <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d4_pink.svg" class="absolute bottom-0 right-0 w-48 opacity-80" alt="Decor">
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentWorkComponent {
  // Using images from the provided HTML source for fidelity
  getImage(index: number): string {
     const images = [
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ea_Group%201171274558.png',
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19ee_Group%201171274560.png',
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19de_Group%201171274563.png',
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e6_Group%201171274559.png',
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19e2_Group%201171274561.png',
      'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19da_Group%201171274562.png'
     ];
     return images[index % images.length];
  }
}