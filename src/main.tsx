import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import "./App.css";
import { ActiveComponentProvider } from "./Providers/ActiveComponentProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <ActiveComponentProvider>
      <App />
    </ActiveComponentProvider>
  </React.StrictMode>,
);
