import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavbarComponent() {
  return (
    <Navbar  expand="lg" className="bg-body navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center"><img
              alt=""
              src={require('../images/logo.png')}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           <div className="d-flex flex-column align-items-center mx-3" ><h4>Laxmi Enterprises</h4></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav id="navbar-example" variant='underline' className="justify-content-center flex-grow-1">
            <Nav.Link href="/#about" className="fw-bold text-danger">ABOUT US</Nav.Link>
            <Nav.Link href="/#services" className="fw-bold text-danger">SERVICES</Nav.Link>
            <Nav.Link href="/catalog" className="fw-bold text-danger">CATALOG</Nav.Link>
            <Nav.Link href="contact" className="fw-bold text-danger">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
