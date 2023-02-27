import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import UserProfile from './components/UserProfile/UserProfile';
import Settings from './components/Settings/Settings';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/userProfile",
    element: <UserProfile/>
  },
  {
    path: "/settings",
    element: <Settings/>
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
  
}

export default App
