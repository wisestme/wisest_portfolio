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
});