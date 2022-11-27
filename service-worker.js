'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'kiosco-ut-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    /* pages */
    '/index.html',
    '/mapa.html',
    '/qrCam.html',
    '/cursos&talleres.html',
    '/reglamento.html',
    '/generadorQR.html',

    /* folder css */
    '/css/style.css',

    /* folder image */
    '/img/Basquetbol.jpg',
    '/img/danza.jpg',
    '/img/escaniandoQR.jpg',
    '/img/futbol.jpg',
    '/img/MapaUT.png',
    '/img/musica.jpg',
    '/img/reglamento.jpg',
    '/img/taekwondo.webp',
    '/img/talleres.jpg',
    '/img/utcgglogo.png',
    '/img/UTfotoaerea.jpg',
    '/img/voleibol.jpg',
    
    /* folder icons */
    '/icons/arrowClose.svg',
    '/icons/arrowExpand.svg',
    '/icons/course.svg',
    '/icons/imageFiles.svg',
    '/icons/map.svg',
    '/icons/qr.svg',
    '/icons/qrScannMovil.svg',
    '/icons/rules.svg',
    '/icons/web.svg',
    '/icons/icon/icon32.png',
    '/icons/icon/icon64.png',
    '/icons/icon/icon128.png',
    '/icons/icon/icon150.png',
    '/icons/icon/icon192.png',
    '/icons/icon/icon1512.png',

    /* folder files */
    '/files/reglamento.pdf',

    /* folder javascript */
    '/js/modelviewer.min.js',
    '/js/navbar.js',
    '/js/QRCodeFuncion.js',
    '/js/qrcodejs.js',

    /* folder 3d models */
    '/3dmodels/v8_engine.glb'

];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // CODELAB: Add fetch event handler here.
  // if (evt.request.mode !== 'navigate') {
  //   // Not a page navigation, bail.
  //   console.log("Fetch no navigate");
  //   return;
  // }
  console.log('[ServiceWorker] Fetch', evt.request.url);
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              console.log("RESP", response);
              return response || fetch(evt.request);
            });
      })
  );
});