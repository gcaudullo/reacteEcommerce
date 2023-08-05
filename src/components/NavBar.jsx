import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';


      

export const NavBar = () => (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OK Computers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#Laptops">Laptops</Nav.Link>
            <Nav.Link href="#Celullar">Celulares</Nav.Link>
            <Nav.Link href="#TV">TV</Nav.Link>
            <Nav.Link href="#Audio">Audio</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
