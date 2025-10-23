const CACHE_NAME='ispeak-v3';
const urlsToCache=['./','./index.html','./style.css','./script.js','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.map(x=>x!==CACHE_NAME?caches.delete(x):null))))});
