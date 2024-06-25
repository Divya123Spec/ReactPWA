// serviceWorkerRegistration.js
import { Workbox } from 'workbox-window';

export function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');
    wb.addEventListener('controlling', () => {
      window.location.reload();
    });
    wb.register();
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
