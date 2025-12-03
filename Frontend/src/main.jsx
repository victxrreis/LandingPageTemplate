/* --- ENTRY POINT: REACT DOM --- */
import React from "react";
import ReactDOM from "react-dom/client";

/* --- GLOBAL STYLES IMPORT --- */
import "./index.css";

/* --- MAIN APP COMPONENT --- */
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
