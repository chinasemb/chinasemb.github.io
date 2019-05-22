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
    "revision": "1c0bd0710c5092fc4331c053391f2afb"
  },
  {
    "url": "accumulate/index.html",
    "revision": "eaf17d67b89ef43558f8f10e3ab829f5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d5e1a23bfdcb35a0388dc6b1d06e64b4"
  },
  {
    "url": "assets/css/0.styles.3b6fec45.css",
    "revision": "c199f3aa9c172b952773ffebe95a8e51"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.20bd3a00.js",
    "revision": "b365409fd2cba7661a4d452821d08d58"
  },
  {
    "url": "assets/js/3.626c4ff3.js",
    "revision": "1de15e332f1d0485131780f586650fc2"
  },
  {
    "url": "assets/js/4.b6a5720a.js",
    "revision": "a43b833a579ac18c74c6022178cd8071"
  },
  {
    "url": "assets/js/5.8f138b1a.js",
    "revision": "cb734f364dcd2168c5e838b6f9b2a8fa"
  },
  {
    "url": "assets/js/6.5885afff.js",
    "revision": "ee85fd798cdb935fcf11a4f4d8658a76"
  },
  {
    "url": "assets/js/7.9d426b66.js",
    "revision": "95ab3c035812b4b83abdebeaec9c3966"
  },
  {
    "url": "assets/js/8.697b4b22.js",
    "revision": "518c636e9a4ab2bc1a7f4a2f6fe44a80"
  },
  {
    "url": "assets/js/9.e3816d90.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.c4a3b976.js",
    "revision": "ab6e174c9c7696309a0700ed0367e3c5"
  },
  {
    "url": "guide.html",
    "revision": "50286681e1240c0377d735b2528ae799"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "4bb47fae1034dc4b976955f715ed2819"
  },
  {
    "url": "microChat/index.html",
    "revision": "acb8752855070795fc835e06d1878662"
  },
  {
    "url": "others/index.html",
    "revision": "4b564301936e3baf21b6b99fcfc9d546"
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
