import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App"; // Stelle sicher, dass der Pfad zur App.tsx korrekt ist
import * as serviceWorker from "./serviceWorker.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

/* Globale Variablen setzen */
window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}

/* Registrierung des Service Workers */
serviceWorker.register();
