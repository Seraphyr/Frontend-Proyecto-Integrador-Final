import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function useUsuarios(){
    const navigate = useNavigate();

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
            Cookies.set("token", data.token, {expires: 0.01});
            navigate("/home")
        } else {
            alert(data.error)
        }
    }

    return{
        login
    }
    
}