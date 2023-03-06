import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import UserProfile from "./routes/UserProfile/UserProfile";
import Settings from "./routes/Settings/Settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./routes/ContactUs/Contact";
import SinglePlayer from "./routes/SinglePlayer/SinglePlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/userProfile",
    element: <UserProfile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/single-player",
    element: <SinglePlayer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
