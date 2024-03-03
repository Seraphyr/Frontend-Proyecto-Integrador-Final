import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function usePlaylist(){

    const [playlist, setPlaylist] = useState([])
    const [playlistMC, setPlaylistMC] = useState([])
    const [playlistUsuario, setPlaylistUsuario] = useState([])

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
        setPlaylist(data)
    }


    const musicaContextual = async (listaGeneros) => {
        const response = await fetch("http://localhost:3000/crearMusicaContextual",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            },

            body: JSON.stringify({
                listaGeneros
            })        
        })
        const data = await response.json()
        setPlaylistMC(data)
    }

    const verPlaylistUsuario = async () => {
        const response = await fetch("http://localhost:3000/verPlaylistUsuario",{
            headers: {
                "Content-Type": "application/json",
                token: Cookies.get("token"),
            }
        })
        const data = await response.json()
        setPlaylistUsuario(data)
    }


return{
    cupidoMusical,
    playlist,
    musicaContextual,
    playlistMC,
    verPlaylistUsuario,
    playlistUsuario
}

}