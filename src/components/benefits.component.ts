import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-6 bg-white rounded-t-[3rem] mt-10">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Membership benefits</span>
          <h2 class="text-4xl md:text-6xl font-bold text-[#191919] leading-tight mb-6">
            It's "you'll never go back" <span class="font-serif italic font-light">better</span>
          </h2>
          <p class="text-xl text-slate-500">
            Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (benefit of benefits(); track benefit.title) {
            <div class="flex flex-col items-center text-center p-8 bg-[#F9F5F2] rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
               <div class="w-16 h-16 mb-6 flex items-center justify-center">
                 <img [src]="benefit.icon" [alt]="benefit.title" class="w-full h-full object-contain" />
               </div>
               <h3 class="text-xl font-bold text-[#191919] mb-3">{{ benefit.title }}</h3>
               <p class="text-slate-600 leading-relaxed">{{ benefit.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {
  benefits = signal([
    {
      title: 'Design board',
      desc: 'Easily manage your design queue with a Trello board.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png'
    },
    {
      title: 'Fixed monthly rate',
      desc: 'No surprises here! Pay the same fixed price each month.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png'
    },
    {
      title: 'Fast delivery',
      desc: 'Get your design one at a time in just a couple days on average.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png'
    },
    {
      title: 'Top-notch quality',
      desc: 'Senior design quality at your fingertips, whenever you need it.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199d_Star--Streamline-Nova.png'
    },
    {
      title: 'Flexible and scalable',
      desc: 'Scale up or down as needed, and pause or cancel at anytime.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png'
    },
    {
      title: 'Unique and all yours',
      desc: 'Every design is made especially for you and is 100% yours.',
      icon: 'https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png'
    }
  ]);
}