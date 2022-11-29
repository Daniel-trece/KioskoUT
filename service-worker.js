let cacheName = "KioscoUT v1.0";

let cacheAssets = [
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
 '/img/escaniandoQR.jpg',
 '/img/MapaUT.png',
 '/img/talleres.jpg',
 '/img/utcgglogo.png',
 '/img/UTfotoaerea.jpg',
 
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

 /* folder javascript */
 '/js/modelviewer.min.js',
 '/js/navbar.js',
 '/js/QRCodeFuncion.js',
 '/js/qrcodejs.js',

 /* folder 3d models */
 '/3dmodels/gastro/scene.gltf',
 '/3dmodels/gastro/scene.bin',
 '/3dmodels/turismo/scene.gltf',
 '/3dmodels/turismo/scene.bin',
 '/3dmodels/admin .glb',
 '/3dmodels/biblioteca.glb',
 '/3dmodels/energias.glb',
 '/3dmodels/enfermeria.glb',
 '/3dmodels/Logistica.glb',
 '/3dmodels/Logo UTCGG.glb',
 '/3dmodels/mantenimiento.glb',
 '/3dmodels/Mapa.glb',
 '/3dmodels/mecanica.glb'
 
]

self.addEventListener('install', e => {
    console.log('Service Worker Instalado');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker Cacheados');
                cache.addAll(cacheAssets);
            })
            .then(()=>self.skipWaiting())
    )
})

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
})

self.addEventListener('fetch', e => {
    console.log('Service Worker Encontrado');
    e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
})
