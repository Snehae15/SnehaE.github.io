'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "69cd973db8d32e5e7041e79383235c8d",
"assets/AssetManifest.bin.json": "c6b07116f811e1707bad8b00b713ee63",
"assets/AssetManifest.json": "9ddaa2f1e13a3eefe1db654ec2c112fa",
"assets/assets/971.jpg": "e97e4cf951d78e6cb7f910f6b94f5a10",
"assets/assets/android_icon.png": "73c81f17358dd5995603a9d347d36b06",
"assets/assets/bootstrap.jpg": "12150801b4ad1aa8d26d70cee45b34ba",
"assets/assets/c.png": "00ebc3703dfc813d34b3c2ac9e2deff8",
"assets/assets/css_icons.png": "74f960854c9777e647f691f10f32f465",
"assets/assets/dart_icon.png": "b5b6a3add9a9fcf245e540e04bb06eda",
"assets/assets/desktop_icon.png": "7f2e63ce8e28bfc6331590b24e15faea",
"assets/assets/figma.png": "8a41c4ebcf5d81c0f37846232f9076d4",
"assets/assets/file/Snehae_resume.pdf": "d7cc62ff798bcc3e3a5ad1d8916355b6",
"assets/assets/firebase.png": "8d9a29f7e81370e89f22bbb09862a2b0",
"assets/assets/flutter.png": "8eb09f55da57c413fe416d83f2376a3d",
"assets/assets/git.png": "33c55aefa9ee26f7adedbf174f87b490",
"assets/assets/github.png": "5c06dbd786e632cc839d1b2816946d2f",
"assets/assets/hackerrank.png": "72756913768a580002dce0c5bb1ee966",
"assets/assets/hivedb.jpg": "d73a5e4549292fac5e19bfa48cb24d33",
"assets/assets/html_icon.png": "127a4308084197176e44418862811209",
"assets/assets/img1.jpg": "cd4b3eb7710e6843abdb4da550df9d4f",
"assets/assets/img2.jpg": "ff3d6576833cff2ce32b9e7b686c7ce5",
"assets/assets/img3.jpg": "b1df979cfb9d6c04049067bd61e64ad7",
"assets/assets/img4.jpg": "e191fbdb6f949aa0fdf4e356ef84fe40",
"assets/assets/insta.png": "475576d35973af68355e900d384c0763",
"assets/assets/ios.png": "51e007f3333ef607f0bd182da8d0224b",
"assets/assets/linkedin.png": "dd34673958b28f38fbc3554acbb2636d",
"assets/assets/msoffice.png": "5cd5398414b1e777b56ad2331f90e994",
"assets/assets/mysql.jpg": "8be62c4fa0e1c8677fa6b19f720ed703",
"assets/assets/projects/ats.png": "ac77389f6920c0ab0ff45a4da0a955b2",
"assets/assets/projects/campus.png": "6a9d0e5b64445ef43fda7c72f70b5754",
"assets/assets/projects/colleaguea.png": "fb8456eb961b6e392d109730fb7818b0",
"assets/assets/projects/crimedispose.png": "232cd5ef41b4fcb3323fc79a2f7ee244",
"assets/assets/projects/dailywages.png": "bc5a1f6b155425e87f76d9e9a323a8fd",
"assets/assets/projects/finearts.png": "d64c128f9d0d55070941b3cc876c4bca",
"assets/assets/projects/nearbystore.png": "ce60888d9bb37a9627f9ff17851b660a",
"assets/assets/projects/petcare.png": "7011ce926c6bf8195e3b0028e4fbb586",
"assets/assets/projects/qhire.png": "a842c1b668259f46b9369a65adb6fca0",
"assets/assets/projects/talenthub.png": "eccb255b67b8129110385c8d3f7df1bd",
"assets/assets/python.jpg": "e96ab0869b27cf778b4df68dcf170542",
"assets/assets/restapi.png": "44f3ff7accf63f3cfddca6f67d41f752",
"assets/assets/waving-hand.gif": "30169e4a670daf12443df7d2dd140176",
"assets/assets/web.png": "fb2e98f8436574e18f98cdcc32360df4",
"assets/assets/workiing2.png": "ca8b79376f766765a549296c18d2feb3",
"assets/assets/working1.jpg": "b4efe00c10680304319dc6107ff03b25",
"assets/assets/working2.png": "118d11d12a2994f1b9a0b6c20a056715",
"assets/assets/working3.jpg": "0e52087d4a682838d5862bb14d43d616",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3e6518951c558d803bf4e72ea6be3999",
"assets/NOTICES": "4f99cc441744db4cc19cde3a32c3acb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3b9e58167ada2a400377582a17064e8f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd72db540d3c5ba427a6f918890d55c0",
"/": "cd72db540d3c5ba427a6f918890d55c0",
"main.dart.js": "7d430664cbb7ba207c507899ed7eaf6f",
"manifest.json": "4d2a074e955647542596586cbde41715",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
