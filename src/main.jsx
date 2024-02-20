import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login/Login.jsx' 
import Layout from './components/Layout/Layout.jsx';
import Registro from './components/Registro/Registro.jsx';
import InicioSesion from './components/InicioSesion/InicioSesion.jsx';
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
         element: <Login/>, 
      },
      {
        path: "/registro",
        element: <Registro/>,
      },
      {
        path: "/iniciosesion",
        element: <InicioSesion/>,
      },
      {
        path: "/home",
        element: <Home/>,
      
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
