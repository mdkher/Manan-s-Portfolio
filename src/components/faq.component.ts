import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-6 bg-[#F9F5F2]">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <!-- Header -->
        <div class="lg:col-span-1">
          <h2 class="text-4xl md:text-5xl font-bold text-[#191919] mb-8 sticky top-24">
            <span class="font-serif italic font-light block mb-2">Frequently</span>
            asked questions
          </h2>
          <div class="hidden lg:block sticky top-60">
             <div class="bg-gradient-to-br from-[#FFD000] to-[#FF9900] p-8 rounded-[2rem] text-center shadow-lg relative overflow-hidden group">
                <div class="relative z-10">
                  <div class="w-16 h-16 bg-black rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19b9_Group%2010.png" class="w-full h-full object-cover" alt="Avatar">
                  </div>
                  <h3 class="text-2xl font-bold text-[#191919] mb-4">Book a 15-min intro call</h3>
                  <a href="#book" class="inline-block bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">Book a call</a>
                </div>
             </div>
          </div>
        </div>

        <!-- Questions -->
        <div class="lg:col-span-2 space-y-4">
           @for (item of faqItems(); track item.question; let i = $index) {
             <div class="bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md" (click)="toggle(i)">
                <div class="flex justify-between items-center gap-4">
                   <h3 class="text-lg font-bold text-[#191919]">{{ item.question }}</h3>
                   <div class="w-6 h-6 flex items-center justify-center transition-transform duration-300" [class.rotate-180]="item.isOpen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                   </div>
                </div>
                <div class="overflow-hidden transition-all duration-300" [style.max-height]="item.isOpen ? '500px' : '0px'" [style.opacity]="item.isOpen ? '1' : '0'">
                   <p class="pt-4 text-slate-600 leading-relaxed">{{ item.answer }}</p>
                </div>
             </div>
           }
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  faqItems = signal([
    {
      question: 'How fast will I receive my designs?',
      answer: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
      isOpen: false
    },
    {
      question: 'How does onboarding work?',
      answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour. Once accepted, you're ready to rock.",
      isOpen: false
    },
    {
      question: 'Who are the designers?',
      answer: 'Designjoy is a one-man agency, ran by Brett, the founder. You work directly with me.',
      isOpen: false
    },
    {
      question: 'Is there a limit to how many requests I can make?',
      answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
      isOpen: false
    },
    {
       question: 'How does the pause feature work?',
       answer: 'Billing cycles are based on a 31 day period. If you pause after 21 days, you have 10 days remaining to use anytime in the future.',
       isOpen: false
    }
  ]);

  toggle(index: number) {
    this.faqItems.update(items => items.map((item, i) => 
      i === index ? { ...item, isOpen: !item.isOpen } : item
    ));
  }
}