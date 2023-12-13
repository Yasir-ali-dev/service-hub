import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container >
        <Link to={"/"} style={{textDecoration:"none"}} >
          <Navbar.Brand  >SERVICE HUB</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
              <Link to={"/"} style={{textDecoration:"none",color:"grey"}}>HOME</Link>
            </Nav.Link>


            <Nav.Link >
              <Link to={"/services"} style={{textDecoration:"none",color:"grey"}}>SERVICES</Link>
            </Nav.Link>

            <Nav.Link href="#action1">PRICING</Nav.Link>
            <Nav.Link >
              <Link to={"/information"} style={{textDecoration:"none",color:"grey"}}>ABOUT US</Link>
            </Nav.Link>
            
            <Nav.Link >
              <Link to={"/contact"} style={{textDecoration:"none",color:"grey"}}>CONTACT US</Link>
            </Nav.Link>
          </Nav>
       
        <ButtonGroup className='gap-1'>
        <Link to={"/login"}>
          <Button variant="success">LOGIN </Button>
        </Link>
        <Link to={"/signup"}>
         <Button variant="outline-success">SIGN UP</Button>
        </Link>
        </ButtonGroup>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;