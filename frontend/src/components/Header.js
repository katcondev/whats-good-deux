import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <Image className='mx-2' width={75} src='/images/logo.png'></Image>
            An Unapologetic Experience
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='justify-content-end mx-auto'>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/login'>Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
