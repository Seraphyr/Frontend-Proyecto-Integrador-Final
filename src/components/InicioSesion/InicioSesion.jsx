import React, { useState } from 'react'
import './InicioSesion.css'
import eyeOpen from '/eyeOpen.png'
import eyeClosed from '/eyeClosed.png'
import Header from '../Header/Header'
import useUsuarios from '../../../api/useUsuarios'


export default function InicioSesion() {
    const {login} = useUsuarios()

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function handleOnSumbit(e) {
        e.preventDefault();
        const username = e.target["username"].value;
        const password = e.target["password"].value;
        login(username, password)
    }
    return (
        <>
            <div className='form'>
            <Header titulo={"Iniciar Sesión"} />

                <form className="form-inicio" onSubmit={handleOnSumbit}>
                    <label>Nombre de Usuario o E-mail:</label>
                    <input className="input-form" type="text" name="username" />
                    <label >Contraseña:</label>
                    <div>
                        <input name="password" className="input-form" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <img src={showPassword ? eyeOpen : eyeClosed} alt="toggle password visibility" onClick={togglePasswordVisibility} className='eye-icon' />
                    </div>
                    <button type="submit" className='btn-inicio'>Iniciar Sesión</button>
                </form>

                <div className="passChange">¿Olvidaste tu contraseña?</div>
            </div>
        </>
    )
}
