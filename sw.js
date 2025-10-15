const CACHE_NAME = 'shanghai-travel-guide-v1.1';

// 동적으로 기본 경로 감지
const getBasePath = () => {
  if (typeof self !== 'undefined' && self.location) {
    const path = self.location.pathname;
    if (path.includes('/251015trip/')) {
      return '/251015trip';
    }
  }
  return '';
};

const BASE_PATH = getBasePath();

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icon-72.svg`,
  `${BASE_PATH}/icon-96.svg`,
  `${BASE_PATH}/icon-128.svg`,
  `${BASE_PATH}/icon-144.svg`,
  `${BASE_PATH}/icon-152.svg`,
  `${BASE_PATH}/icon-192.svg`,
  `${BASE_PATH}/icon-384.svg`,
  `${BASE_PATH}/icon-512.svg`
];

// 설치 이벤트
self.addEventListener('install', event => {
  console.log('Service Worker 설치 중... Base Path:', BASE_PATH);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('캐시 파일들을 저장 중...', urlsToCache);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('모든 파일이 캐시되었습니다');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('캐시 저장 실패:', error);
      })
  );
});

// 활성화 이벤트
self.addEventListener('activate', event => {
  console.log('Service Worker 활성화 중...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('이전 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker 활성화 완료');
      return self.clients.claim();
    })
  );
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', event => {
  // 같은 origin의 요청만 처리
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에서 찾으면 반환
        if (response) {
          console.log('캐시에서 반환:', event.request.url);
          return response;
        }
        
        // 네트워크에서 가져오기
        return fetch(event.request).then(response => {
          // 유효한 응답인지 확인
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 응답을 복제하여 캐시에 저장
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // 오프라인일 때 기본 페이지 반환
        console.log('오프라인 모드: 기본 페이지 반환');
        return caches.match(`${BASE_PATH}/index.html`);
      })
  );
});

// 백그라운드 동기화 (선택사항)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('백그라운드 동기화 실행');
  }
});

// 푸시 알림 (선택사항)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: `${BASE_PATH}/icon-192.svg`,
      badge: `${BASE_PATH}/icon-96.svg`,
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});