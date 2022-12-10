import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavigationBar = ()=>{
return (
  <Container>
    <NavBar sticky="top" expand="lg" bg="light">
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav" />
      <Container>
        <NavBar.Brand href="/"> Bender </NavBar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/myevents">My Events</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">
              My Profile
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </NavBar>
  </Container>
);

}

export default NavigationBar