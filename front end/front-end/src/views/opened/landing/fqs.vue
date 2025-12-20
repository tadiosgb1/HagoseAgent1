<template>
  <div class="max-w-4xl mx-auto px-6 py-16">

    <h2 class="text-3xl font-bold text-center text-royal-blue mb-12">
      Frequently Asked Questions
    </h2>

    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <button
        @click="toggle(index)"
        class="w-full bg-white p-4 shadow-md rounded-lg flex justify-between items-center border border-gray-200 hover:border-gold transition"
      >
        <span class="font-medium text-dark-navy">{{ faq.question }}</span>
        <span class="text-2xl font-bold text-gold">{{ active === index ? '-' : '+' }}</span>
      </button>

      <div
        v-if="active === index"
        class="p-4 bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg text-dark-navy"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqSection",
  data() {
    return {
      active: null,
      faqs: [
        {
          question: "What services does Alina Agent Service provide?",
          answer:
            "We handle document processing, payments, deliveries, office follow-ups, property support, travel assistance, and more — all professionally and efficiently."
        },
        {
          question: "How can I submit documents or requests?",
          answer:
            "You can contact us via our website forms or directly through our client portal for fast and secure handling."
        },
        {
          question: "Is your service safe and reliable?",
          answer:
            "Absolutely. We provide photo/video confirmation, transparent updates, and secure handling of all tasks."
        },
        {
          question: "Do you handle payments and online transactions?",
          answer:
            "Yes, we can manage various payment processes including online payments, bill settlements, and money transfers within Ethiopia."
        },
        {
          question: "Can you assist with property and home support?",
          answer:
            "Yes, our services include property management support, home assistance, appointment scheduling, and local errands on your behalf."
        }
      ]
    };
  },
  methods: {
    toggle(i) {
      this.active = this.active === i ? null : i;
    },
  },
};
</script>

<style scoped>
.text-royal-blue { color: #0052cc; }
.text-dark-navy { color: #0A1A2F; }
.text-gold { color: #D4AF37; }

button:focus {
  outline: none;
}
</style>
