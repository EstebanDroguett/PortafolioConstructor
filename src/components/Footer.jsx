
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer className="wow bounceInUp footer" bg="warning" data-bs-theme="dark">
                <Container>
                    <Row className="text-center" xs={1} md={2}>
                        <Col>
                            <h6>¡Contáctame en mis redes sociales!</h6>
                        </Col>
                        <Col>
                            <a className="fb-ic" href="https://www.facebook.com/darax" target="_blank">
                                <i icon="facebook" className="">a</i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/in/darax" target="_blank">
                                <i icon="linkedin" className="">a</i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/darax/" target="_blank">
                                <i icon="instagram" className="">a</i>
                            </a>
                        </Col>
                    </Row>
                    <Row className="text-center" xs={1} md={2}>
                        <Col>
                            <h6 className="text-uppercase">Menu</h6>
                            <hr/>
                            <p>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </p>
                            <p>
                                <Nav.Link as={Link} to="/sobremi">Sobre mi</Nav.Link>
                            </p>
                        </Col>
                        <Col>
                            <h6 className="text-uppercase">Contacto</h6>
                            <hr/>
                            <p>
                                <i icon="envelope" className=""></i> daraxxxxxxxxxxxxxxx@gmail.com
                            </p>
                            <p>
                                <i icon="phone" className=""></i> +56 9999999
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center" xs={1} md={1}>
                        <Col>
                        <p>© 2024 Copyright: Darax</p>
                        </Col>
                    </Row>
                </Container>
            </footer >
        </>
    )
}
