import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Covid } from "./pages/Covid";
import { Home, Programing, Search, Save } from "./pages";

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
    path: "/covid",
    element: <Covid />,
  },
  {
    path: "/search/:search",
    element: <Search />,
  },
  {
    path: "/save",
    element: <Save />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
