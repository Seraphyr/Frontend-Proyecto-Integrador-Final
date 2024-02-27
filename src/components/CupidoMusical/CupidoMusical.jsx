import { useEffect, useState } from "react"
import useArtistas from "../../../api/useArtistas"
import './cupidoMusical.css'
import usePlaylist from "../../../api/usePlaylist"
import Header from "../Header/Header"

export default function CupidoMusical() {
    const {verArtistas, listaArtistas} = useArtistas()
    const {cupidoMusical} = usePlaylist()

    const [listaID, setListaID] = useState([])

    function recuperarID(artistaID) {
        setListaID([...listaID, artistaID])
    }

    useEffect(() => {
        verArtistas()
    }, [])

    function crearPlaylist(){
        cupidoMusical(listaID)
    }

    console.log(listaID);
    return (
        <>
        <Header titulo="Cupido Musical" />
        <div>
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
        </>
    )
}