import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="../../Home/Home.js">Codespace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link  href="../../"><Nav.Link>Home</Nav.Link></Link>
            <Link  href="../../practice/index.js"><Nav.Link>Practice</Nav.Link></Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Problems</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Community
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Blog & Interview Guides
              </NavDropdown.Item>
            </NavDropdown>
            <Link  href="../../index.js"><Nav.Link>About</Nav.Link></Link>
            <Link  href="../../index.js"><Nav.Link>Contact</Nav.Link></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

    </div>
  )
}

export default Navigation
