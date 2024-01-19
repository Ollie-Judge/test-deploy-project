import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NewPage from "./pages/newPage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/new",
    element: <NewPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
