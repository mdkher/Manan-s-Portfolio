import { Directive, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Initial styles for the element before it scrolls into view
    this.el.nativeElement.classList.add(
      'opacity-0',
      'translate-y-10',
      'transition-all',
      'duration-1000',
      'ease-out'
    );
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible styles
          this.el.nativeElement.classList.remove('opacity-0', 'translate-y-10');
          this.el.nativeElement.classList.add('opacity-100', 'translate-y-0');
          
          // Stop observing once animated
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/after
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
