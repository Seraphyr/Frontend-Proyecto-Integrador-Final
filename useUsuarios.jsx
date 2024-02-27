import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function useUsuarios(){
    const navigate = useNavigate();
    /* const [username, setUsername] = useEffect() */

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
            Cookies.set("token", data.token, {expires:0.0007});
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
        console.log(data);
        navigate("/")
    }

    return{
        login,
        registro
    }
    
}