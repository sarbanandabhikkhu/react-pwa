import { clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);

registerRoute(
  ({ url }) => url.origin === "https://fonts.gstatic.com",
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.origin === "https://api.themoviedb.org" ||
    url.pathname === "/3/discover/tv",
  new StaleWhileRevalidate({
    cacheName: "movie-api-resourcses",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 1,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "static-resourcses",
  })
);
