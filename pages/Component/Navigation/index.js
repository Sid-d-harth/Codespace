import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Navigation = () => {
// const Push=() => {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/AllProblems");
//   }, [router]);
// }
  return (
    <div>
      <div className='navigation'>
      <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand>Codespace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Link href={"/Home"}><Nav.Link>Home</Nav.Link></Link>
            <Link href={"/practice"}><Nav.Link>Practice</Nav.Link></Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item>All Problems</NavDropdown.Item>
              <NavDropdown.Item>
              Community
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              Blog & Interview Guides
              </NavDropdown.Item>
            </NavDropdown>
            <Link href={"/About"}><Nav.Link>About</Nav.Link></Link>
            <Link href={"/Contact"}><Nav.Link>Contact</Nav.Link></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              size='sm'
              aria-label="Search"
            />
            <Button variant="primary" size='sm'>Search</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
  )
}

export default Navigation
