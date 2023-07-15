import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumecomidas(props) {
    const {subtitle, comidasStorage, text}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {comidasStorage.map((comidas, index)=>(
                            <li key={index}>{comidas.label}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            {text &&(
                <Card className="text-center p-2 card-resume">
                    <Card.Body>
                        <Card.Subtitle>
                            <b>Your Additional Food is: </b>
                        </Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}