import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import Carousel from 'react-bootstrap/Carousel';
import casa from '../../components/img/casa.jpg';
import blastoise from '../../components/img/blastoise.jpg';
import homunculo from '../../components/img/homunculo.png';
import { FloatWhatsApp } from '../../components/FloatWhatsApp';


export const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {
                loading && <Loading setLoading={setLoading} />
            }
            {
                !loading &&

                <div>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider"
                                src={casa}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5 className="slider-color">Nuestros Proyectos</h5>
                                <p className="slider-color">Podemos ayudar a hacer tu proyecto soñado.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider"
                                src={blastoise}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5 className="slider-color">Nuestros Proyectos</h5>
                                <p className="slider-color">Podemos ayudar a hacer tu proyecto soñado.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider"
                                src={homunculo}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5 className="slider-color">Nuestros Proyectos</h5>
                                <p className="slider-color">Podemos ayudar a hacer tu proyecto soñado.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className="text-center">
                        <h1>MIS PROYECTOS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque itaque repellat nisi error et incidunt numquam veritatis dignissimos,
                            aperiam, atque, iste necessitatibus porro? Corporis ipsa aut ipsam expedita minus!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque itaque repellat nisi error et incidunt numquam veritatis dignissimos,
                            aperiam, atque, iste necessitatibus porro? Corporis ipsa aut ipsam expedita minus!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque itaque repellat nisi error et incidunt numquam veritatis dignissimos,
                            aperiam, atque, iste necessitatibus porro? Corporis ipsa aut ipsam expedita minus!</p>
                    </div>
                    <FloatWhatsApp />
                </div>
            }
        </>
    )
}
