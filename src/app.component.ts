import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FadeInDirective } from './directives/fade-in.directive';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { HowItWorksComponent } from './components/how-it-works.component';
import { BenefitsComponent } from './components/benefits.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { RecentWorkComponent } from './components/recent-work.component';
import { PricingComponent } from './components/pricing.component';

import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HowItWorksComponent,
    BenefitsComponent,
    TestimonialsComponent,
    RecentWorkComponent,
    PricingComponent,

    FooterComponent,
    FadeInDirective
  ],
  template: `
    <div class="font-sans antialiased text-slate-900 bg-[#F9F5F2] overflow-x-hidden selection:bg-orange-200">
      <app-navbar />
      <main>
        <app-hero appFadeIn />
        <app-how-it-works appFadeIn />
        <app-benefits appFadeIn />
        <app-testimonials appFadeIn />
        <app-recent-work appFadeIn />
        <app-pricing appFadeIn />
        
      </main>
      <app-footer appFadeIn />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}