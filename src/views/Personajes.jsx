/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Personajes = () => {
  const [personajes, setPersonajes] = useState([])
  const [personajeSelect, setPersonajeSelect] = useState('')
  const navigate = useNavigate()

  const goToDetailPersonajes = () => {
    navigate(`/personaje/${personajeSelect}`)
  }

  const getPersonajes = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character')
    const response = await data.json()
    setPersonajes(response.results)
    // console.log(response)
  }

  useEffect(() => {
    getPersonajes()
  }, [])

  return (
    <div className='text-center pt-5 mt-5'>
      <h2 className='mb-5'>Elige tu personaje favorito</h2>
      <div className='container'>
        <select
          value={personajeSelect}
          onChange={(e) => setPersonajeSelect(e.target.value)}
        >
          <option value=''>Selecciona un personaje</option>
          {personajes &&
          personajes.map((personaje) => (
            <option key={personaje.id} value={personaje.id}>{personaje.name}</option>
          ))}
        </select>
        <Button
          onClick={goToDetailPersonajes}
          className='btn btn-success'
        >
          Ver detalle
        </Button>
      </div>
    </div>
  )
}

export default Personajes
