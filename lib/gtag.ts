declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendGAEvent(eventName: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName);
  }
}
