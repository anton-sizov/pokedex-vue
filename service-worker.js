const CACHE_NAME = 'pokedex-cache';

self.addEventListener('install', () => {
    console.log('Установлен');
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    console.log('Активирован');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
    if(!event.request.url.startsWith('https://raw.githubusercontent.com')){
        return;
    }
    event.respondWith(
        (async () => {
            try {
                // Пытаемся найти ресурс в кэше
                const cachedResponse = await caches.match(event.request);
        
                // Если ресурс есть в кеше, возвращаем его
                if (cachedResponse) {
                    return cachedResponse;
                }
        
                // Если ресурс нет в кеше, получаем его из сети
                const response = await fetch(event.request);
        
                // Обновляем кэш с полученным ресурсом
                const cache = await caches.open(CACHE_NAME);
                cache.put(event.request, response.clone());
        
                return response;
            } catch (error) { /* empty */ }
        })(),
    );
});