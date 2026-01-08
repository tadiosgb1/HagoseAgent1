<template>
  <div class="min-h-screen bg-[#fcfdfe] text-gray-900 overflow-x-hidden">
    <AppHeader />

    <section class="relative bg-[#001f3f] py-32 mt-16 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="glow-sphere sphere-1"></div>
        <div class="glow-sphere sphere-2"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 text-center reveal-down">
        <h1 class="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Agency <span class="text-blue-500 text-glow">Journal</span>
        </h1>
        <p class="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
          Stay updated with the latest regulations, travel alerts, and property market insights directly from our agents in Ethiopia.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(news, index) in paginatedItems"
          :key="news.id"
          class="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col reveal-card"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0 bg-blue-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              v-if="news.image" 
              :src="news.image" 
              alt="News cover" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {{ news.category || 'Update' }}
              </span>
            </div>
          </div>

          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase mb-3">
               <i class="fa-regular fa-calendar"></i>
               {{ formatDate(news.created_at) }}
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
              {{ news.title }}
            </h2>
            
            <p class="text-gray-500 text-lg leading-relaxed mb-6">
              {{ truncateContent(news.content, 110) }}
            </p>

            <div v-if="news.video" class="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-inner">
              <video controls class="w-full h-40 object-cover">
                <source :src="news.video" type="video/mp4" />
              </video>
            </div>

            <div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
              <router-link :to="`/news/${news.id}`" class="text-blue-600 font-bold flex items-center gap-2 group/link">
                Read Full Report 
                <i class="fa-solid fa-arrow-right transform group-hover/link:translate-x-2 transition-transform"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex justify-center items-center gap-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 shadow-sm"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="flex gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="['w-12 h-12 rounded-full font-bold transition-all', 
              page === currentPage ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-400']"
          >
            {{ page }}
          </button>
        </div>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 shadow-sm"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./header.vue";
import AppFooter from "./footer.vue";

export default {
  name: "NewsPage",
  components: { AppHeader, AppFooter },
  data() {
    return {
      // PRO SAMPLE DATA
      items: [
        {
          id: 1,
          title: "New ID Requirements for Diaspora Property Owners",
          category: "Legal",
          content: "The Ethiopian Ministry of Justice has issued new directives regarding power of attorney and property ownership verification for citizens living abroad...",
          created_at: "2024-03-20",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "Simplified Passport Renewal for Ethiopian Diaspora",
          category: "Travel",
          content: "Our agents have confirmed a new streamlined process at the Main Department for Immigration. Learn how you can renew through our representation services...",
          created_at: "2024-03-18",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          title: "Real Estate Market Update: Addis Ababa Q1 2024",
          category: "Market",
          content: "Rental prices in Bole and Kazanchis are showing a steady 12% increase. Our property management team breaks down what this means for investors...",
          created_at: "2024-03-15",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        },
         {
          id: 4,
          title: "Simplified Passport Renewal for Ethiopian Diaspora",
          category: "Travel",
          content: "Our agents have confirmed a new streamlined process at the Main Department for Immigration. Learn how you can renew through our representation services...",
          created_at: "2024-03-18",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 5,
          title: "Real Estate Market Update: Addis Ababa Q1 2024",
          category: "Market",
          content: "Rental prices in Bole and Kazanchis are showing a steady 12% increase. Our property management team breaks down what this means for investors...",
          created_at: "2024-03-15",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        },
         {
          id: 6,
          title: "Simplified Passport Renewal for Ethiopian Diaspora",
          category: "Travel",
          content: "Our agents have confirmed a new streamlined process at the Main Department for Immigration. Learn how you can renew through our representation services...",
          created_at: "2024-03-18",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 7,
          title: "Real Estate Market Update: Addis Ababa Q1 2024",
          category: "Market",
          content: "Rental prices in Bole and Kazanchis are showing a steady 12% increase. Our property management team breaks down what this means for investors...",
          created_at: "2024-03-15",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        }
      ],
      currentPage: 1,
      perPage: 6,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.perPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.items.slice(start, start + this.perPage);
    },
  },
  methods: {
    formatDate(dateStr) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
    truncateContent(content, length = 120) {
      return content.length > length ? content.slice(0, length) + "..." : content;
    },
    prevPage() { if (this.currentPage > 1) this.currentPage--; },
    nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; },
    goToPage(page) { this.currentPage = page; },
  },
};
</script>

<style scoped>
/* HERO ANIMATIONS */
.reveal-down {
  animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-30px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

/* CARD REVEAL ANIMATION */
.reveal-card {
  opacity: 0;
  animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes popIn {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* GLOW SPHERES */
.glow-sphere {
  position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3; pointer-events: none;
}
.sphere-1 { width: 500px; height: 500px; background: #2563eb; top: -10%; left: -5%; animation: drift 15s infinite alternate; }
.sphere-2 { width: 400px; height: 400px; background: #0ea5e9; bottom: -10%; right: -5%; animation: drift 10s infinite alternate-reverse; }

@keyframes drift {
  from { transform: translate(0, 0); }
  to { transform: translate(50px, 30px); }
}

.text-glow {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}
</style>