import React from "react"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import Home from "./Pages/Home/Home.jsx"
import Installs from "./Pages/Installs/installs.jsx";
import Apps from "./Pages/Apps/Apps.jsx";
import NotFoundPage from "./componenets/404/notFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFoundPage />,
    children:[
      {index: true, Component: Home},
      {path: 'apps', Component: Apps},
      {path: 'installs', Component: Installs}
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
)
