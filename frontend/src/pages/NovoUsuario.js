import React, { useState } from 'react'
import axios from 'axios'
import "../styles/NovoUsuario.css"
function NovoUsuario() {
    const [Nome, setNome] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Idade, setIdade] = useState('')

    const envioUsuario = (event) => {
        event.preventDefault()
        cadastrarUsuario()
    }
    function cadastrarUsuario() {

        axios.post('http://localhost:4000/newuser', { Nome, Sexo, Idade })
            .then(res => console.log(res.data))
            .catch(erro => console.log(erro))
    }
    return (
        <div>
            <div>
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

                        <button className='submit'type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default NovoUsuario