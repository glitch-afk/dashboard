if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>c(e,n),f={module:{uri:n},exports:i,require:r};s[n]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/L8PYZX6ox1UWKBoriStcn/_buildManifest.js",revision:"9f5932fa72be161bea471d935346a4e8"},{url:"/_next/static/L8PYZX6ox1UWKBoriStcn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/150-9febb9b7807ebb8f.js",revision:"9febb9b7807ebb8f"},{url:"/_next/static/chunks/28-93da3ff449e0d242.js",revision:"93da3ff449e0d242"},{url:"/_next/static/chunks/638-b8e69c9557bdc17d.js",revision:"b8e69c9557bdc17d"},{url:"/_next/static/chunks/645-22f23cd2f676ef87.js",revision:"22f23cd2f676ef87"},{url:"/_next/static/chunks/664-dc9bc1d709843c0a.js",revision:"dc9bc1d709843c0a"},{url:"/_next/static/chunks/675-f67518be07486815.js",revision:"f67518be07486815"},{url:"/_next/static/chunks/789-c3e12890a34fbb15.js",revision:"c3e12890a34fbb15"},{url:"/_next/static/chunks/841-58bbf848bbc86feb.js",revision:"58bbf848bbc86feb"},{url:"/_next/static/chunks/865-e114b910dc1c6b27.js",revision:"e114b910dc1c6b27"},{url:"/_next/static/chunks/944-543305285b215f33.js",revision:"543305285b215f33"},{url:"/_next/static/chunks/framework-ffee79c6390da51e.js",revision:"ffee79c6390da51e"},{url:"/_next/static/chunks/main-661084d059e91107.js",revision:"661084d059e91107"},{url:"/_next/static/chunks/pages/404-47b24df2771427e5.js",revision:"47b24df2771427e5"},{url:"/_next/static/chunks/pages/_app-834ff3b89c052c9b.js",revision:"834ff3b89c052c9b"},{url:"/_next/static/chunks/pages/_error-8e848193de3c139c.js",revision:"8e848193de3c139c"},{url:"/_next/static/chunks/pages/auth-05407cd56cf3502f.js",revision:"05407cd56cf3502f"},{url:"/_next/static/chunks/pages/auth/user-details-3345310edfdf6cfd.js",revision:"3345310edfdf6cfd"},{url:"/_next/static/chunks/pages/dashboard-6a01cf467260d85d.js",revision:"6a01cf467260d85d"},{url:"/_next/static/chunks/pages/dashboard/allUsers-83cc0acfb841ce0f.js",revision:"83cc0acfb841ce0f"},{url:"/_next/static/chunks/pages/dashboard/authSession-23ec49f243947090.js",revision:"23ec49f243947090"},{url:"/_next/static/chunks/pages/dashboard/manageKeys-7504fda671bc2610.js",revision:"7504fda671bc2610"},{url:"/_next/static/chunks/pages/dashboard/nftContracts-0e23e879a674e478.js",revision:"0e23e879a674e478"},{url:"/_next/static/chunks/pages/dashboard/transactions-28eae7554da600e6.js",revision:"28eae7554da600e6"},{url:"/_next/static/chunks/pages/index-7492701497d0942d.js",revision:"7492701497d0942d"},{url:"/_next/static/chunks/pages/nft/nft-details-a7197c7a52c83a2b.js",revision:"a7197c7a52c83a2b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7b5b1130c7462b0c.js",revision:"7b5b1130c7462b0c"},{url:"/_next/static/css/d3e0d9a1505cba25.css",revision:"d3e0d9a1505cba25"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/404.88f7f707.svg",revision:"9946c2eac18c520941269bc63fe32c8f"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/assets/404.svg",revision:"9946c2eac18c520941269bc63fe32c8f"},{url:"/assets/logo.svg",revision:"22152364ba83674d33c1dcc17f594b42"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));