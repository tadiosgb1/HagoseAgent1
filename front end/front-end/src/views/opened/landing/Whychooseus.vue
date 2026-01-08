<template>
  <section class="py-24 bg-slate-50 relative overflow-hidden">
    
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#2563eb" stroke-width="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16 reveal-up">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Why Choose <span class="text-blue-600">Us?</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          We treat your errands with the same urgency and care as if they were our own.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group reveal-scale bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          :class="{ 'lg:col-span-1': index < 3, 'lg:col-span-1 lg:col-start-auto': index >= 3 }" 
          :style="{ transitionDelay: (index * 100) + 'ms' }"
        >
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
            <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>

          <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <i :class="[feature.icon, 'text-2xl text-blue-600 group-hover:text-white transition-colors duration-300']"></i>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>

      </div>

      <div class="hidden lg:block absolute bottom-24 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent -z-10"></div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChooseUs",
  data() {
    return {
      features: [
        { 
          icon: 'fa-solid fa-comments', 
          title: 'Clear Communication', 
          desc: 'We keep you in the loop. No ghosting, just consistent updates via your preferred channel.' 
        },
        { 
          icon: 'fa-solid fa-camera', 
          title: 'Photo & Video Proof', 
          desc: 'Trust but verify. We send digital visual confirmation for every task we complete.' 
        },
        { 
          icon: 'fa-solid fa-bolt', 
          title: 'Quick Turnaround', 
          desc: 'Time is money. We optimize our routes and processes to finish your tasks fast.' 
        },
        // These last two will be centered on the bottom row via CSS grid logic if needed, 
        // or just flow naturally in the grid.
        { 
          icon: 'fa-solid fa-shield-check', 
          title: 'Safe & Reliable', 
          desc: 'Your data and assets are handled with strict confidentiality and security protocols.' 
        },
        { 
          icon: 'fa-solid fa-hand-holding-dollar', 
          title: 'Affordable Fees', 
          desc: 'Premium service without the premium price tag. Transparent pricing with no hidden costs.' 
        }
      ]
    }
  },
  mounted() {
    this.observeElements();
  },
  methods: {
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
/* --- ANIMATIONS --- */
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.active {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* --- GRID CENTERING HACK FOR 5 ITEMS --- */
/* This ensures the last two items in a 3-column grid are centered */
@media (min-width: 1024px) {
  .grid > div:nth-last-child(2) {
    grid-column-start: 1; /* Shift 4th item to start slightly offset if you wanted specific layout, but simpler is better: */
    margin-left: auto; /* Push towards center */
  }
  .grid > div:last-child {
    margin-right: auto; /* Push towards center */
  }
  
  /* Actually, a cleaner CSS Grid approach for 5 items in 3 cols: */
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
  .grid > div {
    grid-column: span 6; /* Mobile: Full width */
  }
}
@media (min-width: 768px) {
  .grid > div {
    grid-column: span 3; /* Tablet: 2 per row */
  }
}
@media (min-width: 1024px) {
  .grid > div {
    grid-column: span 2; /* Desktop: 3 per row (6/2=3) */
  }
  /* Center the last two items (4 and 5) */
  .grid > div:nth-child(4) {
    grid-column: 2 / span 2; /* Start at col 2, span 2 */
  }
  .grid > div:nth-child(5) {
    grid-column: 4 / span 2; /* Start at col 4, span 2 */
  }
}
</style>