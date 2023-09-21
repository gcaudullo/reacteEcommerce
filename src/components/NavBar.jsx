import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';
import data from "../data/productos.json"

const categories = data.map(item => item.categoria)
const uniqueCategories = new Set(categories)
// console.log([...uniqueCategories])



export const NavBar = () => (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link className='nav-link' to="/"> <img className='logo' src={ logo } alt="logo" /></Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Inicio</Link>
            <NavDropdown title="Categorias">
            {[...uniqueCategories].map(category => (
              <NavDropdown.Item><Link className='nav-link' key={category} to={`/category/${category}`} >{category}</Link></NavDropdown.Item>
            ))}
            </NavDropdown>
            <Link className='nav-link' to="/nosotros">Nosotros</Link>
            <Link className='nav-link' to="/contacto">Contacto</Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
