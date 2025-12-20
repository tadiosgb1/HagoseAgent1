<template>
  <footer class="bg-dark-navy text-white py-16 mt-20 border-t border-royal-blue">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

      <!-- COMPANY -->
      <div>
        <h2 class="text-2xl font-bold text-royal-blue">Alina Agent Service</h2>
        <p class="mt-3 text-gray-300">
          Trusted support service based in Addis Ababa, helping clients worldwide complete tasks in Ethiopia, from document processing to payments and errands.
        </p>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-lg font-semibold text-gold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-gold transition">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-gold transition">About</router-link></li>
          <li><router-link to="/services" class="hover:text-gold transition">Services</router-link></li>
          <li><router-link to="/contact-us" class="hover:text-gold transition">Contact</router-link></li>
        </ul>
      </div>

      <!-- SERVICES -->
      <div>
        <h3 class="text-lg font-semibold text-gold mb-4">Services</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Document & Embassy Assistance</li>
          <li>Payments & Online Transactions</li>
          <li>Errands & Local Representation</li>
          <li>Property & Home Support</li>
          <li>Appointments & Scheduling</li>
          <li>Information & Research Support</li>
        </ul>
      </div>

      <!-- CONTACT & SOCIALS -->
      <div>
        <h3 class="text-lg font-semibold text-gold mb-4">Contact</h3>
        <ul class="space-y-2 text-gray-300">
          <li>Email: info@alinaagents.com</li>
          <li>Phone: +251 998 890 220</li>
          <li>Address: Addis Ababa & Mekele, Ethiopia</li>
        </ul>

        <div class="flex space-x-4 mt-4 text-2xl text-gray-300">
          <a href="#" class="hover:text-gold transition"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-gold transition"><i class="fab fa-tiktok"></i></a>
          <a href="#" class="hover:text-gold transition"><i class="fab fa-youtube"></i></a>
          <a href="#" class="hover:text-gold transition"><i class="fab fa-instagram"></i></a>
          <a href="#" class="hover:text-gold transition"><i class="fab fa-telegram"></i></a>
          <a href="#" class="hover:text-gold transition"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div class="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6 text-sm">
      Powered by <span class="text-gold">Alina Agent Service</span> © {{ new Date().getFullYear() }} — All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.bg-dark-navy { background-color: #0A1A2F; }
.text-royal-blue { color: #0052cc; }
.text-gold { color: #D4AF37; }

/* Smooth hover transitions for links and icons */
a:hover { transition: color 0.3s; }
</style>
