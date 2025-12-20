<template>
  <div class="min-h-screen bg-white text-gray-800">

    <!-- HEADER -->
    <Header />

    <!-- HERO SECTION -->
    <Hero />

    <!-- ABOUT US -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-royal-blue mb-4">About Us</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Alina Agent Service is a trusted support service based in Addis Ababa. We help people around the world complete their important tasks in Ethiopia. Whether you need documents processed, items delivered, payments made, or office follow-ups, we handle everything with care and speed.
        </p>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-royal-blue mb-8">What We Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-file-invoice text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Document & Embassy Assistance</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-credit-card text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Payments & Online Transactions</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-person-biking text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Errands & Local Representation</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-home text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Property & Home Support</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-calendar-check text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Appointments & Scheduling</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-globe text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Information, Research & Communication Support</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-passport text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Passport & Travel Assistance</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-file-lines text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Filling Forms & Online Applications</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-code text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Connecting Clients with Trusted Developers</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-royal-blue mb-4">Why Choose Us</h2>
        <p class="text-lg text-gray-700 mb-12">Your tasks matter to us — we complete them professionally.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-comments text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Clear Communication</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-camera text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Photo & Video Confirmation</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-hand-holding-dollar text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Affordable Fees</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-shield-check text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Safe & Reliable</h3>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <i class="fa-solid fa-bolt text-gold text-4xl mb-4"></i>
            <h3 class="text-xl font-semibold text-dark-navy mb-2">Quick Service</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-20">
      <Fqs />
    </section>

    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import Hero from "./hero.vue";
import Fqs from "./fqs.vue";

export default {
  components: { Header, Footer, Hero, Fqs },
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
</style>
