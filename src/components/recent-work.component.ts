import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-6 bg-[#F9F5F2]">
      <div class="max-w-7xl mx-auto">
        
        <!-- Marquee of Images -->
        <div class="mb-20 overflow-hidden relative">
          <!-- Gradient Masks -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F9F5F2] to-transparent z-10"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F9F5F2] to-transparent z-10"></div>
          
          <div class="flex gap-8 animate-marquee whitespace-nowrap">
            <!-- Repeated Images for seamless loop -->
             @for (item of [1,2,3,4,5,6,1,2,3,4,5,6]; track $index) {
                <div class="w-80 h-60 bg-gray-200 rounded-2xl flex-shrink-0 overflow-hidden shadow-md">
                   <!-- Placeholder Images using Picsum or provided URLs if available in real scenario. Using simple colored blocks for demo aesthetic -->
                   <img [src]="getImage($index)" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Work Example" />
                </div>
             }
          </div>
        </div>

        <!-- Awards & Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Awards -->
          <div class="bg-white rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between">
            <div class="space-y-6">
              <!-- Award 1 -->
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                 <div class="flex items-center gap-4">
                    <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/6785582d859f4a059de5f543_Group%201171274565.svg" class="w-10 h-10" alt="Icon">
                    <div>
                      <div class="font-bold">Buy Me A Coffee</div>
                      <div class="text-sm text-slate-500">Fintech Product of the Year</div>
                    </div>
                 </div>
                 <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678557d2de5ecf01f3e67f14_producthunt-official%20(1)%201.svg" class="w-10 h-10" alt="Product Hunt">
              </div>

               <!-- Award 2 -->
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                 <div class="flex items-center gap-4">
                    <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/6785584fcfd39e0459ff4001_Switchboard_Logo_Symbol%204.svg" class="w-10 h-10" alt="Icon">
                    <div>
                      <div class="font-bold">Switchboard</div>
                      <div class="text-sm text-slate-500">Remote Work Product of the Year</div>
                    </div>
                 </div>
                 <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678557d2de5ecf01f3e67f14_producthunt-official%20(1)%201.svg" class="w-10 h-10" alt="Product Hunt">
              </div>
            </div>

            <div class="mt-10">
               <h3 class="text-2xl font-bold mb-2">Recent work</h3>
               <p class="text-slate-600 mb-6">We're talking "Product of the Year" good.</p>
               <button class="bg-[#191919] text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-colors">See recent work</button>
            </div>
          </div>

          <!-- Apps & Logos -->
          <div class="bg-[#FFE5E5] rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
             <!-- Pink abstract bg -->
             
             <div class="relative z-10">
                <div class="flex flex-wrap gap-2 mb-8">
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Web design</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Logos</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Slide decks</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Branding</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">Mobile apps</span>
                   <span class="px-4 py-2 bg-white rounded-full text-sm font-medium">UI/UX</span>
                   <span class="px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-slate-500">+ more</span>
                </div>
                
                <h3 class="text-3xl font-bold mb-2 text-[#191919]">Apps, websites,<br/>logos & more</h3>
                <p class="text-slate-700">All the things you need under one roof.</p>
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