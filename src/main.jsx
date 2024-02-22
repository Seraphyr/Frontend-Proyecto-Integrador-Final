import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login/Login.jsx'
import Layout from './components/Layout/Layout.jsx';
import Registro from './components/Registro/Registro.jsx';
import InicioSesion from './components/InicioSesion/InicioSesion.jsx';
import Home from './components/Home/Home.jsx'
import Registro2 from './components/Registro2/Registro2.jsx';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario.jsx';
import Settings from './components/Settings/Settings.jsx';
import Playlist from './components/Playlist/Playlist.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/registro2",
        element: <Registro2 />,
      },
      {
        path: "/iniciosesion",
        element: <InicioSesion />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/perfil",
        element: <PerfilUsuario />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
