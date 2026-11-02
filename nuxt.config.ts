// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // ─── SEO: Site-wide defaults ───────────────────────────────────────────────
  app: {
    head: {
      // Default title & template (each page overrides the part before " | ")
      titleTemplate: '%s | Sweet Dreams Bakery',
      title: 'Sweet Dreams Bakery — Custom Cakes London',

      htmlAttrs: { lang: 'en' },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // ── Primary SEO ──────────────────────────────────────────────────────
        { name: 'description', content: 'Sweet Dreams Bakery — handcrafted custom cakes for weddings, birthdays & every occasion in London. Order online today.' },
        { name: 'keywords', content: 'custom cakes London, wedding cake bakery, birthday cake delivery London, cake shop near me, handcrafted cakes, fondant cakes' },
        { name: 'author', content: 'Sweet Dreams Bakery' },
        { name: 'robots', content: 'index, follow' },

        // ── Open Graph (Facebook / WhatsApp / LinkedIn previews) ─────────────
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Sweet Dreams Bakery' },
        { property: 'og:title', content: 'Sweet Dreams Bakery — Custom Cakes London' },
        { property: 'og:description', content: 'Handcrafted custom cakes for weddings, birthdays & every occasion. Taste the difference that passion makes.' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop' },
        { property: 'og:url', content: 'https://cake-website-tau.vercel.app' },
        { property: 'og:locale', content: 'en_GB' },

        // ── Twitter / X Card ─────────────────────────────────────────────────
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Sweet Dreams Bakery — Custom Cakes London' },
        { name: 'twitter:description', content: 'Handcrafted custom cakes for weddings, birthdays & every occasion.' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop' },

        // ── Theme colour (browser UI) ────────────────────────────────────────
        { name: 'theme-color', content: '#f9a8c9' },
      ],

      link: [
        // Canonical default (pages override this)
        { rel: 'canonical', href: 'https://cake-website-tau.vercel.app' },

        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap' },

        // Sitemap
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      ],
    },
  },
})
