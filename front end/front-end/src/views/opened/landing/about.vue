<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden">
    <Header />

    <section class="relative min-h-[85vh] flex items-center justify-center bg-[#001f3f] overflow-hidden pt-20">
      <div class="absolute inset-0">
        <div class="glow-sphere sphere-1"></div>
        <div class="glow-sphere sphere-2"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 class="hero-main-title text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          Reliable <span class="text-blue-500 glow-text">Representation</span> <br /> 
          Across Ethiopia
        </h1>
        <p class="hero-description text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          The bridge between you and your local needs. We act as your physical agent for legal, financial, and personal errands with professional excellence.
        </p>
        <div class="hero-actions opacity-0 flex flex-wrap justify-center gap-6">
          <router-link to="/contact-us" class="btn-glow-blue">Start Your Agency</router-link>
          <router-link to="/services" class="btn-outline-white">Explore Services</router-link>
        </div>
      </div>
    </section>

    <section class="py-24 max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="reveal-left">
          <div class="relative group cursor-pointer">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <img 
              src="../../../assets/img/mvission.png" 
              alt="Hagos Agent Service" 
              class="relative rounded-2xl shadow-2xl border border-blue-100 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        <div class="space-y-12">
          <div class="reveal-right delay-300">
            <h2 class="text-4xl font-extrabold text-blue-600 mb-4 flex items-center">
              <span class="w-10 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Our Mission
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed pl-4 border-l-2 border-blue-500/20">
              To empower the diaspora and busy professionals by providing a trusted, transparent, and physically present agency that handles local tasks as if you were there yourself.
            </p>
          </div>

          <div class="reveal-right delay-600">
            <h2 class="text-4xl font-extrabold text-blue-600 mb-4 flex items-center">
              <span class="w-10 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Our Vision
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed pl-4 border-l-2 border-blue-500/20">
              To be the most reliable agent service in East Africa, setting the gold standard for remote representation through integrity, innovation, and local expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50 border-y border-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center mb-20 reveal-up">
        <h2 class="text-4xl font-black text-gray-900">Our Core Principles</h2>
        <div class="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full glow-line"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <div v-for="(value, index) in coreValues" :key="index" 
             class="group reveal-step bg-white p-10 rounded-3xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2"
             :style="{ animationDelay: (index * 200) + 'ms' }">
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-500">
            <i :class="[value.icon, 'text-blue-600 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:text-white']"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-800 transition-colors group-hover:text-blue-600">{{ value.title }}</h3>
          <p class="text-gray-500 leading-relaxed text-lg">{{ value.desc }}</p>
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
      coreValues: [
        { icon: 'fa-solid fa-shield-check', title: 'Absolute Integrity', desc: 'Trust is our currency. We handle your financial and legal affairs with total honesty.' },
        { icon: 'fa-solid fa-bolt', title: 'Rapid Execution', desc: 'Time is critical. Our agents move fast to meet deadlines and complete your errands.' },
        { icon: 'fa-solid fa-eye', title: 'Full Transparency', desc: 'Stay updated with real-time reporting and documentation for every task we perform.' },
        { icon: 'fa-solid fa-user-tie', title: 'Professionalism', desc: 'Our agents are trained to represent your interests with the highest corporate standards.' },
        { icon: 'fa-solid fa-earth-africa', title: 'Local Expertise', desc: 'Deep knowledge of local laws and systems to navigate complexities on your behalf.' },
        { icon: 'fa-solid fa-headset', title: 'Constant Support', desc: 'We are always reachable to provide updates and peace of mind regarding your tasks.' },
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
      }, { threshold: 0.15 });

      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-step').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>

<style scoped>
/* --- HERO ANIMATIONS --- */
.hero-main-title {
  animation: blurSlideDown 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-description {
  animation: fadeInUp 1.2s ease-out forwards 0.4s;
  opacity: 0;
}
.hero-actions {
  animation: fadeInUp 1s ease-out forwards 0.8s;
}

@keyframes blurSlideDown {
  from { opacity: 0; transform: translateY(-40px); filter: blur(15px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- GLOWING SPHERES --- */
.glow-sphere { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3; pointer-events: none; }
.sphere-1 { width: 600px; height: 600px; background: #2563eb; top: -10%; left: -10%; animation: pulse 8s infinite alternate; }
.sphere-2 { width: 500px; height: 500px; background: #0891b2; bottom: -10%; right: -5%; animation: pulse 10s infinite alternate-reverse; }

@keyframes pulse { from { transform: scale(1); opacity: 0.2; } to { transform: scale(1.2); opacity: 0.4; } }

/* --- SCROLL REVEAL (JS Triggered) --- */
.reveal-left { opacity: 0; transform: translateX(-60px); transition: all 1s ease-out; }
.reveal-right { opacity: 0; transform: translateX(60px); transition: all 1s ease-out; }
.reveal-up { opacity: 0; transform: translateY(50px); transition: all 1s ease-out; }
.reveal-step { opacity: 0; transform: translateY(30px) scale(0.9); transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

.active { opacity: 1; transform: translate(0) scale(1); }

/* --- BUTTONS & FX --- */
.btn-glow-blue {
  @apply bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95;
}
.btn-outline-white {
  @apply border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all active:scale-95;
}

.glow-text { text-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
.glow-line { box-shadow: 0 0 15px rgba(37, 99, 235, 0.6); }

.delay-300 { transition-delay: 300ms; }
.delay-600 { transition-delay: 600ms; }
</style>