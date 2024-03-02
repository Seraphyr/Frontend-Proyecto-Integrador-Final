import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useUsuarios(){
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState()

    const login = async (username, password) => {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                username,
                password
            }),
        });

        const data = await response.json()
        
        if (response.ok && data.token) {
            Cookies.set("token", data.token, {expires:0.007});
            navigate("/home")
        } else {
            alert(data.error)
        }
    }

    const registro = async (email, username, password) => {
        const response = await fetch("http://localhost:3000/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email,
                username,
                password
            }),
        })

        const data = await response.json()
        if (response.ok) {
            navigate("/home")
        } else {
            alert(data.error)
        }
        navigate("/") 
    }

    const verNombre = async () => {
        const response = await fetch("http://localhost:3000/verNombre",{
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            }
        })
    
            const data = await response.json();
            setNombreUsuario(data[0].nombre_de_usuario)
    }

    return{
        login,
        registro,
        verNombre,
        nombreUsuario
    }
    
}