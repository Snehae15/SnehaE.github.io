'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "d5edf76bf7ee4d986b56f7c505c1cf77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de753b9b39b41e382af57805c4dfc6ad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63a83f56df7d208deed0bfcf0bd9b792",
".git/logs/refs/heads/main": "54f5cc68078a61faa4d9101640aaa146",
".git/logs/refs/remotes/origin/main": "3fb8366bbe52544156b75b9b0d1d0bf1",
".git/objects/00/be84bcb52daebdd2141f0eeef606b117ab08da": "bf32136ff85aa3d0b0234e1feeb00825",
".git/objects/04/4b890d8bb9555b5369c8e31bb76900cd232303": "2f9417b97fac3d60d789e4fa8761d2b6",
".git/objects/05/2d7998e790c7f552f36fad9dced1bd5bf6eecb": "270826cd91be2586842731cadfa8633f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/a9e986451c4ae968d44d45abd8a738cc62a019": "8cbe08474f146e3b637e58d2206171c1",
".git/objects/0d/c8dbc44e11a624d61b8b2d9f84297a2a3e58b9": "f998bc1192b92dda287de5afcd7ad768",
".git/objects/18/37a21a97ee5f13edb040ba341449e1d567360d": "691a57ce0b32cbb233744fb482548187",
".git/objects/1a/3571d26d6be2a4d34d39539f715192719b5a5f": "721b8ed92447c00bd9a64b87dd506b6f",
".git/objects/1c/a4faebd579bcd743bfd6225c625f50bfa8e0b0": "90bc9407467fe43cfc116fb69c3019fc",
".git/objects/1e/4ba948e57f1c1132e363f3feb7ff4202188f6d": "ce50968a875daa296320738a13a79ab3",
".git/objects/1e/994678306a2dd97740f9c1106f82608edc5712": "f28aeea0112f95dbfd0e7b5955e2e7ba",
".git/objects/1f/211ea888297f605d9cc8d6767e01fa477aa49a": "2569079c36a842700f032cf2100fd38a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/e68d2f2e8b4952129826af9423e7e2d7827a2e": "c0cd5d046f2fa0de3da49a57cb02ad2c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/97f92652579cc8f2fec7e68d861f1a5d4a6668": "756aef889fc501e9138078bdac4b5167",
".git/objects/28/010cb8969aba593ce91965086df8f8fa4e48b0": "00a439e45f4633558de57611531e67f5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/7352323728a4b2738ea5d210d594dd495a49ab": "f6a4bdbaddcfae22fc08da29decd7da1",
".git/objects/38/7ba80a689e307e33cc4d9102877ebdfb86735f": "dfd54dbfc25b5b334ffec360856105c7",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/569bc65565fdcf341a9e2542f1d66bd14d7922": "f5480bfcf2d70ff578676bbda5fc8014",
".git/objects/3f/98a1474d8cf6ff6f479f612d3be319bce05426": "26237830c9435e9d012118edce1a9251",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/2b8926acf98757f63eae43573b7b9e791840d6": "9dc49ee689521260792438eae537c118",
".git/objects/42/e768461724b6a24dac24b96394d1b66f946b41": "f99edac6b71c079b5e6587a90b3bf648",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/cac21a328181e8c8433ceadf00df79b8fe3640": "728218ec19bfaabf2d95a1eaea518dd3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c66aa6b98d7ae2d09c4a4abc6a84dc77bf5f8c": "07fcb06894d4ed00172d064852946138",
".git/objects/50/1ed05ca59ff79b3023d4ee9853b123c02ab628": "a09337fe88460e2e51f61489af6554e0",
".git/objects/51/2e079cd3e664663b47b2d567259609f1ceec5c": "c4c6c11bef364fb42a52e29cae60931e",
".git/objects/5f/6bd0d80d9a531eac2ab4356e74ddc249e95149": "cea063b181ce72b171a0fb07536d79d3",
".git/objects/69/fd865c4d77e2b2577f4f561684c572a0d7ea94": "f1d941e29b5a3438ad255f2c8d1bf3cb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/0c5f18d4af2bb5402eb304111f74214f4fc951": "ae4541bd21ffa4bbf58b64b091a6182a",
".git/objects/73/d1320b06526324065a32ddd332705422767618": "5de7caa38c305535961f388e50b4a9b0",
".git/objects/78/bdfcfc6c2bccc4743dcb5f15cfb3c332812061": "ac325f6b22920cc7795c4e0f00f1836d",
".git/objects/7a/bb068f8c42542a04d23bf63f30529325936051": "04d7c9d4a8f849a16ba00699a418e4a7",
".git/objects/7b/d506a06fe4779620a119977789bd73b9b233f0": "ffb4f297af7caa92daa7f9664de4eb5c",
".git/objects/7c/2dc6c0ac1a02f01c10e678eb9973451d946fda": "1119e5f88b67af969a530c6033df251b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/ad0f9ed49f412e9727cea491976aa1f7c07580": "b857e21d78eb2733ab136dfcfe9eec1d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2a35a9fe875431c7c91d2fd4097aeb37bdf8ac": "2f9da312046f9e553e5e638dc633aebb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/48bc021e8ae61505ab3d203e6d16b718d3af3b": "f1ea003023e40da8fa0f5d2d91312045",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/7eb55139d1d6c1060ea689d60514b7abec17ea": "9e08062d6df1b7e7813c70192f25583b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/c4026f32d42cc187b02be28b2aade29bf3efb0": "327966aaaf9e4bddd98e9aca637065ee",
".git/objects/a1/631387f569cf0bc3fb096194deb0329f9d13eb": "6cda15c8b12d8a3e25c9933c2d48fd7f",
".git/objects/a1/9a9f114a1cf6d4ba2ebe41548d7f9550694e94": "18eebe99f352c5a4851b5d92fe1e28d4",
".git/objects/a2/ab6638cf54aca8caf488861ae42ebfca612f77": "37da8db76108f04e2eca55b43628a653",
".git/objects/a8/121d9b884b1ac039a9cbe905b5426c731cb4ce": "7b6a4c09872b052aca00671e1fa94851",
".git/objects/ac/a2e0dec8918eba15659f3316d8b90d49929b07": "e8a171fcfda8470ce72564e967cda407",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/adfbace6edd3a74e3d44c373744c5420a1b15c": "3ef20871c9f07ef98ff8a6fdd81d6c9f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/a370dbac71486edf3ac061ad39a8750c806098": "f7d0ec6448fb2675739eb56a8ddd5fb7",
".git/objects/ba/f24f6abdd062650a19faf1936cd3786755efe7": "c2bb0f6f91b3116d6f8c116f4a8da158",
".git/objects/c7/85e70c2e71f25ea805861087875e82cd347c02": "aec3d55c8ec1e76790bf2123be220bb8",
".git/objects/c9/746738d3c948033056066a5b5307edc776f0ff": "2c99d75b32131b39f5a792c4121ad2a0",
".git/objects/ca/40254c223e45d17c296d75bb87bde0ea6b60ed": "17ce0edc2da5076bbe8c1a08288530d5",
".git/objects/cc/65f0274dea792c0e32761cbba07ad3a91fc0c9": "27529e0697d5a6f4fc4181878319297f",
".git/objects/cf/935a5708d7303119595c0cb0d9dcc99ed66568": "cbead1a80cb1f16f85b70e9716c76899",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a2b5e54fd106e074f0889615bfbb1a48284d55": "ee58a2f85bd7fe374cfacf47fd356d5d",
".git/objects/d5/6405f5fbac962e204d1fa7b05678e20f5c0674": "6c6cff78e2087c64c7f0f7110003556a",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d93f4541a9552590e4fca19beefc32ae96ee4b": "e45d7b1c90f7549d1b7c2e4dc73a9be7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e5/9d6fe9d2cc493474774bcf25c4c9b8be23d6aa": "85aec7003dac7c9e4aac97c2337c170d",
".git/objects/e8/6b4c368f88a811975682527e3b54d6e1c306d1": "e0784f00d3ee2fff800a9ad6425baf6f",
".git/objects/e8/765560bec4fb17b1b593952aebcdbb71297dd1": "3a471ff3c6a4d1954208a7a3557b03a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a743f879275f369b8908637b1282609555e27c": "a754f4c54c248c6ce4dca80ba7e56e1d",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f1/3e9f9d8b46cc6fccd29291d29a537cf39ff685": "4014fd5763bfefafae5d2556c1add515",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6d2f51aa7e03288bba34190f1e7e46fe54b92d": "adebfa05a65907911c4c706c24460bab",
".git/refs/heads/main": "d0c75998af3e4935aa619e9825441258",
".git/refs/remotes/origin/main": "d0c75998af3e4935aa619e9825441258",
"assets/AssetManifest.bin": "894de4ee1a1035c26285648710374954",
"assets/AssetManifest.bin.json": "e47dc3322428ab33b6f11cea5f948d85",
"assets/AssetManifest.json": "8d142dba7abcbde68a554d5d918c53df",
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
"assets/assets/projects/chat_app.png": "10920cb96d3d6822712fc9b401f20d45",
"assets/assets/projects/colleaguea.png": "fb8456eb961b6e392d109730fb7818b0",
"assets/assets/projects/crimedispose.png": "232cd5ef41b4fcb3323fc79a2f7ee244",
"assets/assets/projects/dailywages.png": "bc5a1f6b155425e87f76d9e9a323a8fd",
"assets/assets/projects/finearts.png": "d64c128f9d0d55070941b3cc876c4bca",
"assets/assets/projects/nearbystore.png": "ce60888d9bb37a9627f9ff17851b660a",
"assets/assets/projects/petcare.png": "7011ce926c6bf8195e3b0028e4fbb586",
"assets/assets/projects/portfolio.png": "da61d33afb767d3ff61615d260f931e8",
"assets/assets/projects/qhire.png": "a842c1b668259f46b9369a65adb6fca0",
"assets/assets/projects/story-inyourhand.png": "92490782c8a86df8fbd827084820592c",
"assets/assets/projects/talenthub.png": "eccb255b67b8129110385c8d3f7df1bd",
"assets/assets/projects/vehicle_pooling.jpeg": "e99268f62d291c5fc5476adc657789f5",
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
"flutter_bootstrap.js": "d296e312074c78bdb7bf4b4289dad2a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd72db540d3c5ba427a6f918890d55c0",
"/": "cd72db540d3c5ba427a6f918890d55c0",
"main.dart.js": "f391334fa7e25641c057a73cbd7a1bc2",
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
