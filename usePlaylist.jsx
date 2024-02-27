import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function usePlaylist(){

    const cupidoMusical = async (listaArtistas) => {
        const response = await fetch("http://localhost:3000/crearCupidoMusical",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            },

            body: JSON.stringify({
                listaArtistas
            })        
        })
        const data = await response.json()
        console.log(data);
    }


return{
    cupidoMusical
}

}