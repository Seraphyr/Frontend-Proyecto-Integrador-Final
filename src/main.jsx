import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login/Login.jsx'
import Layout from './components/Layout/Layout.jsx';
import InicioSesion from './components/InicioSesion/InicioSesion.jsx';
import Home from './components/Home/Home.jsx'
import Registros from './components/Registros/Registros.jsx';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario.jsx';
import Settings from './components/Settings/Settings.jsx';
import CupidoMusical from './components/CupidoMusical/CupidoMusical.jsx';



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
        element: <Registros/>,
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
        path: "/cupidoMusical",
        element: <CupidoMusical/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)