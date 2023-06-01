'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7e110879c2a13a3e599279ad2fca1764",
"splash/img/light-2x.png": "81d9a91b79eb19ec892004b794cfd022",
"splash/img/dark-4x.png": "77bab14cc9245894114e680f84ba670e",
"splash/img/light-3x.png": "8e1e00f770364fca8aee31bd9219064e",
"splash/img/dark-3x.png": "8e1e00f770364fca8aee31bd9219064e",
"splash/img/light-4x.png": "77bab14cc9245894114e680f84ba670e",
"splash/img/dark-2x.png": "81d9a91b79eb19ec892004b794cfd022",
"splash/img/dark-1x.png": "1ecd1ec29a1e667855c05f2b571ff4b4",
"splash/img/light-1x.png": "1ecd1ec29a1e667855c05f2b571ff4b4",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "cf46f7f07ad5ec9ea98393b4bd4aa625",
"index.html": "f82494dfb52f582d4daae7ecf632a75f",
"/": "f82494dfb52f582d4daae7ecf632a75f",
"main.dart.js": "62a6ee99e42d9ca85af7f77a317536ab",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "33e267e249aa1e2c7d593087b6bf9c91",
"assets/svg/settings.svg": "ddac4a231fa3fe7388d02152b90865cc",
"assets/svg/bill.svg": "a62d68dafe93d9765dddbfb1cc0d1f9c",
"assets/svg/bgweb.svg": "cce43d9eca8ae20cf3c264705b8b92a0",
"assets/tutorials.json": "3462319049b0b4284e9ff2f8b78e4371",
"assets/images/map_tooltip_04.png": "36e3810e7a0a49aff541b11bf1fa2595",
"assets/images/map_tooltip_01.png": "47626302a4293971ba12dc17fd24b404",
"assets/images/ist.png": "f7600e3d78d868b9d07082ace9e15a69",
"assets/images/beyaz_logo.png": "fc32fa5b418ce2ca9ded99d869fdf658",
"assets/images/map_tooltip_02.png": "a1b4e8267fad6ba4e188947fe36fbea9",
"assets/images/map_tooltip_03.png": "512db7758efeedf3955f7e30f74493fd",
"assets/images/tooltip1.png": "f50e5391afb0143d74bc7762daac25fb",
"assets/images/map_dot2.png": "e92c6c11b84a28c5c51d365b5428139a",
"assets/images/tooltip2.png": "bbb836330ee00f9c0fd549b3befcd73d",
"assets/images/tooltip3.png": "3cf106968ae8a9ec046f2104ccccb1d4",
"assets/images/loginbackground.png": "ecc553f014e85b722de3dd2869ed49ca",
"assets/images/img.png": "7dc5a8a976a5afe8b3d27b10bfc3eb4a",
"assets/images/form_tooltip1.png": "39f701c14088c97a9fef1cebf712bce3",
"assets/images/error-image-generic.png": "d92c3b396abfd61ace753ac1ada50522",
"assets/images/tooltip4.png": "f912e94619cf9ced1e3b56414440436e",
"assets/images/form_tooltip2.png": "986f5a678f599d76dad571bdb320fe9d",
"assets/images/google-play-badge.png": "b1ed9c6843bc989098b988ed5869d456",
"assets/images/logo.png": "3358c706ac08983212a6c6a5905565ed",
"assets/images/appstoredown.png": "6b0293280106af28b7bf2c55fc4642b6",
"assets/images/installimage.png": "f4f6e9e607b47aa6e302d338437d36a0",
"assets/images/devre.png": "9e0d14b54674e3c29d55ae6d06ff61ef",
"assets/images/mapicons/bingsatellite2.PNG": "20b9d1507607306770d87b34c155bc91",
"assets/images/mapicons/bingstreet.PNG": "05e7e380322a63a54d220549ecb52f30",
"assets/images/mapicons/googlestreet.PNG": "db20a4e192816f3cf6c3624439bb028d",
"assets/images/mapicons/blank.PNG": "550f8262e0ee05fb4550b1534a1117bf",
"assets/images/mapicons/googlesatellite.PNG": "09c81b87c55c576d5a022ad61bb8f7f4",
"assets/images/mapicons/osmstreet.PNG": "e3e72258b97d85dab014dcff90b2d8ba",
"assets/images/mapicons/google.png": "e61e895ab828e6d34dba1bd969d1706a",
"assets/images/mapicons/bingsatellite.PNG": "20b9d1507607306770d87b34c155bc91",
"assets/images/4.png": "5d320b47f57251bc4b9793c4142d095f",
"assets/images/180.png": "408aff9c57e775440423017bdeeb33f4",
"assets/images/5.png": "024990281c8ed2a352921e953c125e3a",
"assets/images/phone_frame.png": "64748e20e5baec52bce1c3095333b102",
"assets/images/web_logo.png": "74924b6bd5275edb39af683928bf848f",
"assets/images/ba_main.png": "de77348f747fda230521fe29d0589499",
"assets/images/2.png": "557e44e02b6be6b723e854a7efe9d449",
"assets/images/3.png": "de10b6aeb8b493f5b296b0001a683f36",
"assets/images/webloginimage.png": "167567420fd6eba9e80161686b122fba",
"assets/images/1.png": "a5e4e07c616cc670ba3dfb37f5f0226f",
"assets/providers.json": "baf2b5aa2b5e4fd2aea4905fe1f89752",
"assets/AssetManifest.json": "0c273b00010c53b8f19f183259e313bb",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "5cdf781a8caacd020a79292221e94881",
"assets/FontManifest.json": "753a06d84cdbbe54cd25baf1a61f963a",
"assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/icons/arrow-circle-down-bold.svg": "dceb1c66037d2b6a8ed5cad674c7eb88",
"assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/icons/close-circle-twotone.svg": "0ede58c64249ba12462e3f19548f45bb",
"assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/icons/map.svg": "fdd162e5c5644030e0d87c2894b9ecbc",
"assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/icons/markers.png": "9bf1977f90c2347c3674fde037410433",
"assets/icons/doc.svg": "9845f8ccdc01a07c686b069367f0a205",
"assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/icons/projects.svg": "8120a73479ebeb554dec6db0f4b63098",
"assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/icons/location-add-sharp.svg": "2bd89dd218a2ebe9ede32cdd97bbbca1",
"assets/icons/document-cloud-twotone.svg": "038a063562bf14e293a4f2a68b259a69",
"assets/icons/gps.svg": "ddb0534be1a0809f017e27ef6cbdb145",
"assets/icons/location-sharp%2520(1).svg": "4f5e5478749a521eb1a695ae055d81fc",
"assets/icons/tick-circle-bulk.svg": "b3f0daba45ec38fd5a9209657e8492b4",
"assets/icons/arrow-circle-right.svg": "5974dd90bf13f3a1e26a7e363619c673",
"assets/icons/parker.png": "e0fa1ef7389429245fa65e549d1bc260",
"assets/icons/cloud-cross.svg": "ab158f87e0ac77ad67dd61d9ccf8563f",
"assets/icons/warning-circle.svg": "85608fbcbd00e435ac02ed8c87575f70",
"assets/icons/addmarker.svg": "2bd89dd218a2ebe9ede32cdd97bbbca1",
"assets/icons/setting.svg": "ddac4a231fa3fe7388d02152b90865cc",
"assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/icons/send-bold.svg": "28fc5cf95d1912d2002c38508525f43e",
"assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/icons/document-download.svg": "7cdbfd397db655b6572bf5dff79c2159",
"assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/icons/info-circle-twotone.svg": "a573a7302ebf6e3529e41bc58da48cca",
"assets/icons/danger.svg": "30f2c531551d62fdbea438a24ee323ce",
"assets/icons/document-download_primary.svg": "100112cb44f5a28a4cbf93bc7ff5cc1b",
"assets/icons/edit-bold.svg": "901826c7b58ead1ac72439133761294b",
"assets/icons/recordmarker.svg": "6c43f00392ad0206a0c49970ce202a12",
"assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/icons/arrow-circle-right-gray.svg": "d5ab344a3fa790d5d492d006b831d1ee",
"assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/icons/company.svg": "3db2e014a6f028fe42c4772b13b6ebff",
"assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/icons/location-add-bold.svg": "897e9135fb2437bbd2629b60855b15dd",
"assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "778e7bf65d863e9fa664e322e885d833",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/lottie/loading.json": "e3c5f9ec2e5f22d776cb6e1187690b93",
"assets/AssetManifest.smcbin": "991975e67569983a18a1c4d7ae53301f",
"assets/fonts/MaterialIcons-Regular.otf": "343f3b4869c06912a75f3e59feedad86",
"assets/fonts/NfieldIcons.ttf": "35110cf46ba7ea1694b2897fda5dddee",
"assets/assets/svg/settings.svg": "ddac4a231fa3fe7388d02152b90865cc",
"assets/assets/svg/bill.svg": "a62d68dafe93d9765dddbfb1cc0d1f9c",
"assets/assets/svg/bgweb.svg": "cce43d9eca8ae20cf3c264705b8b92a0",
"assets/assets/database/tr_adres_sqlite.db": "4cf74394569ed881e606ff6e2b730e42",
"assets/assets/tutorials.json": "3462319049b0b4284e9ff2f8b78e4371",
"assets/assets/images/map_tooltip_04.png": "36e3810e7a0a49aff541b11bf1fa2595",
"assets/assets/images/map_tooltip_01.png": "47626302a4293971ba12dc17fd24b404",
"assets/assets/images/ist.png": "f7600e3d78d868b9d07082ace9e15a69",
"assets/assets/images/beyaz_logo.png": "fc32fa5b418ce2ca9ded99d869fdf658",
"assets/assets/images/map_tooltip_02.png": "a1b4e8267fad6ba4e188947fe36fbea9",
"assets/assets/images/map_tooltip_03.png": "512db7758efeedf3955f7e30f74493fd",
"assets/assets/images/tooltip1.png": "f50e5391afb0143d74bc7762daac25fb",
"assets/assets/images/map_dot2.png": "e92c6c11b84a28c5c51d365b5428139a",
"assets/assets/images/tooltip2.png": "bbb836330ee00f9c0fd549b3befcd73d",
"assets/assets/images/tooltip3.png": "3cf106968ae8a9ec046f2104ccccb1d4",
"assets/assets/images/loginbackground.png": "ecc553f014e85b722de3dd2869ed49ca",
"assets/assets/images/img.png": "7dc5a8a976a5afe8b3d27b10bfc3eb4a",
"assets/assets/images/form_tooltip1.png": "39f701c14088c97a9fef1cebf712bce3",
"assets/assets/images/error-image-generic.png": "d92c3b396abfd61ace753ac1ada50522",
"assets/assets/images/tooltip4.png": "f912e94619cf9ced1e3b56414440436e",
"assets/assets/images/form_tooltip2.png": "986f5a678f599d76dad571bdb320fe9d",
"assets/assets/images/google-play-badge.png": "b1ed9c6843bc989098b988ed5869d456",
"assets/assets/images/logo.png": "3358c706ac08983212a6c6a5905565ed",
"assets/assets/images/appstoredown.png": "6b0293280106af28b7bf2c55fc4642b6",
"assets/assets/images/installimage.png": "f4f6e9e607b47aa6e302d338437d36a0",
"assets/assets/images/devre.png": "9e0d14b54674e3c29d55ae6d06ff61ef",
"assets/assets/images/mapicons/bingsatellite2.PNG": "20b9d1507607306770d87b34c155bc91",
"assets/assets/images/mapicons/bingstreet.PNG": "05e7e380322a63a54d220549ecb52f30",
"assets/assets/images/mapicons/googlestreet.PNG": "db20a4e192816f3cf6c3624439bb028d",
"assets/assets/images/mapicons/blank.PNG": "550f8262e0ee05fb4550b1534a1117bf",
"assets/assets/images/mapicons/googlesatellite.PNG": "09c81b87c55c576d5a022ad61bb8f7f4",
"assets/assets/images/mapicons/osmstreet.PNG": "e3e72258b97d85dab014dcff90b2d8ba",
"assets/assets/images/mapicons/google.png": "e61e895ab828e6d34dba1bd969d1706a",
"assets/assets/images/mapicons/bingsatellite.PNG": "20b9d1507607306770d87b34c155bc91",
"assets/assets/images/4.png": "5d320b47f57251bc4b9793c4142d095f",
"assets/assets/images/180.png": "408aff9c57e775440423017bdeeb33f4",
"assets/assets/images/5.png": "024990281c8ed2a352921e953c125e3a",
"assets/assets/images/phone_frame.png": "64748e20e5baec52bce1c3095333b102",
"assets/assets/images/web_logo.png": "74924b6bd5275edb39af683928bf848f",
"assets/assets/images/ba_main.png": "de77348f747fda230521fe29d0589499",
"assets/assets/images/2.png": "557e44e02b6be6b723e854a7efe9d449",
"assets/assets/images/3.png": "de10b6aeb8b493f5b296b0001a683f36",
"assets/assets/images/webloginimage.png": "167567420fd6eba9e80161686b122fba",
"assets/assets/images/1.png": "a5e4e07c616cc670ba3dfb37f5f0226f",
"assets/assets/providers.json": "baf2b5aa2b5e4fd2aea4905fe1f89752",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/arrow-circle-down-bold.svg": "dceb1c66037d2b6a8ed5cad674c7eb88",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/close-circle-twotone.svg": "0ede58c64249ba12462e3f19548f45bb",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/map.svg": "fdd162e5c5644030e0d87c2894b9ecbc",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/markers.png": "9bf1977f90c2347c3674fde037410433",
"assets/assets/icons/doc.svg": "9845f8ccdc01a07c686b069367f0a205",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/projects.svg": "8120a73479ebeb554dec6db0f4b63098",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/location-add-sharp.svg": "2bd89dd218a2ebe9ede32cdd97bbbca1",
"assets/assets/icons/document-cloud-twotone.svg": "038a063562bf14e293a4f2a68b259a69",
"assets/assets/icons/gps.svg": "ddb0534be1a0809f017e27ef6cbdb145",
"assets/assets/icons/location-sharp%2520(1).svg": "4f5e5478749a521eb1a695ae055d81fc",
"assets/assets/icons/tick-circle-bulk.svg": "b3f0daba45ec38fd5a9209657e8492b4",
"assets/assets/icons/arrow-circle-right.svg": "5974dd90bf13f3a1e26a7e363619c673",
"assets/assets/icons/parker.png": "e0fa1ef7389429245fa65e549d1bc260",
"assets/assets/icons/cloud-cross.svg": "ab158f87e0ac77ad67dd61d9ccf8563f",
"assets/assets/icons/warning-circle.svg": "85608fbcbd00e435ac02ed8c87575f70",
"assets/assets/icons/addmarker.svg": "2bd89dd218a2ebe9ede32cdd97bbbca1",
"assets/assets/icons/setting.svg": "ddac4a231fa3fe7388d02152b90865cc",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/send-bold.svg": "28fc5cf95d1912d2002c38508525f43e",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/document-download.svg": "7cdbfd397db655b6572bf5dff79c2159",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/info-circle-twotone.svg": "a573a7302ebf6e3529e41bc58da48cca",
"assets/assets/icons/danger.svg": "30f2c531551d62fdbea438a24ee323ce",
"assets/assets/icons/document-download_primary.svg": "100112cb44f5a28a4cbf93bc7ff5cc1b",
"assets/assets/icons/edit-bold.svg": "901826c7b58ead1ac72439133761294b",
"assets/assets/icons/recordmarker.svg": "6c43f00392ad0206a0c49970ce202a12",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/arrow-circle-right-gray.svg": "d5ab344a3fa790d5d492d006b831d1ee",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/company.svg": "3db2e014a6f028fe42c4772b13b6ebff",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/location-add-bold.svg": "897e9135fb2437bbd2629b60855b15dd",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/lottie/loading.json": "e3c5f9ec2e5f22d776cb6e1187690b93",
"assets/assets/fonts/NfieldIcons.ttf": "35110cf46ba7ea1694b2897fda5dddee",
"assets/assets/kvkk.json": "be57f17edbbb98508aba6b127c1532e8",
"assets/kvkk.json": "be57f17edbbb98508aba6b127c1532e8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
