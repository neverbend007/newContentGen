import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/globals.css";

const getDomain = () => {
  if (window.location.hostname.includes('ngrok')) {
    return 'https://keen-mink-naturally.ngrok-free.app';
  }
  return 'http://localhost:5173';
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);