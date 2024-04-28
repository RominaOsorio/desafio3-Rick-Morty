import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PersonajeCard from '../components/PersonajeCard'

const Detalle = () => {
  const { id } = useParams()
  const [personaje, setPersonajes] = useState({})
  const getPersonajes = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await data.json()
    const { name, status, species, gender, image } = response
    setPersonajes({ name, image, status, species, gender })
    console.log(response)
  }

  useEffect(() => {
    getPersonajes()
  }, [])

  return (
    <>
      <PersonajeCard personaje={personaje} />
    </>
  )
}

export default Detalle
