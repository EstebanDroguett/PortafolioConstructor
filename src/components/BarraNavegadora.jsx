import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export const BarraNavegadora = () => {
    return (
        <>
            <Navbar bg="warning" data-bs-theme="dark" expand="lg" className="body-tertiary" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">DARAX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="active" as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={Link} to="/sobremi" >Sobre mi</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={Link} to="/proyectos" >Proyectos</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={Link} to="/contacto" >Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
