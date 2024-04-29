import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';

export const BarraNavegadora = () => {
    return (
        <>
            <Navbar bg="warning" data-bs-theme="dark" expand="lg" className="body-tertiary" fixed="top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">A&D Proyectos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={NavLink} to="/">Inicio</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={NavLink} to="/sobremi" >Sobre mi</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={NavLink} to="/proyectos" >Proyectos</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? 'active' : '')} as={NavLink} to="/contacto" >Contacto</Nav.Link>
                        </Nav>
                        <Row className="text-center" xs={1} md={1}>
                            <Col>
                                <a className="fb-ic" href="https://www.facebook.com/darax" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="icon-attribute-nav" />
                                </a>
                                <a className="li-ic" href="https://www.linkedin.com/in/darax" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="icon-attribute-nav" />
                                </a>
                                <a className="ins-ic" href="https://www.instagram.com/darax/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="icon-attribute-nav" />
                                </a>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
