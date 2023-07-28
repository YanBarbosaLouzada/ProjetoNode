import React from "react";
import { Outlet } from "react-router-dom"
import '../stylescomponent/navbar.css'

function Root() {
    return (
        
        <div>
            <nav>
            <ul>
             <li><a className="active" href="/user">Usuarios</a></li>
             <li><a className="active" href="/newuser">Criar Usuario</a></li>
                
            </ul>

                {/* <div>
                    <NavLink
                        to='/user'
                        className={({ isActive }) =>
                            isActive ? 'link-clicado' : ''
                        }
                    >
                        Lista de Usuarios
                    </NavLink>
                </div> */}
                <div></div>
            </nav>

            <div className="conteudo">
                <Outlet></Outlet>
            </div>

        </div>

    )

}
export default Root