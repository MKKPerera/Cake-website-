<template>
  <div>
    <!-- HERO -->
    <section class="contact-hero">
      <div class="container">
        <span class="hero-badge">📬 Get In Touch</span>
        <h1>Order Your Dream Cake</h1>
        <p>Tell us about your celebration and we'll create something magical. We respond within 24 hours.</p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="section contact-section">
      <div class="container">
        <div class="contact-inner">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>We'd Love to Hear from You</h2>
            <p>Whether you have a question, want a custom quote, or just want to say hello — we're always happy to chat!</p>

            <div class="info-items">
              <div v-for="item in infoItems" :key="item.label" class="info-item">
                <div class="info-icon">{{ item.icon }}</div>
                <div>
                  <strong>{{ item.label }}</strong>
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </div>

            <div class="opening-hours">
              <h3>Opening Hours</h3>
              <table class="hours-table">
                <tr v-for="h in hours" :key="h.day">
                  <td>{{ h.day }}</td>
                  <td>{{ h.time }}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrap">
            <h2>Send Us a Message</h2>

            <form v-if="!submitted" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input id="firstName" v-model="form.firstName" type="text" placeholder="Emma" required />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input id="lastName" v-model="form.lastName" type="text" placeholder="Williams" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input id="email" v-model="form.email" type="email" placeholder="emma@example.com" required />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input id="phone" v-model="form.phone" type="tel" placeholder="+44 7911 123456" />
                </div>
              </div>

              <div class="form-group">
                <label for="occasion">Type of Occasion *</label>
                <select id="occasion" v-model="form.occasion" required>
                  <option value="" disabled>Select an occasion</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Baby Shower</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="date">Event Date *</label>
                  <input id="date" v-model="form.date" type="date" required />
                </div>
                <div class="form-group">
                  <label for="guests">Number of Guests</label>
                  <input id="guests" v-model="form.guests" type="number" placeholder="50" min="1" />
                </div>
              </div>

              <div class="form-group">
                <label for="message">Tell Us About Your Cake *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Describe your dream cake — flavours, theme, colours, any special requests..."
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
                Send My Order Request 🎂
              </button>
            </form>

            <div v-else class="form-success">
              🎉 Thank you, {{ form.firstName }}! We've received your request and will be in touch within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAP PLACEHOLDER -->
    <section style="background: var(--white); padding: 0 0 80px;">
      <div class="container">
        <h2 class="section-title text-center" style="margin-bottom: 32px;">Find Our Bakery</h2>
        <div class="map-placeholder">
          <span>📍 123 Baker Street, Notting Hill, London W1U 6TY</span>
          <p>5 minutes walk from Baker Street tube station</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ── SEO: Contact Page ─────────────────────────────────────────────────────────
useSeo({
  title: 'Order a Custom Cake — Contact Us',
  description: 'Order your dream custom cake from Sweet Dreams Bakery London. Wedding cakes, birthday cakes & more. Get a free quote — we respond within 24 hours.',
  path: '/contact',
  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop',
  keywords: 'order custom cake London, cake order form, wedding cake quote, birthday cake order, custom cake delivery London',
})

// ── Schema.org: BreadcrumbList + ContactPage ──────────────────────────────────
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cake-website-tau.vercel.app/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://cake-website-tau.vercel.app/contact' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Order a Custom Cake',
        url: 'https://cake-website-tau.vercel.app/contact',
        description: 'Order a custom cake from Sweet Dreams Bakery London.',
      }),
    },
  ],
})

const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  occasion: '',
  date: '',
  guests: '',
  message: '',
})

function handleSubmit() {
  submitted.value = true
}

const infoItems = [
  { icon: '📍', label: 'Address', value: '123 Baker Street, Notting Hill, London W1U 6TY' },
  { icon: '📞', label: 'Phone', value: '+44 20 1234 5678' },
  { icon: '✉️', label: 'Email', value: 'hello@sweetdreamsbakery.com' },
  { icon: '🕐', label: 'Order Lead Time', value: 'We ask for at least 7 days notice for custom orders' },
]

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]
</script>

<style scoped>
.opening-hours {
  margin-top: 36px;
}

.opening-hours h3 {
  font-size: 1.1rem;
  color: var(--brown);
  margin-bottom: 14px;
  font-family: var(--font-heading);
}

.hours-table {
  width: 100%;
  border-collapse: collapse;
}

.hours-table tr td {
  padding: 9px 0;
  font-size: 0.93rem;
  color: var(--text-light);
  border-bottom: 1px solid rgba(107, 58, 42, 0.08);
}

.hours-table tr td:last-child {
  text-align: right;
  font-weight: 600;
  color: var(--brown);
}

.map-placeholder {
  background: linear-gradient(135deg, var(--pink-light) 0%, var(--cream) 100%);
  border-radius: 20px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px dashed var(--pink);
}

.map-placeholder span {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--brown);
}

.map-placeholder p {
  color: var(--text-light);
  font-size: 0.95rem;
}
</style>
