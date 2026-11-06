export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to) => {
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: to.fullPath,
        page_title: document.title,
      })
    }
  })
})
