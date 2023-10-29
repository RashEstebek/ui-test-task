import {Row} from "react-bootstrap";
import Hall, {halls} from "../components/hall/Hall";


const Halls = () => {
    return (
        <>
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



export default Halls