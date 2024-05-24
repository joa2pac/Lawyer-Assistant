import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { LawyerAssistant } from "./LawyerAssistant";
import { SidebarProvider } from "./core/contexts/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <LawyerAssistant />
    </SidebarProvider>
  </React.StrictMode>
);
