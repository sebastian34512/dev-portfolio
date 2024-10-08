// Definiert Typen für die Konfigurationsoptionen des Service Workers
interface Config {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

const isLocalhost: boolean = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
);

export function register(config?: Config): void {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl: URL = new URL(
      process.env.PUBLIC_URL!,
      window.location.href,
    );
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl: string = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA",
          );
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker: ServiceWorker | null = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log(
                  "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.",
                );

                if (config?.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                console.log("Content is cached for offline use.");

                if (config?.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        }
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config): void {
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      const contentType: string | null = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    });
}

export function unregister(): void {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error("Error during service worker unregistration:", error);
      });
  }
}
