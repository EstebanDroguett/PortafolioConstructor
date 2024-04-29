
import { Container, Nav, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { NavLink } from 'react-router-dom';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <>
            <footer className="wow bounceInUp footer" bg="warning" data-bs-theme="dark">
                <div>
                    <Container>
                        <Row className="text-center" >
                            <Col xs={12} md={6}>
                                <h6>¡Contáctame en mis redes sociales!</h6>
                            </Col>
                            <Col xs={12} md={6}>
                                <a className="fb-ic" href="https://www.facebook.com/A&D" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="icon-attribute" />
                                </a>
                                <a className="li-ic" href="https://www.linkedin.com/in/A&D" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="icon-attribute" />
                                </a>
                                <a className="ins-ic" href="https://www.instagram.com/A&D/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="icon-attribute" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="menu-footer">
                    <Container>
                        <Row className="text-center">
                            <Col xs={12} md={6}>
                                <h6 className="text-uppercase">Menu</h6>
                                <hr />
                                <p>
                                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                </p>
                                <p>
                                    <Nav.Link as={NavLink} to="/sobremi">Sobre mi</Nav.Link>
                                </p>
                                <p>
                                    <Nav.Link as={NavLink} to="/proyectos">Proyectos</Nav.Link>
                                </p>
                                <p>
                                    <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <h6 className="text-uppercase">Contacto</h6>
                                <hr />
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} /> A&Dproyectos@gmail.com
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPhoneSquare} /> +56 9999999
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="copyright-footer">
                    <Container>
                        <Row className="text-center">
                            <Col xs={12} md={12}>
                                <p>@{new Date().getFullYear()} Copyright: A&D Proyectos</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer >
        </>
    )
}
