import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className="angry-multigradient">
            <div className="login-container">
                <div ><img src="/logo-large.png" className="logo" alt="" /></div>
                <div className="gif">
                    <video src="/gif.mp4" width={"100%"} height={"100%"} autoPlay>
                    </video>
                </div>
                <form id="login-form">
                    <button type="button" className='btn'>Registrarse Gratis</button>
                    <button type="button" className='btn-transparente'>Iniciar Sesión</button>
                </form>
            </div>
        </div>

    )
}
