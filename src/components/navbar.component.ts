import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#F9F5F2]/90 backdrop-blur-md border-b border-gray-200/50 py-4 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
           <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d7_Designjoy.svg" alt="Designjoy" class="h-6 w-auto" />
        </a>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="text-sm font-medium text-slate-700 hover:text-black transition-colors px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200">
            Login
          </a>
          <a href="#book" class="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black transition-colors px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Book a call
          </a>
          <a href="#pricing" class="text-sm font-medium text-white bg-[#191919] px-5 py-2.5 rounded-lg hover:bg-black hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            See pricing
          </a>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {}