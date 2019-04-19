// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('first-app')
//       .then(function(cache) {
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/src/css/app.css',
//           '/src/js/app.js'
//         ])
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(res) {
//         return res;
//       })
//   );
// });
self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Installing ...', event)
})
self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activating ...', event);
  return self.clients.claim();
})
self.addEventListener('fetch', function (event) {
  // console.log('[ServiceWorker] Fetching ...', event);
  // return self.clients.claim();
  event.respondWith(fetch(event.request))
})