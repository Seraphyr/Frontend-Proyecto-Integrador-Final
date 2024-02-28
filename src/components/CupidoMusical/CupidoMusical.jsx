import { useEffect, useState } from "react"
import useArtistas from "../../../api/useArtistas"
import './cupidoMusical.css'
import usePlaylist from "../../../api/usePlaylist"
import Header from "../Header/Header"
import Playlist from "../Playlist/Playlist"

export default function CupidoMusical() {
    const [verCupidoMusical, setVerCupidoMusical] = useState("ver")
    const [verPlaylist, setVerPlaylist] = useState("noVer")

    const {verArtistas, listaArtistas} = useArtistas()
    const {cupidoMusical, playlist} = usePlaylist()

    const [listaID, setListaID] = useState([])


    function recuperarID(artistaID) {
        setListaID([...listaID, artistaID])
    }

    useEffect(() => {
        verArtistas()
    }, [])

    function crearPlaylist(){
        cupidoMusical(listaID)  
        setVerPlaylist("ver")
        setVerCupidoMusical("noVer")
    }

    return (
        <>
         <div className={verCupidoMusical}>
        <Header titulo="Cupido Musical" />
       
        {
            listaArtistas.map((artista) => {
                return(
                    <div key={artista.id}>
                        <p>{artista.nombre}</p>
                        <button onClick={() => recuperarID(artista.id)} className="id">Id</button>
                    </div>
                )
            })
        }



        <button onClick={crearPlaylist}>Crear Playlist</button>
        </div>

        <div className={verPlaylist}>
            <Playlist playlist={playlist}/>
        </div>
        </>
    )
}