import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section
      class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
    >
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <!-- Left Content -->
        <div class="max-w-2xl">
          <h1
            class="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-bold tracking-tight text-[#191919] mb-8"
          >
            Building digital
            <span class="font-serif italic font-light">experiences</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-500 font-medium">
            Full-stack developer & UI/UX enthusiast.
          </p>
        </div>

        <!-- Right Card (Visual) -->
        <div
          class="relative w-full max-w-md lg:max-w-full mx-auto transform hover:scale-[1.02] transition-transform duration-500"
        >
          <!-- Card Container -->
          <div
            class="relative bg-gradient-to-br from-[#8054FF] via-[#B838EA] to-[#6A00FF] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden aspect-[4/5] md:aspect-square flex flex-col justify-between animate-float hover:scale-[1.02] transition-all duration-500 ease-out origin-center perspective-1000 group"
          >
            <!-- Abstract Background Shapes (CSS Shapes) -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3"
            ></div>

            <!-- Top Badge -->
            <div class="relative z-10 self-start">
              <div
                class="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg"
              >
                <div
                  class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"
                ></div>
                <span class="text-sm font-semibold tracking-wide"
                  >Start today</span
                >
              </div>
            </div>

            <!-- Middle Text -->
            <div class="relative z-10 mt-auto mb-12">
              <h2 class="text-5xl md:text-6xl font-bold leading-tight mb-4">
                Manan's<br />Portfolio
              </h2>
              <p class="text-lg opacity-90">
                Crafting code with passion.
              </p>
            </div>

            <!-- Bottom Action -->
            <div
              class="relative z-10 bg-white text-black p-4 rounded-2xl flex items-center justify-between shadow-xl cursor-pointer group"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec199d_Star--Streamline-Nova.png"
                    class="w-5 h-5"
                    alt="Star"
                  />
                </div>
                <div class="flex flex-col">
                  <span
                    class="text-xs font-bold uppercase tracking-wider text-slate-500"
                    >Available for hire</span
                  >
                  <span class="font-bold text-lg">View Projects</span>
                </div>
              </div>
              <div
                class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <!-- Floating Card Mockup Overlay -->
            <img
              src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec196c_card.png"
              alt="Membership Card"
              class="absolute top-[20%] -right-[20%] w-[80%] shadow-2xl rotate-[-12deg] z-0 opacity-90 hover:rotate-[-8deg] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
