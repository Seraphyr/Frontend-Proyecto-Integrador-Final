import './home.css'
import Barra from '../Barra/Barra'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";


export default function Home() {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const t = Cookies.get("token");
        setToken(t)
        if(t == "" || t == undefined) {
            navigate("/")
        }
    }, [])
    return (
        <>
            <div className="title-container">
                <h1 className="title">Música ya</h1>
                <div className="icons">
                    <Link to="/home">
                        <button className='btn'>
                            <img src="/history.png" alt="History" />
                        </button>
                    </Link>
                    <Link to="/home">
                        <button className='btn'>
                            <img src="/bell.png" alt="Bell" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container">
    <div className="item">
    <Link to="/cupidoMusical">
        <img src="/cupido-musical-illustration.png" alt="Angel"/></Link>
        <div>
            <h2>Cupido Musical</h2>
            <p>Tus artistas favoritos nunca van a
                dejarte con el corazón roto.
            </p>
        </div>
    </div>
    <div className="item">
    <Link to="/musicaContextual">
        <img src="/contextual-illustration.png" alt="?" /></Link>
        <div>
            <h2>Música Contextual</h2>
            <p>Creamos la playlist perfecta para
                cualquier situación.  
            </p>
        </div>
    </div>
</div>
<Barra />
{/* <div className="icon-bar">
    <img src="/home.png" alt="Home" />
    <img src="/search.png" alt="Search" />
    <img src="/user-profile.png" alt="Profile" />
    <img src="/friends.png" alt="Friends" />
</div> */}
        </>
    )
}