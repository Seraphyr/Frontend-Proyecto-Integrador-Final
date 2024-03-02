import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useArtistas(){
    const [listaArtistas, setListaArtistas] = useState([])
    const [artistasRandom, setArtistasRandom] = useState([])
    const [listaSeleccionados, setlistaSeleccionados] = useState([])

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
        setArtistasRandom(data)
    }

    const verArtistasSeleccionados = async (listaSeleccionados) => {
        const response = await fetch("http://localhost:3000/verArtistasSeleccionados",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            },

            body: JSON.stringify({
                listaSeleccionados
            })        
        })
        const data = await response.json()
        setlistaSeleccionados(data)
    }

    return{
        verArtistas,
        listaArtistas,
        artistasRandom,
        verArtistasRandom,
        listaSeleccionados,
        verArtistasSeleccionados
    }
    
}