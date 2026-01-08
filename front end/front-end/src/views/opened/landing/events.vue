<template>
  <div class="min-h-screen bg-[#fcfdfe] text-gray-900 overflow-x-hidden">
    <AppHeader />

    <section class="relative bg-[#001f3f] py-32 mt-16 overflow-hidden">
      <div class="absolute inset-0">
        <div class="glow-sphere sphere-1"></div>
        <div class="glow-sphere sphere-2"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 text-center reveal-down">
        <h1 class="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Upcoming <span class="text-blue-500 text-glow">Events</span>
        </h1>
        <p class="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
          Join our webinars, townhalls, and local meetups to stay connected with the Ethiopian market and legal landscape.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 -mt-16 relative z-20 reveal-up">
      <div class="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-50 flex flex-col lg:flex-row">
        <div class="lg:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80" 
            alt="Featured Event" 
            class="w-full h-full object-cover"
          />
          <div class="absolute top-6 left-6">
            <span class="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg text-sm uppercase tracking-widest shadow-lg">
              Next Big Event
            </span>
          </div>
        </div>
        <div class="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <div class="flex items-center gap-4 text-blue-600 font-bold mb-4">
            <i class="fa-solid fa-calendar-day text-2xl"></i>
            <span class="text-lg">October 12, 2026 • 6:00 PM (EAT)</span>
          </div>
          <h2 class="text-4xl font-black text-gray-900 mb-6 leading-tight">
            Ethiopian Diaspora Investment & Real Estate Webinar
          </h2>
          <p class="text-gray-500 text-lg mb-8 leading-relaxed">
            A deep dive into the new 2026 investment policies. Learn how our agents can manage your local acquisitions while you remain abroad.
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1">
              Register Seat
            </button>
            <button class="border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
              View Agenda
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="reveal-left">
          <h2 class="text-4xl font-black text-gray-900">Event Calendar</h2>
          <div class="h-1.5 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>
        <div class="flex bg-gray-100 p-1.5 rounded-full">
          <button class="px-6 py-2 rounded-full bg-white shadow-sm font-bold text-blue-600">Upcoming</button>
          <button class="px-6 py-2 rounded-full font-bold text-gray-500 hover:text-gray-700">Past Events</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="(event, index) in upcomingEvents" 
          :key="index"
          class="group bg-white rounded-[2rem] border border-gray-100 p-2 shadow-sm hover:shadow-2xl transition-all duration-500 reveal-step"
          :style="{ animationDelay: (index * 150) + 'ms' }"
        >
          <div class="relative rounded-[1.8rem] overflow-hidden h-56 mb-6">
            <img :src="event.image" :alt="event.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span class="text-white font-bold underline cursor-pointer">View Details</span>
            </div>
          </div>
          
          <div class="px-6 pb-8">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-md text-xs">
                {{ event.type }}
              </div>
              <span class="text-gray-400 text-sm font-medium">{{ event.date }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
              {{ event.title }}
            </h3>
            <p class="text-gray-500 mb-6 line-clamp-2">{{ event.desc }}</p>
            
            <div class="flex items-center gap-2 text-gray-700 font-semibold text-sm">
              <i class="fa-solid fa-location-dot text-blue-500"></i>
              {{ event.location }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./header.vue";
import AppFooter from "./footer.vue";

export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      upcomingEvents: [
        {
          title: "Legal Power of Attorney Workshop",
          date: "Nov 05, 2026",
          type: "Workshop",
          location: "Virtual / Zoom",
          desc: "Step-by-step guidance on how to legally authorize our agents to act on your behalf in Addis Ababa.",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Diaspora Property Expo 2026",
          date: "Dec 12, 2026",
          type: "Exhibition",
          location: "Skylight Hotel, Addis",
          desc: "Meet our agents in person and explore curated property listings with verified titles.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Q&A with Ethiopian Customs Agents",
          date: "Jan 15, 2027",
          type: "Townhall",
          location: "YouTube Live",
          desc: "Understanding import/export regulations for returning residents and personal shipments.",
          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* HERO ANIMATIONS */
.reveal-down { animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.reveal-up { animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
.reveal-left { animation: slideLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
.reveal-step { opacity: 0; animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

@keyframes slideDown { from { opacity: 0; transform: translateY(-40px); filter: blur(10px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
@keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes popIn { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

/* GLOW SPHERES */
.glow-sphere { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.3; pointer-events: none; }
.sphere-1 { width: 500px; height: 500px; background: #2563eb; top: -10%; left: -5%; animation: drift 15s infinite alternate; }
.sphere-2 { width: 400px; height: 400px; background: #0ea5e9; bottom: -10%; right: -5%; animation: drift 10s infinite alternate-reverse; }

@keyframes drift { from { transform: translate(0, 0); } to { transform: translate(50px, 30px); } }

.text-glow { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
</style>