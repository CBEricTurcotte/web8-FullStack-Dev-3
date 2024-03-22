// import * as React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Update import statement
// import ReactDOM from "react-dom"; // Update import statement
// import App from "./App";
// import Login from "./components/Login";
// import Unauthorized from "./components/Unauthorized";
// import Agent from "./components/Agent";
// import AgentList from "./components/AgentList";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: "/unauthorized",
//     element: <App />,
//     children: [
//       {
//         path: "/unauthorized",
//         element: <Unauthorized />,
//       },
//     ],
//   },
//   {
//     path: "/home",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <AgentList />,
//       },
//     ],
//   },
//   {
//     path: "/create",
//     element: <App />,
//     children: [
//       {
//         path: "/create",
//         element: <Agent />,
//       },
//     ],
//   },
//   {
//     path: "/edit/:id",
//     element: <App />,
//     children: [
//       {
//         path: "/edit/:id",
//         element: <Agent />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

////////////////////////////////////////////////////////////////

import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import Agent from "./components/Agent";
import AgentList from "./components/AgentList";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import "./index.css";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

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
        element: <Home />,
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
  {
    path: "/transaction",
    element: <App />,
    children: [
      {
        path: "/transaction",
        element: <Transaction />,
      },
    ],
  },
  {
    path: "/agentList",
    element: <App />,
    children: [
      {
        path: "/agentList",
        element: <AgentList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
