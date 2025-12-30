/**
 * Classical Kids Study Hub - Service Worker
 * Enables offline support and faster loading
 */

const CACHE_NAME = 'classicalkid-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './classical_math.html',
  './essentials.html',
  './essentials-data.js',
  './dashboard.html',
  './resources.html',
  './parents-guide.html',
  './styles.css',
  './js/app.js',
  './manifest.json'
];

// Install - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📚 ClassicalKid: Caching core assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip external requests (fonts, CDNs)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }
        
        // Fetch from network and cache
        return fetch(event.request).then(response => {
          // Don't cache bad responses
          if (!response || response.status !== 200) {
            return response;
          }
          
          // Clone and cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Offline fallback for HTML pages
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      })
  );
});
