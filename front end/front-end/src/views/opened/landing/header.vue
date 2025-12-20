<template>
  <header class="bg-white shadow fixed w-full top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- LOGO -->
      <router-link to="/" class="text-2xl font-extrabold text-royal-blue">
        Alina <span class="text-gold">Agent</span>
      </router-link>

      <!-- DESKTOP MENU -->
      <nav class="hidden md:flex items-center space-x-8 text-gray-700 font-medium">

        <router-link to="/" class="hover:text-royal-blue transition">Home</router-link>
        <router-link to="/about" class="hover:text-royal-blue transition">About</router-link>

        <!-- SERVICES DROPDOWN -->
        <div class="relative" @mouseleave="servicesOpen = false">
          <button
            @mouseover="servicesOpen = true"
            class="hover:text-royal-blue transition flex items-center gap-1"
          >
            Services <i class="fas fa-chevron-down text-sm"></i>
          </button>

          <div
            v-if="servicesOpen"
            class="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-200"
          >
            <router-link
              v-for="(service, idx) in services"
              :key="idx"
              :to="service.link"
              class="block px-4 py-2 hover:bg-royal-blue/10 hover:text-royal-blue transition"
            >
              {{ service.name }}
            </router-link>
          </div>
        </div>

        <router-link to="/news" class="hover:text-royal-blue transition">News</router-link>
        <router-link to="/events" class="hover:text-royal-blue transition">Events</router-link>

        <router-link to="/contact" class="hover:text-royal-blue transition">Contact</router-link>
      </nav>

      <!-- CTA BUTTONS -->
      <div class="hidden md:flex space-x-4">
        <router-link
          to="/login"
          class="px-5 py-2 bg-gray-100 rounded-lg text-gray-900 hover:bg-gray-200 font-medium transition"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          class="px-5 py-2 bg-royal-blue text-white rounded-lg hover:bg-blue-700 font-medium transition"
        >
          Get Started
        </router-link>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button @click="mobileMenu = !mobileMenu" class="md:hidden text-gray-700 text-3xl">
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div v-if="mobileMenu" class="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-800">

      <router-link to="/" @click="closeMenu" class="block">Home</router-link>
      <router-link to="/about" @click="closeMenu" class="block">About</router-link>

      <!-- SERVICES COLLAPSE MOBILE -->
      <div>
        <button
          @click="mobileServices = !mobileServices"
          class="w-full flex justify-between items-center py-2 font-medium border-b border-gray-200"
        >
          Services <i :class="mobileServices ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </button>
        <div v-if="mobileServices" class="pl-4 mt-2 space-y-1">
          <router-link
            v-for="(service, idx) in services"
            :key="idx"
            :to="service.link"
            @click="closeMenu"
            class="block py-1 hover:text-royal-blue transition"
          >
            {{ service.name }}
          </router-link>
        </div>
      </div>

      <router-link to="/news" @click="closeMenu" class="block">News</router-link>
      <router-link to="/events" @click="closeMenu" class="block">Events</router-link>
      <router-link to="/contact" @click="closeMenu" class="block">Contact</router-link>

      <div class="border-t pt-4 space-y-3">
        <router-link
          to="/login"
          @click="closeMenu"
          class="block bg-gray-100 px-4 py-2 rounded-lg text-gray-900"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          @click="closeMenu"
          class="block bg-royal-blue text-white px-4 py-2 rounded-lg"
        >
          Get Started
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
      servicesOpen: false,
      mobileServices: false,
      services: [
        { name: "Document Assistance", link: "/services/document-assistance" },
        { name: "Payments & Transactions", link: "/services/payments" },
        { name: "Errands & Representation", link: "/services/errands" },
        { name: "Property Support", link: "/services/property" },
        { name: "Appointments & Scheduling", link: "/services/appointments" },
        { name: "Information & Research", link: "/services/research" },
        { name: "Passport & Travel Assistance", link: "/services/passport" },
      ],
    };
  },
  methods: {
    closeMenu() {
      this.mobileMenu = false;
      this.mobileServices = false;
    },
  },
};
</script>

<style scoped>
.text-royal-blue { color: #0052cc; }
.text-gold { color: #D4AF37; }
.bg-royal-blue { background-color: #0052cc; }

/* Dropdown smooth animation */
nav > div.relative > div {
  transition: all 0.2s ease;
}
</style>
