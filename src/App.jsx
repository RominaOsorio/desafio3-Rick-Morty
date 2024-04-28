import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Personajes from './views/Personajes'
import Detalle from './views/Detalle'
import Menu from './components/Menu'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personaje' element={<Personajes />} />
        <Route path='/personaje/:id' element={<Detalle />} />
      </Routes>
    </>
  )
}

export default App
