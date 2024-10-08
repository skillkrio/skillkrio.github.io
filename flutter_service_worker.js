'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aec0a98c9aaf25ab66ea9dc5a84fc4e1",
"version.json": "ba210a6b33bd9e7dda458f07c30d7416",
"index.html": "28f525354821571ea7821a8742ea881d",
"/": "28f525354821571ea7821a8742ea881d",
"main.dart.js": "007959b5a5827d5f4cb507edaf82b5d2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbc5af5bbb834ee705e120ddeb3cbe1d",
".git/config": "9002d7872d343db18a37e4cf753aea97",
".git/objects/95/769aa44e7a31d009af6ea2151da8a3eed7e7fe": "7ba8f06f49e6dbf22fbff887dc63b8c4",
".git/objects/95/6770d4f184456e3b1e31c74aa965e432953c10": "2898b4d04a15d71d48bb9e655b0473a6",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/0e/0319d3b9b9a20aff10ca3e13267f6285675b3e": "3c760562a6275d8d2ab0617bdaf2a9a4",
".git/objects/60/665823e7d712d7c044b1fde27f1d6fd97ed112": "457ec9b50503c84b596948764e7feed6",
".git/objects/02/6aa5bff80eaf07e3d25fac59a893475a87b429": "de3bb01a94a04e4202e84f2c002bc102",
".git/objects/d9/596589989fc2b0e82fb2c422991b9d003ae98a": "b2d9c83a6dd032b2f45d591b937f04d6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/d7/82f2c8149faca8a471fa14894ccaf4608ceb87": "5b1efabe60fc45c4506866e21cdc578c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/8d87377025bf5206af77e5837b4917ae77696b": "4341e898bf67a6c9c5eb09c4065eb652",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/c7050b2234e7db92dbe00c11e115a6634ef642": "bc14698520dfc0a5d70742cd0f7d856a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/02751f2061057d5a7597a957cd5dc4f0069e53": "e92a1ab254a36456c44a7b7f3a8a20d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/27/1e44cd4e579ef445327c9c53a7c982b33834d8": "68974fe995a580173251bb37e8a1b7b7",
".git/objects/29/f5c7531d35f01f888a5c7112f727b4fc4da187": "9f8c5d8b23e0cca5370da35d25391059",
".git/objects/16/2c1bad56c30004cdddf1678e81c69bc7b00d53": "2abaeedf4e831d4758d58fedbf890210",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/5f10972cfb85397f704e6d9c4a11829e3536b3": "455654b26ddfd9b1fe270b60ecfe4256",
".git/objects/8a/87b92b91f1d830ddee6c1ada62086ff5ac9d13": "143d38ef393072d4e582332082ac206d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f77c4410ccd835b77496d15083315030cba851": "3cb443b3d8168c0cac3db7eb2930787b",
".git/objects/10/2eec32c43d72b4f6118bbc4049595cdd026a48": "cd5658e3364dea1d05b0dbf6d74aec9e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/07fdb85bb9c1c1b1dc95f3db2bc07e3ccc2cd7": "0606acac93f5689e4750545a5aa49804",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/97/fa1e644335da4c85cd54c1f093f04ecb169e75": "2604ab165de773547919b89903b4aa36",
".git/objects/63/a6b0bed2d5c1c6130e13a38cdce9f91f97f670": "3af979ed1e561dfc302a153aaed8323e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/b8/cfb927d58eae83fa8444df0eef3464bd047e07": "209442e9467430dc873ce99d065a8d28",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/a44945314a08d63d3ade8df839de75e7aa840d": "1f357776175bcc208d3a8f8442098269",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/6467c4c6a468d521cfc4b3803fcfc0a862a012": "819201daf39db7781899f825d9dbdf0d",
".git/objects/23/719c079b19c0b84efa480fd699d8f1ec7f6860": "0c09b995e4b00bdfe4192a49c1810a3a",
".git/objects/12/6beaa2a2a02779789772584f3ae381ff15fc1d": "b4b20ce77f8af55c3328cf38f23fb95e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/8fb40c6350aee5dce5c1e21eeb43003e954997": "7203e93ff5622f2e98fdeab042b9aec5",
".git/objects/71/ffc9b90e9799ec1a9d656892ab1e01400d883b": "b092617ab81792b21de6ca8222c4a82e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/49/5f0289c503c51bd2b3c3f1e1a4a6ef023d8c82": "0c6a827f072fabc2a7550c51b902779d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/b24a67e56917b97c4ba28831a72921f6059c08": "2d8c1e118c9da7a76604e03abbbc9e3f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79aa44ba6de17fbb5f6b9fbd74419d5d",
".git/logs/refs/heads/master": "776e7c5f8a0dceaee0663c546d349c8a",
".git/logs/refs/remotes/origin/master": "285b6abbaa128f21b2839cc24bbeb410",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9a3bf83c3e55ed9d41039532656fbb75",
".git/refs/remotes/origin/master": "9a3bf83c3e55ed9d41039532656fbb75",
".git/index": "2d73e42b9e1f4aa84fedb7a31c96bc2f",
".git/COMMIT_EDITMSG": "1e0207edb946c4e78ac786be6cba4e53",
"assets/AssetManifest.json": "e284dc80f0b9d844a2be05e8111da413",
"assets/NOTICES": "d66a90e119ebe37f2f153b190bdcdeb8",
"assets/FontManifest.json": "028c1577c9edf100dd8af08b14563f86",
"assets/AssetManifest.bin.json": "aea07fcbbd0745d5044e5f0c0b75eb88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f284d725bccf2926cd3b815ee1339294",
"assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/MaterialIcons-Regular.otf": "05fc98140cbab6e60f61048af3b28627",
"assets/assets/no_image.png": "6ce9535f12888c3b3a53a4c683491b6b",
"assets/assets/bottle-loader.gif": "61387fabe512d4ded0ed5ad2b8332840",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
