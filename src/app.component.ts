import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { HowItWorksComponent } from './components/how-it-works.component';
import { BenefitsComponent } from './components/benefits.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { RecentWorkComponent } from './components/recent-work.component';
import { PricingComponent } from './components/pricing.component';
import { FaqComponent } from './components/faq.component';
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
    FaqComponent,
    FooterComponent
  ],
  template: `
    <div class="font-sans antialiased text-slate-900 bg-[#F9F5F2] overflow-x-hidden selection:bg-orange-200">
      <app-navbar />
      <main>
        <app-hero />
        <app-how-it-works />
        <app-benefits />
        <app-testimonials />
        <app-recent-work />
        <app-pricing />
        <app-faq />
      </main>
      <app-footer />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}