import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Update import statement
import ReactDOM from "react-dom"; // Update import statement
import App from "./App";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import Agent from "./components/Agent";
import AgentList from "./components/AgentList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <App />,
    children: [
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <AgentList />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Agent />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Agent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
