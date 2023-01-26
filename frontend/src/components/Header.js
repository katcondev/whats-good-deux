import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return<header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">An Unapologetic Experience</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mx-auto'>
              <Nav.Link href="/cart">About</Nav.Link>
              <Nav.Link href="/login">Products</Nav.Link> 
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/login">Sign in</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  
}

export default Header
