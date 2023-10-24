import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Programing, Search, Save, Covid } from "@pages";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
