<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16 reveal-up">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          What We <span class="text-blue-600">Do</span>
        </h2>
        <div class="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
        <p class="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Comprehensive on-the-ground support in Ethiopia. We bridge the gap so you can manage your affairs remotely.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group reveal-card bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 cursor-default"
          :style="{ transitionDelay: (index * 50) + 'ms' }"
        >
          <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <i :class="[service.icon, 'text-2xl text-blue-600 group-hover:text-white transition-colors duration-300']"></i>
          </div>
          
          <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            Professional assistance handled with care and precision.
          </p>
        </div>
      </div>

      <div class="text-center reveal-up delay-300">
        <router-link to="/services" class="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1">
          Explore All Services
          <i class="fa-solid fa-arrow-right-long"></i>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceHighlights",
  data() {
    return {
      services: [
        { icon: "fa-solid fa-file-invoice", title: "Document & Embassy Assistance" },
        { icon: "fa-solid fa-credit-card", title: "Payments & Online Transactions" },
        { icon: "fa-solid fa-person-biking", title: "Errands & Local Representation" },
        { icon: "fa-solid fa-home", title: "Property & Home Support" },
        { icon: "fa-solid fa-calendar-check", title: "Appointments & Scheduling" },
        { icon: "fa-solid fa-globe", title: "Info & Communication Support" },
        { icon: "fa-solid fa-passport", title: "Passport & Travel Assistance" },
        { icon: "fa-solid fa-file-lines", title: "Filling Forms & Applications" },
        { icon: "fa-solid fa-code", title: "Connecting with Developers" },
      ]
    };
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

      document.querySelectorAll('.reveal-up, .reveal-card').forEach(el => {
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

.reveal-card {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.active {
  opacity: 1;
  transform: translateY(0);
}

.delay-300 {
  transition-delay: 300ms;
}
</style>