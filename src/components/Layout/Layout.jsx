import "./layout.css"
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <div className="contenedor">
        <div className="angry-multigradient">
        <Outlet/> 
        </div>
        
        </div>
    )
}