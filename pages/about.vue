<template>
  <div>
    <!-- HERO -->
    <section class="about-hero">
      <div class="container">
        <span class="hero-badge">🎂 Our Story</span>
        <h1>Baked with Passion,<br />Served with Love</h1>
        <p>A family bakery rooted in tradition, driven by creativity, and devoted to bringing joy one cake at a time.</p>
      </div>
    </section>

    <!-- STORY -->
    <section class="section story-section">
      <div class="container">
        <div class="story-inner">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
            alt="Baker decorating a cake in the kitchen"
          />
          <div class="story-content">
            <h2>From a Home Kitchen to the Heart of London</h2>
            <p>
              Sweet Dreams Bakery was born in 2014 in our founder Emma's home kitchen. What started as a hobby — baking
              cakes for friends and family — quickly grew into a full-time passion as word spread about her extraordinary
              creations.
            </p>
            <p>
              By 2016, we opened our first studio in Notting Hill, bringing hand-crafted custom cakes to London's most
              cherished celebrations. Our approach has always been simple: use the best ingredients, never rush artistry,
              and pour genuine care into every single bake.
            </p>
            <p>
              Today, our small but dedicated team of bakers and decorators creates hundreds of cakes each month —
              each one as unique as the occasion it marks.
            </p>
            <div class="stats-row">
              <div class="stat">
                <strong>10+</strong>
                <span>Years of Baking</span>
              </div>
              <div class="stat">
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>
              <div class="stat">
                <strong>50+</strong>
                <span>Cake Designs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section values-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">What We Stand For</h2>
          <p class="section-subtitle">The principles that guide every cake we bake</p>
        </div>
        <div class="values-grid">
          <div v-for="val in values" :key="val.title" class="value-card">
            <div class="v-icon">{{ val.icon }}</div>
            <h3>{{ val.title }}</h3>
            <p>{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section team-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">Meet the Bakers</h2>
          <p class="section-subtitle">The talented hands behind every masterpiece</p>
        </div>
        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <img :src="member.photo" :alt="member.name" />
            <div class="team-card-body">
              <h3>{{ member.name }}</h3>
              <span>{{ member.role }}</span>
              <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 10px;">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text">
            <h2>Let's Create Something Beautiful</h2>
            <p>We'd love to bake your next celebration cake. Get in touch today.</p>
          </div>
          <NuxtLink to="/contact" class="btn btn-light">Contact Us →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// ── SEO: About Page ───────────────────────────────────────────────────────────
useSeo({
  title: 'About Us — Our Story & Team',
  description: 'Meet the team behind Sweet Dreams Bakery — a family-run London bakery crafting custom cakes since 2014. Passion, quality, and love in every slice.',
  path: '/about',
  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop',
  keywords: 'about Sweet Dreams Bakery, London bakery team, family bakery London, custom cake makers, award winning bakery London',
})

// ── Schema.org: BreadcrumbList ────────────────────────────────────────────────
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cake-website-tau.vercel.app/' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://cake-website-tau.vercel.app/about' },
        ],
      }),
    },
  ],
})

const values = [
  {
    icon: '🌿',
    title: 'Quality Ingredients',
    desc: 'We source locally and organically wherever possible. Great cakes start with great ingredients — no shortcuts, ever.',
  },
  {
    icon: '🎨',
    title: 'Creative Artistry',
    desc: 'Each design is crafted from scratch. We love a challenge and thrive on turning imaginative ideas into edible art.',
  },
  {
    icon: '💛',
    title: 'Genuine Care',
    desc: 'You\'re not just an order number. We invest personally in understanding your vision and making it extraordinary.',
  },
  {
    icon: '🌍',
    title: 'Sustainable Baking',
    desc: 'We minimise waste, use eco-friendly packaging, and partner with sustainable local suppliers.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Values',
    desc: 'As a family business, we treat every client like family — with warmth, honesty, and a personal touch.',
  },
  {
    icon: '🏆',
    title: 'Award Winning',
    desc: 'Recognised by the London Baking Awards 2022 & 2024 for Best Custom Cake Design.',
  },
]

const team = [
  {
    name: 'Emma Williams',
    role: 'Founder & Head Baker',
    bio: 'Emma started the bakery in her home kitchen and brings 15 years of pastry expertise to every creation.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=350&fit=crop',
  },
  {
    name: 'Oliver Hayes',
    role: 'Lead Cake Designer',
    bio: 'Trained at Le Cordon Bleu, Oliver specialises in elaborate fondant sculptures and sugar flowers.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=350&fit=crop',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Pastry Chef',
    bio: 'Sophie is our flavour wizard — from classic vanilla to exotic matcha and salted caramel creations.',
    photo: 'https://images.unsplash.com/photo-1559418818-2da09f99bc47?w=400&h=350&fit=crop',
  },
]
</script>
