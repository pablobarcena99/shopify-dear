"use client";

import React from "react";
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { useStateContext } from "../utils/StateContext";

export default function NavBar() {
  const { showCart, setShowCart, handleCloseCart, handleShowCart } = useStateContext();
  return (
    <Navbar bg='dark' expand='lg' fixed='top' variant='dark'>
      <Container>
        <Navbar.Brand href='#'>dear:</Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
        </div>
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='start'
          className='bg-dark'>
          <Offcanvas.Header closeButton className='btn btn-close-white'>
            <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href=''>Products</Nav.Link>
              <Nav.Link
                style={{  cursor: "pointer" }}
                onClick={handleShowCart}
                className='pe-auto'>
                cart
              </Nav.Link>
              {/* <Nav.Link href='#action2'>SidebarItem2</Nav.Link> */}
              <NavDropdown title='Projects' id='offcanvasNavbarDropdown'>
                <NavDropdown.Item href='#action3'>eCommerce</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Menda Lerenda</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>Github</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
