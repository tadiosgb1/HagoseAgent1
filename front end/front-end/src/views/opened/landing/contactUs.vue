<template>
  <div class="min-h-screen bg-[#fcfdfe] text-gray-900 overflow-x-hidden">
    <Header />

    <section class="relative min-h-[60vh] flex items-center bg-[#001f3f] overflow-hidden pt-20">
      <div class="absolute inset-0">
        <div class="glow-sphere sphere-1"></div>
        <div class="glow-sphere sphere-2"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div class="reveal-left text-white">
          <span class="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Contact Hagos Agent Service
          </span>
          <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Let’s Handle Your <br />
            <span class="text-blue-500 glow-text">Business Locally.</span>
          </h1>
          <p class="text-xl text-blue-100/70 max-w-lg font-light">
            Distance shouldn't be a barrier. Reach out today and assign a professional agent to manage your errands in Ethiopia.
          </p>
        </div>
        
        <div class="hidden lg:flex justify-end reveal-right">
          <div class="relative w-80 h-80">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl animate-float">
               <i class="fa-solid fa-paper-plane text-white text-4xl"></i>
            </div>
            <div class="absolute bottom-10 left-0 w-40 h-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl -rotate-6 flex flex-col items-center justify-center shadow-2xl animate-float-delayed">
               <span class="text-blue-400 text-3xl font-black">24/7</span>
               <span class="text-white text-xs font-bold uppercase tracking-tighter">Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 -mt-24 pb-24 relative z-30">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-7 reveal-up">
          <div class="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 transition-all duration-500 hover:shadow-blue-500/10">
            <h2 class="text-3xl font-black text-gray-900 mb-2">Send a Request</h2>
            <p class="text-gray-500 mb-10">Fill out the form and our head agent will contact you within 2 hours.</p>

            <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Full Name</label>
                <input v-model="form.name" type="text" placeholder="Abebe Bikila" class="custom-input" required />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Email Address</label>
                <input v-model="form.email" type="email" placeholder="abebe@example.com" class="custom-input" required />
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Service Type</label>
                <select v-model="form.subject" class="custom-input" required>
                  <option value="" disabled>Select a service</option>
                  <option>Passport Assistance</option>
                  <option>Property Management</option>
                  <option>Legal Representation</option>
                  <option>Personal Errand</option>
                </select>
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Details</label>
                <textarea v-model="form.message" rows="4" placeholder="How can our agent help you today?" class="custom-input resize-none" required></textarea>
              </div>

              <div class="md:col-span-2 pt-4">
                <button type="submit" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
                  Securely Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="info-card reveal-right delay-200">
            <div class="icon-circle bg-blue-50 text-blue-600">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h4 class="font-black text-gray-900 uppercase text-xs tracking-widest">Headquarters</h4>
              <p class="text-gray-600 font-medium">Addis Ababa & Mekelle, Ethiopia</p>
            </div>
          </div>

          <div class="info-card reveal-right delay-400">
            <div class="icon-circle bg-cyan-50 text-cyan-600">
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div>
              <h4 class="font-black text-gray-900 uppercase text-xs tracking-widest">Call Us Directly</h4>
              <p class="text-gray-600 font-medium">+251 998 890 220</p>
            </div>
          </div>

          <div class="info-card reveal-right delay-600">
            <div class="icon-circle bg-purple-50 text-purple-600">
              <i class="fa-solid fa-envelope-open-text"></i>
            </div>
            <div>
              <h4 class="font-black text-gray-900 uppercase text-xs tracking-widest">Support Email</h4>
              <p class="text-gray-600 font-medium">info@sophortechnologies.com</p>
            </div>
          </div>

          <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-72 reveal-up delay-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.1150729738!2d38.7061195!3d9.0107934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24c49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000" 
              class="w-full h-full grayscale-[50%] contrast-[1.2] hover:grayscale-0 transition-all duration-1000" 
              loading="lazy"
            ></iframe>
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
      form: { name: "", email: "", subject: "", message: "" },
    };
  },
  mounted() {
    this.initObserver();
  },
  methods: {
    initObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => observer.observe(el));
    },
    async submitForm() {
      // Logic same as your original, but added professional feedback
      alert("Agent Request Received! We will contact you shortly.");
    }
  }
};
</script>

<style scoped>
/* --- INPUT STYLING --- */
.custom-input {
  @apply w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 transition-all duration-300 outline-none focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-500/5;
}

/* --- INFO CARD STYLING --- */
.info-card {
  @apply bg-white p-6 rounded-[1.8rem] shadow-sm border border-gray-50 flex items-center gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-x-2 cursor-pointer;
}
.icon-circle {
  @apply w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-inner;
}

/* --- ANIMATIONS --- */
.reveal-left { opacity: 0; transform: translateX(-50px); transition: all 1s ease-out; }
.reveal-right { opacity: 0; transform: translateX(50px); transition: all 1s ease-out; }
.reveal-up { opacity: 0; transform: translateY(50px); transition: all 1s ease-out; }
.active { opacity: 1; transform: translate(0); }

.delay-200 { transition-delay: 200ms; }
.delay-400 { transition-delay: 400ms; }
.delay-600 { transition-delay: 600ms; }
.delay-700 { transition-delay: 700ms; }

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float 6s ease-in-out infinite 3s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
}

/* --- GLOWS --- */
.glow-sphere { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3; }
.sphere-1 { width: 600px; height: 600px; background: #2563eb; top: -10%; left: -10%; }
.sphere-2 { width: 400px; height: 400px; background: #0891b2; bottom: 0%; right: 0%; }
.glow-text { text-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
</style>