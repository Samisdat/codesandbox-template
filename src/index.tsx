import { GlobalStyle } from "@vodafone_de/brix-components";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Font from "./Font";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
    <Font />
    <GlobalStyle />
  </React.StrictMode>
);
