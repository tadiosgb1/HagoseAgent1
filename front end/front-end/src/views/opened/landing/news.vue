<template>
  <div class="min-h-screen bg-gray-50">
    <!-- HEADER -->
    <AppHeader />

    <!-- HERO / PAGE HEADER -->
    <section class="bg-royal-blue text-white py-20 mt-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto">
          Stay informed with our latest news, announcements, and updates from Alina Agent Service.
        </p>
      </div>
    </section>

    <!-- NEWS LIST -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(news, index) in paginatedItems"
          :key="news.id"
          class="bg-white rounded-xl shadow overflow-hidden transform transition hover:scale-105 opacity-0"
          :style="{ animationDelay: `${index * 0.2}s`, animation: 'fadeIn 0.8s forwards' }"
        >
          <!-- IMAGE -->
          <img v-if="news.image" :src="news.image" alt="" class="w-full h-48 object-cover">

          <!-- CONTENT -->
          <div class="p-6">
            <p class="text-sm text-gray-400 mb-2">{{ formatDate(news.created_at) }}</p>
            <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ news.title }}</h2>
            <p class="text-gray-700 mb-4">{{ truncateContent(news.content, 120) }}</p>

            <!-- VIDEO BELOW DESCRIPTION -->
            <video
              v-if="news.video"
              controls
              class="w-full h-48 object-cover mb-4"
            >
              <source :src="news.video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <router-link :to="`/news/${news.id}`" class="text-royal-blue font-medium hover:underline">
              Read more →
            </router-link>
          </div>
        </div>
      </div>

      <!-- PAGINATION -->
      <div class="mt-10 flex justify-center gap-3">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="['px-4 py-2 rounded font-medium', page === currentPage ? 'bg-royal-blue text-white' : 'bg-gray-200 hover:bg-gray-300']"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>

    <!-- FOOTER -->
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
      items: [],
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
  async mounted() {
    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const params = { page: this.currentPage, perPage: this.perPage };
        const response = await this.$apiGet("/news", params);
        this.items = response.data || [];
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    },
    formatDate(dateStr) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
    truncateContent(content, length = 120) {
      if (!content) return "";
      return content.length > length ? content.slice(0, length) + "..." : content;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchNews();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchNews();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.fetchNews();
    },
  },
};
</script>

<style scoped>
.bg-royal-blue {
  background-color: #0052cc;
}
.text-royal-blue {
  color: #0052cc;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
