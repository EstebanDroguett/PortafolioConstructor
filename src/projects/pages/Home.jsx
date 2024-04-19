import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import Carousel from 'react-bootstrap/Carousel';
import osamodas from '../../components/img/osamodas.jpg';
import blastoise from '../../components/img/blastoise.jpg';
import homunculo from '../../components/img/homunculo.png';

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
                                src={osamodas}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider"
                                src={blastoise}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider"
                                src={homunculo}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
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
                </div>
            }
        </>
    )
}
