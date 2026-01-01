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
           <span class="text-2xl font-bold tracking-tighter text-[#191919]">Manan.</span>
        </a>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#work" class="text-sm font-medium text-slate-700 hover:text-black transition-colors px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200">
            Work
          </a>
          <a href="#about" class="text-sm font-medium text-slate-700 hover:text-black transition-colors px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200">
            About
          </a>
          <a href="#contact" class="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black transition-colors px-4 py-2 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {}