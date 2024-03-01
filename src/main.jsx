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
import Buscador from './components/Buscador/Buscador.jsx';
import Playlist from './components/Playlist/Playlist.jsx'
import MusicaContextual from './components/MusicaContextual/MusicaContextual.jsx';
import Error404 from './components/Error404/Error404.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404/>,
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
        path: "/buscador",
        element: <Buscador />,
      },
      {
        path: "/perfil",
        element: <PerfilUsuario />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/cupidoMusical",
        element: <CupidoMusical/>
      },
      {
        path: "/musicaContextual",
        element: <MusicaContextual/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)