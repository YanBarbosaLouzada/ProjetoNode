import React from "react";
import { Outlet } from "react-router-dom"
import '../stylescomponent/navbar.css'

function Root() {
    return (
        
        <div>
            <div className="conteudo">
                <Outlet></Outlet>
            </div>

        </div>

    )

}
export default Root