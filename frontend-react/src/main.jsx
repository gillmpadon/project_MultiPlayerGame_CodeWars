import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import UserProfile from "./routes/UserProfile/UserProfile";
import Settings from "./routes/Settings/Settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./routes/ContactUs/Contact";
import SinglePlayer from "./routes/SinglePlayer/SinglePlayer";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import RequestPass from "./routes/RequestPass/RequestPass";
import UpdatePass from "./routes/UpdatePass/UpdatePass";
import PVP from "./routes/PVP/PVP"

import useConfigStore from "./store/configStore";

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
  {
    path: "/requestPassword",
    element: <RequestPass />,
  },
  {
    path: "/updatePassword",
    element: <UpdatePass />,
  },
  {
    path: "/pvp",
    element: <PVP/>
  }

]);

const App = () => {
  const isPlaying = useConfigStore(state => state.isPlaying)
  return (
    <div>
      <AudioPlayer isPlaying={isPlaying}/>
      <RouterProvider router={router} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
