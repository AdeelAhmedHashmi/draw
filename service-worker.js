const CACHE_NAME = 'drawing-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/draw.html',
  '/styles/style.css',
  '/styles/control.css',
  '/styles/draw.css',
  '/scripts/script.js',
  '/scripts/constants.js',
  '/scripts/setting.js',
  '/scripts/save.js',
  '/images/fav.svg'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event triggered');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching files:', urlsToCache);
      return cache.addAll(urlsToCache);
    }).catch(err => console.error('[Service Worker] Cache error:', err))
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('[Service Worker] Serving from cache:', event.request.url);
      } else {
        console.log('[Service Worker] Fetching from network:', event.request.url);
      }
      return response || fetch(event.request);
    }).catch(err => console.error('[Service Worker] Fetch error:', err))
  );
});