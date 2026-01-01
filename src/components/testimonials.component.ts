import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section id="testimonials-section" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <!-- Webflow Quote -->
          <div id="testimonial-webflow" class="flex flex-col items-center text-center space-y-6">
            <h3 class="text-3xl md:text-4xl font-serif italic text-[#191919]">
              "Designjoy shows that they know the art of subtlety."
            </h3>
            <img src="https://cdn.prod.website-files.com/678005a5d025f688a34957f1/678199f71b779683c0d14a8f_65dd4dae1c85fee7c339650a_Webflow_logo_2023%20(1)%201.svg" alt="Webflow" class="h-8 opacity-80" />
          </div>

          <!-- Kevin O'Leary Quote -->
          <div id="testimonial-kevin" class="flex flex-col items-center text-center space-y-6">
             <h3 class="text-3xl md:text-4xl font-serif italic text-[#191919]">
              "Design is everything, and these guys have nailed it."
            </h3>
            <div class="flex items-center gap-4">
              <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19bd_Group%201171274555.png" alt="Kevin O'Leary" class="w-12 h-12 rounded-full object-cover" />
              <div class="text-left">
                <div class="font-bold text-[#191919]">Kevin O'Leary</div>
                <div class="text-sm text-slate-500">Shark Tank</div>
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