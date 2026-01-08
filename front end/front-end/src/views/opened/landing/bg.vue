<template>
  <section class="py-24 bg-slate-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="reveal-left">
          <div class="relative group cursor-pointer">
            <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <img 
              src="../../../assets/img/mvission.png" 
              alt="Hibret Agent Service Team" 
              class="relative w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/50 transform transition-transform duration-700 group-hover:scale-[1.01]" 
            />
          </div>
        </div>

        <div class="space-y-8 reveal-right">
          <div>
            <div class="flex items-center space-x-4 mb-4">
              <span class="h-1 w-12 bg-blue-600 rounded-full glow-line"></span>
              <span class="text-blue-600 font-bold tracking-wider uppercase text-sm">Who We Are</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              About <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Hibret Agent</span>
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-100 pl-6">
            Hibret Agent Service is a trusted support service based in Addis Ababa. We help people around the world complete their important tasks in Ethiopia. Whether you need documents processed, items delivered, payments made, or office follow-ups, we handle everything with care and speed.
          </p>

          <div class="pt-4">
            <router-link to="/about" class="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/50 hover:-translate-y-1">
              Read More
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BgSection",
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
      }, { threshold: 0.2 }); // Trigger when 20% visible

      document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
/* --- SCROLL ANIMATIONS --- */
.reveal-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.reveal-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.active {
  opacity: 1;
  transform: translateX(0);
}

/* --- GLOW EFFECTS --- */
.glow-line {
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
}
</style>