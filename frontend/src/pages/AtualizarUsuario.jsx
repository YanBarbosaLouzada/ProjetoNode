import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Usuario.css"
import { useParams,useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'

function AtualizarUsuario() {
  const {id}= useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const irparauser=()=>navigate('/user')
  

  const[usuario,setUsuario] = useState({nome:"",sexo:"",idade:0})
  useEffect(()=>{
    setUsuario({
      nome:location.state.nome,
      sexo:location.state.sexo,
      idade:location.state.idade
    })
  },[location])
  

  function Atualizar (){
    axios.put(`http://localhost:4000/attuser/${id}`,usuario)
        .then(response => console.log(response))
        .catch(err=>console.log(err)) 
    irparauser()
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className='formcenter'>
          <form  className="form">
            <p className="title">Cadastre seu usuario</p>
            <div className="flex">
              <label>
                <input required="" placeholder="Nome" type="text" className="input" value={usuario.nome} onChange={(e)=>setUsuario({...usuario,nome: e.target.value})}/>
                <span>Nome</span>
              </label>
              <label>
                <input required="" placeholder="Sexo" type="text" className="input" value={usuario.sexo} onChange={(e)=>setUsuario({...usuario,sexo: e.target.value})}></input>
                <span>Sexo</span>
              </label>
            </div>

            <label>
              <input required="" placeholder="Idade" type="number" className="input" value={usuario.idade} onChange={(e)=>setUsuario({...usuario,idade: e.target.value})}></input>
              <span>Idade</span>
            </label>

            <button className='submit' onClick={()=>{Atualizar()}} type="submit">Submit</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AtualizarUsuario