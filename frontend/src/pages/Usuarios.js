import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Usuario from '../component/Usuario'
import "../styles/Usuario.css"
import Navbar from '../component/Navbar'


function Usuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/user')
      .then(res => setUsuarios(res.data))
      .catch(err => console.log(err))
  }, [setUsuarios])

  function clean(id) {
    setUsuarios(usuarios.filter(u => u.uid !== id))
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='todos'>
        {
          usuarios.map(p => <Usuario key={p.uid} clean={clean}
            {...p}
          />
          )
        }
      </div>

    </div>

  )
}

export default Usuarios