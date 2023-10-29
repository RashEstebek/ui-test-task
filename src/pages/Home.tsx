import Carousel from "react-bootstrap/Carousel"
import Slider from "react-slick"
import {premieres} from "./../helpers/premieresList"
import Premiere from '../components/premiere/Premiere'
import cinema1 from "./../img/header-images/cinema1.webp"
import cinema2 from "./../img/header-images/cinema2.jpg"
import cinema3 from "./../img/header-images/cinema3.webp"
import {Row} from 'react-bootstrap'
import Hall from "../components/hall/Hall"
import {halls} from "./../components/hall/Hall"

const Home = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    }
    return (
        <>
            <header>
                <Carousel>
                    <Carousel.Item interval={2100}>
                        <img className="d-block w-100"  src={cinema1}  alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Lorem ipsum</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2100}>
                        <img className="d-block w-100" src={cinema2} alt="Second slide"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2100}>
                        <img className="d-block w-100" src={cinema3} alt="Third slide"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>


            <br/><br/><br/><br/><br/><br/>


            <section className="section-premieres">
                <div className="container">
                    <h2>Premieres</h2> <br/>
                    <Slider {...settings}>
                        {premieres.map((premiere, index) => {
                            return (
                                <Premiere
                                    key={index}
                                    title={premiere.title}
                                    img={premiere.img}
                                />
                            );
                        })}
                    </Slider>
                </div>
            </section>


            <br/><br/><br/><br/><br/><br/>


            <section className="section-halls">
                <div className="container">
                    <h3>Halls</h3> <br/>
                    <Row xs={1} md={2} className="g-4">
                        {halls.map((halls, index) => {
                            return (
                                <Hall
                                    key={index}
                                    title={halls.title}
                                    img={halls.img}
                                />
                            )})}
                    </Row>
                </div>
            </section>

            <br/><br/><br/>
        </>
    )
}

export default Home






