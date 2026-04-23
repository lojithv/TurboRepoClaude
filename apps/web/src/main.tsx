import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "@repo/ui/styles.css";
import "./index.css";
import { App } from "./App";
import { UIKit } from "./ui-kit";

const isUIKitRoute =
  import.meta.env.DEV && window.location.pathname.startsWith("/ui-kit");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      {isUIKitRoute ? <UIKit /> : <App />}
    </PrimeReactProvider>
  </StrictMode>,
);
