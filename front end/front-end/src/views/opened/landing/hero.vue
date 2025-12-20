<template>
  <section class="relative overflow-hidden py-28 bg-white">

    <!-- BACKGROUND GRADIENT + PATTERN -->
    <div class="absolute inset-0 bg-gradient-to-br from-royal-blue/30 via-white/50 to-dark-navy/30"></div>
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>

    <!-- FLOATING SHAPES -->
    <div class="floating-circle bg-gold/30 top-20 left-16"></div>
    <div class="floating-circle bg-royal-blue/20 bottom-32 right-20"></div>

    <!-- CONTENT -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fadeIn">

      <h1 class="text-5xl md:text-6xl font-black text-dark-navy leading-tight drop-shadow-sm">
        Your Trusted Support Service in <span class="text-royal-blue">Ethiopia</span>
      </h1>

      <p class="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
        Alina Agent Service helps you complete important tasks efficiently — from document processing, payments, deliveries, and office follow-ups, to property and travel support. We handle everything with speed, safety, and professionalism.
      </p>

      <!-- CTA BUTTONS -->
      <div class="mt-10 flex flex-wrap justify-center gap-5">
        <router-link
          to="/register"
          class="bg-royal-blue hover:bg-dark-navy text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Get Started
        </router-link>

        <router-link
          to="/login"
          class="bg-white text-dark-navy border border-gray-300 px-10 py-4 text-lg font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Login
        </router-link>
      </div>

      <!-- STAT BAR -->
      <div class="mt-14 flex flex-wrap justify-center gap-14 text-center">
        <div class="animate-slideUpDelay1">
          <p class="text-4xl font-extrabold text-royal-blue">+10,000</p>
          <p class="text-gray-700 text-sm">Tasks Completed</p>
        </div>

        <div class="animate-slideUpDelay2">
          <p class="text-4xl font-extrabold text-gold">99.8%</p>
          <p class="text-gray-700 text-sm">On-Time Delivery</p>
        </div>

        <div class="animate-slideUpDelay3">
          <p class="text-4xl font-extrabold text-royal-blue">4.97★</p>
          <p class="text-gray-700 text-sm">Client Satisfaction</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Brand Colors */
.text-royal-blue { color: #0052cc; }
.bg-royal-blue { background-color: #0052cc; }
.text-dark-navy { color: #0A1A2F; }
.bg-dark-navy { background-color: #0A1A2F; }
.text-gold { color: #D4AF37; }
.bg-gold { background-color: #D4AF37; }

/* Fade-in main content */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease forwards;
}

/* Floating circles */
.floating-circle {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 9999px;
  filter: blur(40px);
  animation: float 8s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -30px); }
}

/* Stats sliding */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slideUpDelay1 { animation: slideUp 1s ease forwards 0.7s; opacity: 0; }
.animate-slideUpDelay2 { animation: slideUp 1s ease forwards 1.0s; opacity: 0; }
.animate-slideUpDelay3 { animation: slideUp 1s ease forwards 1.3s; opacity: 0; }
</style>
