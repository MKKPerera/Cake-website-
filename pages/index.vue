<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <span class="hero-badge">✨ Handcrafted with Love</span>
            <h1 class="hero-title">
              Bake Every Moment <span>Sweeter</span>
            </h1>
            <p class="hero-desc">
              Custom cakes crafted from the finest ingredients for weddings, birthdays, and every celebration in between.
              Taste the difference that passion makes.
            </p>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="btn btn-primary">Order Your Cake</NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline">Our Story</NuxtLink>
            </div>
          </div>

          <div class="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=700&fit=crop"
              alt="Beautiful custom celebration cake"
            />
            <div class="hero-badge-float top">
              <span>500+</span>
              Happy Customers
            </div>
            <div class="hero-badge-float bottom">
              <span>10+</span>
              Years of Baking
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED CAKES -->
    <section class="section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">Our Signature Cakes</h2>
          <p class="section-subtitle">Each cake is a masterpiece — made fresh to order, just for you</p>
        </div>

        <div class="cakes-grid">
          <div v-for="cake in cakes" :key="cake.id" class="cake-card">
            <img :src="cake.image" :alt="cake.name" />
            <div class="cake-card-body">
              <span class="cake-tag">{{ cake.tag }}</span>
              <h3>{{ cake.name }}</h3>
              <p>{{ cake.desc }}</p>
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span class="cake-price">From {{ cake.price }}</span>
                <NuxtLink to="/contact" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.85rem;">
                  Order
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section why-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">Why Choose Sweet Dreams?</h2>
          <p class="section-subtitle">We put our heart into every slice</p>
        </div>
        <div class="features-grid">
          <div v-for="feat in features" :key="feat.title" class="feature-card">
            <div class="feature-icon">{{ feat.icon }}</div>
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERY ROW -->
    <section class="section" style="padding-bottom: 0;">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">A Taste of Our Work</h2>
          <p class="section-subtitle">Every cake is unique, just like the moments they celebrate</p>
        </div>
        <div class="gallery-row">
          <img
            v-for="(img, i) in galleryImages"
            :key="i"
            :src="img.url"
            :alt="img.alt"
            class="gallery-img"
          />
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section testimonials-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">What Our Customers Say</h2>
          <p class="section-subtitle">Real love from real celebrations</p>
        </div>
        <div class="testimonials-grid">
          <div v-for="t in testimonials" :key="t.name" class="testimonial-card">
            <div class="stars">★★★★★</div>
            <p>"{{ t.review }}"</p>
            <div class="testimonial-author">
              <img :src="t.avatar" :alt="t.name" />
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.occasion }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text">
            <h2>Ready to Order Your Dream Cake?</h2>
            <p>Get in touch today and let's create something delicious together.</p>
          </div>
          <NuxtLink to="/contact" class="btn btn-light">Start Your Order →</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Sweet Dreams Bakery — Custom Cakes for Every Occasion',
})

const cakes = [
  {
    id: 1,
    name: 'Floral Wedding Cake',
    tag: 'Wedding',
    desc: 'Elegant multi-tier wedding cakes adorned with fresh edible flowers and smooth buttercream finish.',
    price: '$250',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=350&fit=crop',
  },
  {
    id: 2,
    name: 'Rainbow Birthday Cake',
    tag: 'Birthday',
    desc: 'Vibrant layers of colour inside a dreamy pastel exterior — perfect for making birthdays unforgettable.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop',
  },
  {
    id: 3,
    name: 'Chocolate Drip Cake',
    tag: 'Bestseller',
    desc: 'Rich dark chocolate sponge with ganache drip, gold leaf, and hand-piped rosettes on top.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&h=350&fit=crop',
  },
  {
    id: 4,
    name: 'Naked Rustic Cake',
    tag: 'Trending',
    desc: 'Rustic semi-naked style with seasonal berries, honey drizzle, and a naturally elegant look.',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=350&fit=crop',
  },
  {
    id: 5,
    name: 'Red Velvet Delight',
    tag: 'Classic',
    desc: 'Velvety red sponge layered with cream cheese frosting — a timeless indulgence for any occasion.',
    price: '$80',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500&h=350&fit=crop',
  },
  {
    id: 6,
    name: 'Custom Fondant Cake',
    tag: 'Custom',
    desc: 'Fully personalised fondant designs — characters, themes, logos — sculpted by our expert decorators.',
    price: '$130',
    image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=500&h=350&fit=crop',
  },
]

const features = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'We source only the finest local and organic ingredients for every recipe.' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Every cake is unique — we bring your vision to life, no matter how creative.' },
  { icon: '🚚', title: 'Free Delivery', desc: 'We deliver within London at no extra cost. Your cake arrives fresh and perfect.' },
  { icon: '💝', title: 'Made with Love', desc: 'Family recipes passed down for generations, baked with care in every batch.' },
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=300&h=300&fit=crop', alt: 'Pastel cake' },
  { url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&h=300&fit=crop', alt: 'Birthday cake with candles' },
  { url: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=300&h=300&fit=crop', alt: 'Fondant cake' },
  { url: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=300&h=300&fit=crop', alt: 'Layered cake slice' },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    occasion: 'Wedding Cake',
    review: 'Our wedding cake was absolutely stunning. Every guest couldn\'t stop talking about how beautiful and delicious it was. Sweet Dreams exceeded every expectation!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3ab?w=100&h=100&fit=crop',
  },
  {
    name: 'James Thompson',
    occasion: 'Birthday Cake',
    review: 'Ordered a custom rainbow cake for my daughter\'s 7th birthday. She was absolutely thrilled — it looked like it came out of a fairytale!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Carter',
    occasion: 'Corporate Event',
    review: 'We use Sweet Dreams for all our office celebrations. The quality and presentation is always outstanding. Couldn\'t recommend them more highly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
]
</script>

<style scoped>
.gallery-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 8px;
}

.gallery-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-img:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 36px rgba(107, 58, 42, 0.2);
}

@media (max-width: 768px) {
  .gallery-row { grid-template-columns: repeat(2, 1fr); }
  .cakes-grid { grid-template-columns: 1fr; }
}
</style>
