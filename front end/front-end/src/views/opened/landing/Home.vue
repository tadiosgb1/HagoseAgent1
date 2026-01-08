<template>
  <div class="min-h-screen bg-white text-gray-800">

    <!-- HEADER -->
    <Header />

    <!-- HERO SECTION -->
    <Hero />

    <!-- ABOUT US -->
   <Bg />

    <!-- WHAT WE DO -->
    <Whatwedo />

    <!-- WHY CHOOSE US -->
    <Whychooseus />

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
import Bg from "./bg.vue"
import Whatwedo from './WhatWeDo.vue'
import Whychooseus from './Whychooseus.vue'
export default {
  components: { Header, Footer, Hero, Fqs ,Bg,Whatwedo,Whychooseus},
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
