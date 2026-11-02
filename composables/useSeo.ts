const BASE_URL = 'https://cake-website-tau.vercel.app'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop'

interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string
}

// Call this composable on every page to set full SEO meta tags
export function useSeo(opts: SeoOptions) {
  const image = opts.image ?? DEFAULT_IMAGE
  const url = `${BASE_URL}${opts.path}`

  useHead({
    title: opts.title,
    meta: [
      { name: 'description', content: opts.description },
      ...(opts.keywords ? [{ name: 'keywords', content: opts.keywords }] : []),

      // Open Graph
      { property: 'og:title', content: opts.title },
      { property: 'og:description', content: opts.description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:title', content: opts.title },
      { name: 'twitter:description', content: opts.description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
