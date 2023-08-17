import {createBrowserRouter} from "react-router-dom"
import Usuarios from "./pages/Usuarios"
import Root from "./pages/Root"
import NovoUsuario from "./pages/NovoUsuario"
import AtualizarUsuario from "./pages/AtualizarUsuario"
import Login from "./pages/Login"
import Home from "./pages/Home"
export const router =createBrowserRouter([
    {   

        path: '/',
        element:<Root/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'user',
                element: <Usuarios/>
            },
            {
                path: 'newuser',
                element: <NovoUsuario/>
            },
             {
                path: 'attuser/:id',
                element: <AtualizarUsuario/>
             },

        ]
    }
])
