import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget/cartWidget';

function ColorSchemesExample() {
  return (
    <>
        <Navbar expand='lg' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Coffe name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing"> 
              <CartWidget></CartWidget>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </> 
);
}

export default ColorSchemesExample;