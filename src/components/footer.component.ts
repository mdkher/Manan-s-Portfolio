import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="footer-section" class="bg-[#191919] text-white pt-24 pb-12 px-6 rounded-t-[3rem]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <!-- Left Side -->
        <div class="flex flex-col justify-between">
           <div>
              <span id="footer-logo" class="text-3xl font-bold tracking-tighter text-white mb-12 block">Manan.</span>
              
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                Let's build something <span class="font-serif italic text-gray-400 font-normal">amazing</span> together.
              </h2>
              <p class="text-xl text-gray-400 mb-12">
                Open for freelance opportunities and collaborations.
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
        <!-- Right Side (Simple Contact Form Placeholder) -->
        <div id="footer-contact-card" class="bg-black/50 rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden flex flex-col justify-center">
             <h3 class="text-2xl font-bold mb-4">Get in touch</h3>
             <p class="text-gray-400 mb-8">
                Have a project in mind? Reach out to me directly.
             </p>
             <a href="mailto:hello@example.com" id="footer-email-btn" class="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
                Email Me
             </a>
        </div>

      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}