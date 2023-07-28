import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Usuario.css"
import { useParams,useLocation } from 'react-router-dom'
function AtualizarUsuario() {
  const {id}= useParams()
  const location = useLocation()
  console.log(location)
  const[usuario,setUsuario] = useState({nome:"",sexo:"",idade:0})
  useEffect(()=>{
    setUsuario({
      nome:location.state.Nome,
      sexo:location.state.Sexo,
      idade:location.state.Idade
    })
  },[])

  function Atualizar (){
    axios.put(`http://localhost:4000/attuser/${id}`)
        .then(response => console.log(response))
        .catch(err=>console.log(err)) 
  }

  return (
    <div>
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