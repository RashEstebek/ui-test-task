import './style.css'
import {Card, Col} from "react-bootstrap"
import hall1 from "./../../img/section-halls-images/hall1.webp"
import hall2 from "./../../img/section-halls-images/hall2.webp"
import hall3 from "./../../img/section-halls-images/hall3.webp"
import hall4 from "./../../img/section-halls-images/hall4.webp"


const halls = [
    {
        title: '4dx Hall',
        img: hall1,
    },
    {
        title: 'Children\'s hall',
        img: hall2,
    },
    {
        title: 'VIP Seats',
        img: hall3,
    },
    {
        title: '3D Seats',
        img: hall4,
    },
];

const Hall = ({ title, img }: {title:string, img: any}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="card-description">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Hall
export {halls}
