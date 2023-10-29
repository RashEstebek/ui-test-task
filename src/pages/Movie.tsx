import premiere1 from "./../img/section-premieres-images/premiere1.webp"
import "./pages_styles/movie.css"
const Movie = () => {
    return (
        <>
            <hr className="top-hr"/>
            <section className="section-movie-full-information">
                <div className="container">
                    <div className="d-flex">
                        <div className="section-movie-img">
                            <img src={premiere1} alt="Человек-муравей и Оса: Квантомания"/>
                        </div>

                        <div className="section-movie-info">
                            <div className="movie-info-top">
                                <div>
                                    <h1> Ant-Man and the Wasp: Quantumania </h1>
                                    <p className="film_genre"> Science Fiction, Action, Thriller, Comedy </p>
                                    <hr className="movie-info-top-hr"/>
                                </div>
                            </div>


                            <div className="movie-info-bottom">
                                <ul className="movie-length">
                                    <li>02:15 / 135 min.</li>
                                    <li>с 16/02/2023</li>
                                    <li>12+</li>
                                </ul>
                                <div>
                                    <div className="d-flex">
                                        <div className="info-title"> <b>Director:</b></div>
                                        <div className="info-value"> Peyton Reed </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="info-title"> <b>Cast:</b></div>
                                        <div className="info-value">
                                            Michelle Pfeiffer, Evangeline Lilly, Bill Murray, Paul Rudd, Jonathan Majers
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="info-title"><b>Genre:</b></div>
                                        <div className="info-value">Science Fiction, Action, Thriller, Comedy</div>
                                    </div>
                                </div>
                                <div className="rating">
                                    <p> <span>0</span> IMDb </p>
                                    <p> <span>0</span> КиноПоиск </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br/>

                    <div className="film_description">
                        <p>
                            The film officially opens the 5th phase of the Marvel cinematic universe.
                            Superhero sidekicks Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly)
                            continue their adventures as Ant-Man and the Wasp. Together with Hope's parents,
                            Hank Pym (Michael Douglas) and Janet Van Dyne (Michelle Pfeiffer), they find
                            themselves in a Quantum world, where they meet new bizarre creatures and plunge
                            into a maelstrom of events beyond what they could have imagined. Jonathan Majors as
                            Kang the Conqueror. Peyton Reed returns to the director's chair, Kevin Feige and
                            Stephen Broussard are the producers of the film.
                        </p>
                    </div>

                    <br/>

                    <div className="youtube-video">
                        <iframe width="1300" height="730" src="https://www.youtube.com/embed/ZlNFpri-Y40"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <br/><br/>

                </div>
            </section>

        </>
    )
}



export default Movie