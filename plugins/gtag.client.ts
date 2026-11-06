export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-0MNBYZ4BNN', {
        page_path: to.fullPath,
        page_title: document.title,
      })
    }
  })
})
