<template>
  <section class="relative h-[90vh] w-full overflow-hidden bg-slate-950">
    <div class="absolute inset-0 z-0">
      <transition-group name="fade-ken-burns">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <div 
            class="absolute inset-0 bg-cover bg-center scale-animation"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
      </transition-group>
    </div>

    <div class="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
      <div class="max-w-3xl">
        <transition name="slide-fade-content" mode="out-in">
          <div :key="currentSlide" class="space-y-6">
            <span class="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
              {{ slides[currentSlide].tag }}
            </span>
            
            <h1 class="text-5xl md:text-7xl font-black text-white leading-tight">
              {{ slides[currentSlide].titlePart1 }} <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {{ slides[currentSlide].titlePart2 }}
              </span>
            </h1>

            <p class="text-xl text-slate-300/80 leading-relaxed font-light max-w-xl">
              {{ slides[currentSlide].description }}
            </p>

            <div class="flex flex-wrap gap-5 pt-6">
              <button class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95">
                Start Errand Now
              </button>
              <button class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold rounded-full transition-all active:scale-95">
                Our Services
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="absolute bottom-12 right-6 md:right-12 z-20 flex flex-col gap-4">
      <button 
        v-for="(slide, index) in slides" 
        :key="'indicator-' + slide.id"
        @click="goToSlide(index)"
        class="group flex items-center justify-end gap-4"
      >
        <span :class="['text-xs font-bold transition-all duration-500', currentSlide === index ? 'text-white translate-x-0 opacity-100' : 'text-white/20 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0']">
          0{{ index + 1 }}
        </span>
        <div :class="['h-[2px] transition-all duration-700', currentSlide === index ? 'w-16 bg-blue-500' : 'w-8 bg-white/20 group-hover:bg-white/50']"></div>
      </button>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pb-8 hidden md:block">
      <div class="w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-500 to-transparent relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
  data() {
    return {
      currentSlide: 0,
      autoPlayInterval: null,
      slides: [
        {
          id: 1,
          tag: "Your Local Hands",
          titlePart1: "Reliable Agency",
          titlePart2: "In Addis Ababa",
          description: "Distance is no longer a barrier. We process your documents, handle payments, and represent your interests locally with absolute integrity.",
          image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1920&q=80"
        },
        {
          id: 2,
          tag: "Property Expert",
          titlePart1: "Real Estate",
          titlePart2: "Representation",
          description: "From property follow-ups to construction monitoring, our agents provide high-definition video updates on your investments.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        },
        {
          id: 3,
          tag: "Legal & Logistics",
          titlePart1: "Fast Document",
          titlePart2: "Authentication",
          description: "Skip the travel. We handle embassy paperwork, passport renewals, and power of attorney signatures on your behalf.",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
        }
      ]
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 7000);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
};
</script>

<style scoped>
/* KEN BURNS ANIMATION */
.scale-animation {
  animation: kenburns 20s ease infinite alternate;
}

@keyframes kenburns {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

/* TRANSITIONS */
.fade-ken-burns-enter-active, .fade-ken-burns-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-ken-burns-enter-from, .fade-ken-burns-leave-to {
  opacity: 0;
}

.slide-fade-content-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
}
.slide-fade-content-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-content-enter-from {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(10px);
}
.slide-fade-content-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* SCROLL LINE ANIMATION */
@keyframes scroll-line {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
.animate-scroll-line {
  animation: scroll-line 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>