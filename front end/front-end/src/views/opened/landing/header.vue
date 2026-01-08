<template>
  <header class="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 left-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      <router-link to="/" class="flex items-center gap-3 group">
        <img src="../../../assets/img/hlogo.jpg" alt="Hagos Logo" class="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
        <div class="flex flex-col">
          <span class="text-xl font-black text-blue-600 leading-none">HAGOS</span>
          <span class="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase leading-none">Agent Service</span>
        </div>
      </router-link>

      <nav class="hidden md:flex items-center space-x-10">
        <router-link to="/" class="nav-item" exact-active-class="active-link">Home</router-link>
        <router-link to="/about" class="nav-item" active-class="active-link">About</router-link>
        <router-link to="/services" class="nav-item" active-class="active-link">Services</router-link>
        <router-link to="/news" class="nav-item" active-class="active-link">News</router-link>
        <router-link to="/events" class="nav-item" active-class="active-link">Events</router-link>
        <router-link to="/contact-us" class="nav-item" active-class="active-link">Contact</router-link>
      </nav>

      <div class="hidden md:block">
        <router-link to="/register" class="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200">
          Get Started
        </router-link>
      </div>

      <button @click="mobileMenu = !mobileMenu" class="md:hidden text-gray-700 text-2xl focus:outline-none">
        <i :class="mobileMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileMenu" class="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col space-y-4 shadow-xl">
        <router-link to="/" @click="closeMenu" class="mobile-nav-item" exact-active-class="mobile-active">Home</router-link>
        <router-link to="/about" @click="closeMenu" class="mobile-nav-item" active-class="mobile-active">About</router-link>
        <router-link to="/services" @click="closeMenu" class="mobile-nav-item" active-class="mobile-active">Services</router-link>
        <router-link to="/news" @click="closeMenu" class="mobile-nav-item" active-class="mobile-active">News</router-link>
        <router-link to="/events" @click="closeMenu" class="mobile-nav-item" active-class="mobile-active">Events</router-link>
        <router-link to="/contact-us" @click="closeMenu" class="mobile-nav-item" active-class="mobile-active">Contact</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
    closeMenu() {
      this.mobileMenu = false;
    },
  },
};
</script>

<style scoped>
/* Base Nav Item Styles */
.nav-item {
  position: relative;
  font-weight: 600;
  color: #4b5563; /* gray-600 */
  transition: color 0.3s ease;
  padding: 4px 0;
}

.nav-item:hover {
  color: #2563eb; /* blue-600 */
}

/* The Active Style (Horizontal Line) */
.active-link {
  color: #2563eb !important;
}

.active-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
  border-radius: 2px;
  animation: expandLine 0.3s ease-out forwards;
}

/* Mobile Active Styles */
.mobile-nav-item {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  padding: 8px 0;
}
.mobile-active {
  color: #2563eb;
  border-left: 4px solid #2563eb;
  padding-left: 12px;
}

@keyframes expandLine {
  from { width: 0; left: 50%; }
  to { width: 100%; left: 0; }
}

/* Fade Transition for Mobile Menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>