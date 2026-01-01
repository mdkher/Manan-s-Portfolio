import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="benefits-section" class="py-24 px-6 bg-white rounded-t-[3rem] mt-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Design Principles</span>
          <h2 id="benefits-heading" class="text-4xl md:text-6xl font-bold text-[#191919] leading-tight mb-6">
            From chaos to <span class="font-serif italic font-light">clarity</span>
          </h2>
          <p class="text-xl text-slate-500">
            A strategic approach to design that aligns business goals with user needs, creating products that are not just beautiful, but meaningful.
          </p>
        </div>

        <!-- Scrolling Marquee -->
        <div id="benefits-marquee" class="overflow-hidden relative mask-linear-gradient">
           <div class="flex gap-6 animate-marquee whitespace-normal hover:[animation-play-state:paused]">
             <!-- Original + Duplicates for seamless loop -->
              @for (benefit of benefits().concat(benefits()); track $index) {
                <div class="w-64 flex-shrink-0 flex flex-col items-center text-center p-6 rounded-3xl border border-transparent hover:scale-105 transition-transform duration-300"
                     [ngClass]="getCardBackground($index)">
                   <div class="w-12 h-12 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm">
                     <img [src]="benefit.icon" [alt]="benefit.title" class="w-8 h-8 object-contain" />
                   </div>
                   <h3 class="text-lg font-bold text-[#191919] mb-2">{{ benefit.title }}</h3>
                   <p class="text-sm text-slate-600 leading-relaxed">{{ benefit.desc }}</p>
                </div>
              }
           </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {
  benefits = signal([
    {
      title: 'Empathy First',
      desc: "Understanding the 'Why' before the 'How'. Deep user research drives every decision.",
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png'
    },
    {
      title: 'Systemic Thinking',
      desc: 'Building scalable design systems, not just isolated screens.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png'
    },
    {
      title: 'Strategic Vision',
      desc: 'Aligning business objectives with user needs to create tangible value.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png'
    },
    {
      title: 'Detailed Execution',
      desc: 'Precision crafting of interactions and accessible interfaces.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199d_Star--Streamline-Nova.png'
    },
    {
      title: 'Inclusive Design',
      desc: 'Designing for everyone, ensuring accessibility is a priority, not an afterthought.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png'
    },
    {
      title: 'Mentorship',
      desc: 'Elevating your team culture and knowledge sharing.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png'
    }
  ]);

  getCardBackground(index: number): string {
    const colors = [
      'bg-blue-50',
      'bg-purple-50',
      'bg-green-50', 
      'bg-orange-50',
      'bg-pink-50',
      'bg-yellow-50'
    ];
    return colors[index % colors.length];
  }
}