const cacheName = 'v1';

const cacheAssets = [
	'index.html',
	'home.html',
	'home2.html',
	'projects.html',
	'css/home2.css',
	'css/master.css',
	'css/style.css',
	'js/home2.js',
	'js/master.js'
]
// Call Install Event
self.addEventListener('install', e => {
	console.log('Service Worker: Installed');

	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Service Worker: Caching Files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
			);
});

// Call Activate Event
self.addEventListener('activate', e => {
	console.log('Service Worker: Activated');
	// Remove unwanted caches
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return promise.all(
				cacheNames.map(cache => {
					if(cache !== cacheName) {
						console.log('Service Worker: Clearing Old Cache');
						return caches.delete(cache);
					}
				})
				);
		})
		);
});

// Call Fetch Event
self.addEventListener('fetch', e => {
	console.log('Service Worker: Fetching');
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});