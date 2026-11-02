<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <NuxtLink to="/" class="navbar-logo">
        <span class="logo-icon">🎂</span>
        Sweet Dreams
      </NuxtLink>

      <ul class="navbar-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="navbar-cta">Order Now</NuxtLink></li>
      </ul>

      <button class="navbar-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        {{ menuOpen ? '✕' : '☰' }}
      </button>
    </div>

    <div v-if="menuOpen" class="mobile-menu">
      <NuxtLink to="/" @click="menuOpen = false">Home</NuxtLink>
      <NuxtLink to="/about" @click="menuOpen = false">About</NuxtLink>
      <NuxtLink to="/contact" @click="menuOpen = false">Order Now</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 16px 24px 20px;
  border-top: 1px solid rgba(249, 168, 201, 0.3);
  gap: 4px;
}

.mobile-menu a {
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  color: var(--text);
  transition: all 0.3s;
}

.mobile-menu a:hover {
  background: var(--pink-light);
  color: var(--pink-dark);
}

@media (min-width: 769px) {
  .mobile-menu { display: none !important; }
}
</style>
