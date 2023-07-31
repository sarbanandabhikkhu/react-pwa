import { Workbox } from "workbox-window";

function registerServiceWorker() {
  if ("production" !== process.env.NODE_ENV) {
    return;
  }

  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    wb.addEventListener("install", (event) => {
      if (event.isUpdate) {
        if (confirm("New app update is available, Click OK to refresh")) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
}

export default registerServiceWorker;
