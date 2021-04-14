/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e47984742a9c68753e09eba59c943ed4"
  },
  {
    "url": "advertorial/index.html",
    "revision": "738c226ec9a1bc33dbbb687a9430299b"
  },
  {
    "url": "assets/css/0.styles.6946fb63.css",
    "revision": "101f1049da5d2858dafeaedc34614aa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.f67501ac.js",
    "revision": "a9603d862f4c7b61486330d3d1245f6a"
  },
  {
    "url": "assets/js/4.3c4da968.js",
    "revision": "71cd34256b5fb23a608d3756624881aa"
  },
  {
    "url": "assets/js/5.fc02b28e.js",
    "revision": "7dcf401ad550bebe4aa451bcbccfa4c5"
  },
  {
    "url": "assets/js/6.aa83e1a9.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.c4484c6f.js",
    "revision": "2e6f3d8aae08d2b4c60308fadb9f361f"
  },
  {
    "url": "guide.html",
    "revision": "0598f5327779dffb53ecd3ab1ae94bdb"
  },
  {
    "url": "images/photo.png",
    "revision": "d516236d3ed062cf7b2273a5afe5b482"
  },
  {
    "url": "index.html",
    "revision": "b0bf8ab7147d01b9298a514ca816b4ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
