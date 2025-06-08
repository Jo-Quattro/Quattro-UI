import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Tutorial from "./pages/Tutorial.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/", // The root path
        element: <Home />,
      },
      {
        path: "/tutorial/:id",
        element: <Tutorial />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
