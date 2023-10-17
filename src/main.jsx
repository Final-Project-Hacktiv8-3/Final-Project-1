import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Programing, Search } from "./pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programing",
    element: <Programing />,
  },
  {
    path: "/search/:search",
    element: <Search />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
