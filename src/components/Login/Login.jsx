import React from 'react'
import './Login.css'
import landingGif from '/gif-landing.gif'
import { Link } from 'react-router-dom'
export default function Login() {

    return (
        <>
            <div className="login-container">
                <div ><img src="/logo-large.png" className="logo" alt="" /></div>
                <h2 className='container-titulo'>Música a medida.</h2>
                <div>
                    <img src="/gif-landing.gif" className="gif" />
                </div>
                
            </div>
            <div className='btn-container'>
            <Link to={'/registro'}><button type="button" className='btn'>Registrarse Gratis</button></Link>
                    <Link to={'/iniciosesion'}><button  type="button" className='btn-transparente'>Iniciar Sesión</button></Link>
                </div>
        </>

    )
}
