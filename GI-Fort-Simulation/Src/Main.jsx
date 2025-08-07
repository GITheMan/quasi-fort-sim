import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // TailwindCSS or custom global styles

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html contains <div id='root'></div>");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
