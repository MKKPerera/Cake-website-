export function useGtag() {
  function trackEvent(name: string, params?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, params)
    }
  }
  return { trackEvent }
}
