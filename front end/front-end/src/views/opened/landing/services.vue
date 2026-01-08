<template>
  <div class="min-h-screen bg-[#f8fafc] text-gray-900 overflow-x-hidden">
    <Header />

    <section class="relative min-h-[90vh] flex items-center justify-center bg-[#001f3f] overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="glow-blob blob-1"></div>
        <div class="glow-blob blob-2"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <h1 class="hero-title text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          Your Trusted <span class="text-blue-500 text-glow">Physical Presence</span> in Ethiopia
        </h1>
        
        <p class="hero-subtitle text-xl md:text-2xl text-blue-100 opacity-0 max-w-3xl mx-auto mb-12 leading-relaxed">
          Experience world-class agency representation. From legal documents to property management, we act on your behalf with integrity and speed.
        </p>

        <div class="flex flex-wrap justify-center gap-6 hero-btns opacity-0">
          <router-link to="/contact-us" class="btn-primary">Book an Agent</router-link>
          <router-link to="/about" class="btn-secondary">Learn More</router-link>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <i class="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>

    <section class="py-32 max-w-7xl mx-auto px-6">
      <div class="text-center mb-24 reveal">
        <h2 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Our Capabilities</h2>
        <div class="h-1.5 w-32 bg-blue-600 mx-auto rounded-full glow-line"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div 
          v-for="(service, index) in agentServices" 
          :key="index" 
          class="service-card-premium reveal-step"
        >
          <div class="card-glow"></div>
          <div class="content-wrapper">
            <div class="icon-circle shadow-blue-500/20">
              <i :class="[service.icon, 'text-blue-600 text-4xl']"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-blue-900">{{ service.title }}</h3>
            <p class="text-gray-600 text-lg leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {
      agentServices: [
        { icon: "fa-solid fa-passport", title: "Travel Assistance", desc: "Expert handling of passport renewals, yellow cards, and visa documentations." },
        { icon: "fa-solid fa-home", title: "Property Management", desc: "Local representation for tenant oversight, repairs, and property security." },
        { icon: "fa-solid fa-money-bill-trend-up", title: "Financial Transactions", desc: "Reliable processing of local payments, banking errands, and tax filings." },
        { icon: "fa-solid fa-file-contract", title: "Legal Documentation", desc: "Handling power of attorney and government document authentications." },
        { icon: "fa-solid fa-clock", title: "Errand Handling", desc: "Fast and professional execution of personal or business errands anywhere in the city." },
        { icon: "fa-solid fa-handshake", title: "Business Meetings", desc: "Professional representation in meetings to protect your local interests." }
      ]
    };
  },
  mounted() {
    this.initScrollReveal();
  },
  methods: {
    initScrollReveal() {
      const observerOptions = { threshold: 0.15 };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      // Target all elements we want to animate on scroll
      document.querySelectorAll('.reveal, .reveal-step').forEach((el) => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
/* --- HERO ANIMATIONS --- */
.hero-title {
  animation: slideDownFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-subtitle {
  animation: slideUpFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.4s;
}
.hero-btns {
  animation: slideUpFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.7s;
}

@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-50px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- GLOWING BACKGROUND BLOBS --- */
.glow-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: 0;
}
.blob-1 {
  width: 500px; height: 500px; background: #2563eb;
  top: -100px; left: -100px;
  animation: drift 20s infinite alternate;
}
.blob-2 {
  width: 400px; height: 400px; background: #1e40af;
  bottom: -50px; right: -50px;
  animation: drift 15s infinite alternate-reverse;
}
@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(100px, 50px) scale(1.1); }
}

/* --- SERVICE CARDS (STEP-BY-STEP) --- */
.reveal-step {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Staggered Delay for the 6 items */
.reveal-step.active:nth-child(1) { transition-delay: 0.1s; opacity: 1; transform: translateY(0) scale(1); }
.reveal-step.active:nth-child(2) { transition-delay: 0.3s; opacity: 1; transform: translateY(0) scale(1); }
.reveal-step.active:nth-child(3) { transition-delay: 0.5s; opacity: 1; transform: translateY(0) scale(1); }
.reveal-step.active:nth-child(4) { transition-delay: 0.7s; opacity: 1; transform: translateY(0) scale(1); }
.reveal-step.active:nth-child(5) { transition-delay: 0.9s; opacity: 1; transform: translateY(0) scale(1); }
.reveal-step.active:nth-child(6) { transition-delay: 1.1s; opacity: 1; transform: translateY(0) scale(1); }

/* --- PREMIUM CARD STYLING --- */
.service-card-premium {
  @apply relative bg-white p-10 rounded-3xl border border-gray-100 overflow-hidden shadow-xl;
  transition: all 0.4s ease;
}

.service-card-premium:hover {
  @apply -translate-y-4 border-blue-400 shadow-2xl;
}

.card-glow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(37, 99, 235, 0.06), transparent 40%);
  pointer-events: none;
}

.icon-circle {
  @apply w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500;
}

.service-card-premium:hover .icon-circle {
  @apply bg-blue-600 scale-110 rotate-[10deg];
}

.service-card-premium:hover i {
  @apply text-white;
}

/* --- BUTTONS --- */
.btn-primary {
  @apply bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50;
}
.btn-secondary {
  @apply border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all;
}

.text-glow {
  text-shadow: 0 0 20px rgba(37, 99, 235, 0.8);
}
</style>