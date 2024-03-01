import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useArtistas(){
    const [listaArtistas, setListaArtistas] = useState([])
    const [artistasRandom, setArtistasRandom] = useState([])

    const verArtistas = async () => {
        const response = await fetch("http://localhost:3000/verArtistas",{
        headers: {
            "Content-Type": "application/json",
            token: Cookies.get("token"),
        }
    })

        const data = await response.json();

        setListaArtistas(data)
    }
    const verArtistasRandom = async () => {
        const response = await fetch("http://localhost:3000/artistasRandom",{
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            }
        })
        const data = await response.json();
        console.log(data);
        setArtistasRandom(data)
    }

    return{
        verArtistas,
        listaArtistas,
        artistasRandom,
        verArtistasRandom
    }
    
}