import React from 'react'
import '../stylescomponent/navbar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a className="active" href="/user">Usuarios</a></li>
                    <li><a className="active" href="/newuser">Criar Usuario</a></li>
                </ul>

                {/* <div><NavLink to='/user'className={({ isActive }) =>isActive ? 'link-clicado' : ''}>Lista de Usuarios</NavLink></div> */}
            </nav>
        </div>
    )
}

export default Navbar