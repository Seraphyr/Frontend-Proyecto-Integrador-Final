import React from 'react'
import './Login.css'
import landingGif from '/gif-landing.gif'
export default function Login() {
    return (
        <div className="angry-multigradient">
            <div className="login-container">
                <div ><img src="/logo-large.png" className="logo" alt="" /></div>
                <h2>Música a medida.</h2>
                <div>
                    <img src="/gif-landing.gif" className="gif" />

                </div>
                
            </div>
            <div className='btn-container'>
                    <button type="button" className='btn'>Registrarse Gratis</button>
                    <button type="button" className='btn-transparente'>Iniciar Sesión</button>
                </div>
        </div>

    )
}
