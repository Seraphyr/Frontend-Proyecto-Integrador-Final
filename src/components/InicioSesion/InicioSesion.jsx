import React, { useState } from 'react'
import './InicioSesion.css'
import eyeOpen from '/eyeOpen.png'
import eyeClosed from '/eyeClosed.png'
import Header from '../Header/Header'

export default function Login() {
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className='form'>
            <Header titulo={"Iniciar Sesión"} />

                <form className="form-inicio">
                    <label>Nombre de Usuario o E-mail:</label>
                    <input className="input-form" type="text" name="mara_pg" />
                    <label >Contraseña:</label>
                    <div>
                        <input className="input-form" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <img src={showPassword ? eyeOpen : eyeClosed} alt="toggle password visibility" onClick={togglePasswordVisibility} className='eye-icon' />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>

                <div className="passChange">¿Olvidaste tu contraseña?</div>
            </div>
        </>
    )
}
