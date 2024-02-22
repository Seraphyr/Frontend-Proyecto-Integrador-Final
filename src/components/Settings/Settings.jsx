import './Settings.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function Settings() {
    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log(localStorage)
  };
  return (
    <>
    <Header titulo={"Configuración"} />
    <div className="wrapper-settings ">
      <div>
        
        <main className="main-settings">
          <button className="orange-button">Editar Apariencia</button>
          <button className="black-button">Editar Perfil</button>
        </main>
      </div>
      <div>
        <div>
          <span className="center-version">Versión: V1.25.03</span>
        </div>
        <footer className="footer-settings">
          <span onClick={handleLogout}>Cerrar Sesion</span>
        </footer>
      </div>
    </div>
    </>
  )
}
