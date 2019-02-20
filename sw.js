var cacheName = 'quizGame';

var filesToCache = [
    '/style/custom.css',
    '/style/main.css',
    '/script/main.js',
    '/script/quizHandler.js',
    '/components/about.html',
    '/components/feedback.html',
    '/components/mainQuiz.html',
    
    '/scripts.js',
    '/index.html',
    '/404.html',
    '/',
];

//When new loading from server....////

self.addEventListener('activate', function (e) {

    e.waitUntil(
        
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })

    );
    return self.clients.claim();
});



self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});


////........Retrieving Data from caches......////////

self.addEventListener('fetch', function (e) {

    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );

});