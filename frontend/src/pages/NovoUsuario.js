import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../styles/NovoUsuario.css"
import Navbar from '../component/Navbar'
function NovoUsuario() {

    const navigate = useNavigate()
    const irparauser = () => navigate('/user')
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')

    const envioUsuario = (event) => {
        event.preventDefault()
        cadastrarUsuario()
    }

    function cadastrarUsuario() {
        axios.post('http://localhost:4000/newuser', { nome, sexo, idade })
            .then(res => console.log(res.data))
            .catch(erro => console.log(erro))
        irparauser()
    }

    return (

        <div>
            <Navbar></Navbar>
            <div className='formcenter'>
                <form onSubmit={envioUsuario} className="form">
                    <p className="title">Cadastre seu usuario</p>
                    <div className="flex">
                        <label>
                            <input required="" placeholder="Nome" type="text" className="input" onChange={(e) => setNome(e.target.value)}></input>
                            <span>Nome</span>
                        </label>

                        <label>
                            <input required="" placeholder="Sexo" type="text" className="input" onChange={(e) => setSexo(e.target.value)}></input>
                            <span>Sexo</span>
                        </label>
                    </div>
                    <label>
                        <input required="" placeholder="Idade" type="number" className="input" onChange={(e) => setIdade(e.target.value)}></input>
                        <span>Idade</span>
                    </label>

                    <button className='submit' type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default NovoUsuario