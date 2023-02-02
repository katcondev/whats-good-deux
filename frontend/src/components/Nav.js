import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navi = () => {
  return (
    <div>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <Image
              className='mx-2'
              alt='company logo'
              width={75}
              src='/images/logo.png'
            />
            WHAT'S GOOD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart' className='px-5'>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ height: "30px" }}
                  className='mt-2'
                ></FontAwesomeIcon>
              </Nav.Link>
              <Nav.Link href='/login'>
                <Button variant='primary'>Sign in</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
