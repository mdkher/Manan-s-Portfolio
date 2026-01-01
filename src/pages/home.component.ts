import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../directives/fade-in.directive';
import { HeroComponent } from '../components/hero.component';
import { HowItWorksComponent } from '../components/how-it-works.component';
import { BenefitsComponent } from '../components/benefits.component';
import { TestimonialsComponent } from '../components/testimonials.component';
import { RecentWorkComponent } from '../components/recent-work.component';
import { PricingComponent } from '../components/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FadeInDirective,
    HeroComponent,
    HowItWorksComponent,
    BenefitsComponent,
    TestimonialsComponent,
    RecentWorkComponent,
    PricingComponent
  ],
  template: `
    <main>
      <app-hero appFadeIn />
      <app-how-it-works appFadeIn />
      <app-benefits appFadeIn />
      <app-testimonials appFadeIn />
      <app-recent-work appFadeIn />
      <app-pricing appFadeIn />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
