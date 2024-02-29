import './musicaContextual.css'
import Header from '../Header/Header'
import useMusicaContextual from '../../../api/useMusicaContextual'
import { useEffect } from 'react'

export default function MusicaContextual() {

    const {verActividad, verEstadoAnimo, verClima, verGenero,
        listaActividad, listaEstadoAnimo, listaClima, listaGenero } = useMusicaContextual()

        useEffect(() => {
            verActividad(),
            verEstadoAnimo(),
            verClima(),
            verGenero()
        }, [])
    return (
        <>
        <Header titulo="Música Contextual"/>
        <div className='contenedor__MContextual'>
        <form action="" >
            <label className='MC__label'>¿Cuál es la ocasión?</label>
            <select name="" id="" className='MC__select'>
            <option disabled selected>Actividad</option>
                {listaActividad.map((actividad) => {
                    
                    return(
                        <>
                            <option key={actividad.id} value={actividad.id} >
                                {actividad.nombre}
                            </option>
                        </>
                    )
                })

                }
            </select>

            <label className='MC__label'>¿Cómo te sientes?</label>
            <select name="" id="" className='MC__select'>
            <option disabled selected>Estado de Ánimo</option>
                {listaEstadoAnimo.map((estadoAnimo) => {
                    return(
                        <>
                            <option key={estadoAnimo.id} value={estadoAnimo.id}>
                                {estadoAnimo.nombre}
                            </option>
                        </>
                    )
                })
                }
            </select>

            <label className='MC__label'>¿Cómo está el clima?</label>
            <select name="" id="" className='MC__select'>          
            <option disabled selected>Clima</option>
                {listaClima.map((clima) => {
                    return(
                        <>
                            <option key={clima.id} value={clima.id}>
                                {clima.nombre}
                            </option>
                        </>
                    )
                })

                }
            </select>
        

        <div className='MC__genero'>
       
            <div className="genero__contenedor">
            <p className='MC__label'>Selecciona hasta 3 géneros:</p>
                {listaGenero.map((genero) => {
                    return(
                        <>
                        <span className="genero__item" key={genero.id}>{genero.nombre}</span>
                        </>
                    )
                })}
            </div>
        </div>

        <button className='MC__boton'>Crear Playlist</button>
        </form>
        </div>
        </>
    )
}
