import "./Layout.css"
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <>
        <div className="angry-multigradient">
        <Outlet/> 
        </div>
        
        </>
    )
}