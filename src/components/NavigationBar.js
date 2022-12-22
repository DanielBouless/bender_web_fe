import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CurrentUser } from '../context/CurrentUser'

const NavigationBar = ()=>{



const {currentUser} = useContext(CurrentUser)
const logout = ()=>{
  localStorage.removeItem('token')
}

const loginActions = currentUser ? (
  <>
    <Nav.Link href="/myevents">My Events</Nav.Link>
    <Nav.Link href="/profile">My Profile</Nav.Link>
    <Nav.Link href="/" onClick={logout}>
      {" "}
      Logout {currentUser.firstname}
    </Nav.Link>
  </>
) : (
  <>
    <Nav.Link href="/login"> Log In </Nav.Link>
    <Nav.Link href="/signup"> Sign Up </Nav.Link>
  </>
);



return (
  <Container>
    <Navbar bg='light' variant='light'>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav" />
      <Container>
        <Navbar.Brand href="/"> Bender </Navbar.Brand>
        <Nav className="me-auto">
          {loginActions}
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

}

export default NavigationBar