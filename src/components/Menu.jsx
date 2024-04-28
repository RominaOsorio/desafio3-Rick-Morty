import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Rick & Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className='nav-item nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-item nav-link' to='/personaje'>Personajes</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
