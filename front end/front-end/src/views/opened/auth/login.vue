<template>
  <div class="min-h-screen flex flex-col bg-[#000d1a] overflow-hidden">
    <Header />

    <main class="flex-1 flex items-center justify-center relative px-6">
      <div class="absolute inset-0 z-0">
        <div class="glow-sphere admin-sphere-1"></div>
        <div class="glow-sphere admin-sphere-2"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div class="relative z-10 w-full max-w-md reveal-up">
        <div class="flex justify-center mb-8">
          <div class="w-20 h-20 bg-blue-600/10 border border-blue-500/30 rounded-3xl flex items-center justify-center backdrop-blur-xl shadow-2xl shadow-blue-500/20">
             <i class="fa-solid fa-unlock-keyhole text-blue-500 text-3xl animate-pulse"></i>
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-10 shadow-3xl">
          <div class="text-center mb-10">
            <h1 class="text-3xl font-black text-white tracking-tight">Admin <span class="text-blue-500">Portal</span></h1>
            <p class="text-blue-100/40 text-sm font-bold uppercase tracking-[0.2em] mt-2">Authorized Personnel Only</p>
          </div>

          <form @submit.prevent="login" class="space-y-6">
            <div class="space-y-2">
              <label class="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] ml-1">Administrator Email</label>
              <div class="relative group">
                <i class="fa-solid fa-user-shield absolute left-5 top-1/2 -translate-y-1/2 text-blue-500/50 group-focus-within:text-blue-400 transition-colors"></i>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="admin@alina.com"
                  class="admin-input"
                />
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <label class="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] ml-1">Access Password</label>
              </div>
              <div class="relative group">
                <i class="fa-solid fa-vault absolute left-5 top-1/2 -translate-y-1/2 text-blue-500/50 group-focus-within:text-blue-400 transition-colors"></i>
                <input
                  id="password"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="••••••••"
                  class="admin-input"
                />
              </div>
            </div>

            <transition name="fade">
              <div v-if="error" class="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-2xl text-xs font-bold flex items-center gap-3">
                <i class="fa-solid fa-triangle-exclamation animate-bounce"></i>
                {{ error }}
              </div>
            </transition>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 overflow-hidden relative group"
              :disabled="loading"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span v-if="!loading" class="tracking-widest uppercase text-sm">Initialize Session</span>
              
              <div v-else class="flex items-center">
                <svg class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying Credentials...
              </div>
            </button>
          </form>

          <div class="mt-8 text-center">
             <router-link to="/" class="text-blue-400/50 text-xs font-bold hover:text-blue-400 transition-colors">
               <i class="fa-solid fa-arrow-left mr-2"></i> Return to Public Site
             </router-link>
          </div>
        </div>
        
        <p class="text-center text-blue-500/20 text-[10px] mt-8 font-mono tracking-tighter">
          ALINA_SECURE_V2 // SESSION_ENCRYPTED // IP: LOGGED
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../landing/header.vue';
import Footer from '../landing/footer.vue';

export default {
  name: "LoginPage",
  components: { Header, Footer },
  data() {
    return {
      form: { email: "", password: "" },
      error: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.error = "";
      this.loading = true;
      try {
        const response = await this.$apiPost("/token", { ...this.form });
        localStorage.setItem("access", response.access);
        localStorage.setItem("refresh", response.refresh);
        localStorage.setItem("userId", response.user);
        
        // Push strictly to the Admin Dashboard
        this.$router.push({ path: "/dashboard/first-dash" });
      } catch (err) {
        this.error = "ACCESS DENIED: Authentication Failed.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* DARK MODE INPUTS */
.admin-input {
  @apply w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white font-medium transition-all duration-300 outline-none focus:border-blue-500 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(37,99,235,0.1)];
}

/* ADMIN GLOWS */
.glow-sphere { position: absolute; border-radius: 50%; filter: blur(150px); opacity: 0.2; }
.admin-sphere-1 { width: 600px; height: 600px; background: #2563eb; top: -10%; right: -5%; }
.admin-sphere-2 { width: 500px; height: 500px; background: #0ea5e9; bottom: -5%; left: -5%; }

/* ANIMATIONS */
.reveal-up {
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(60px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>