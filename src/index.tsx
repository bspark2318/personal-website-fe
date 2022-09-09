import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
//eslint-disable-next-line
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Toaster />
    </Router>
  </React.StrictMode>
);
