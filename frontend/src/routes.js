import {createBrowserRouter} from "react-router-dom"
import Usuarios from "./pages/Usuarios"
import Root from "./pages/Root"
import NovoUsuario from "./pages/NovoUsuario"
import AtualizarUsuario from "./pages/AtualizarUsuario"
export const router =createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children:[
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
