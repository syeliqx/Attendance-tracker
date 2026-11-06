const C="attendance-v1",F=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
const CACHE = 'attendance-v1';
const ASSETS = ['./', './index.html'];
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
