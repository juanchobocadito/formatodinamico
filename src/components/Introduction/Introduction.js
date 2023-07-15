import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
  const handleGetInTouch = () => {
    const dynamicFormSection = document.querySelector("#Service");
    if (dynamicFormSection) {
      dynamicFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to my Dynamic Form{" "}
              <span className="pt-2 pb-4">that you will do everything that you want</span>
            </h1>
            <h4 className="d-flex container-actions mt-5">
              Hi, I'm Juan Luis Cabrera Rosado, I am 49 years old - I like to do and develop Projects, I am passionate about soccer
            </h4>
            <div className="d-flex container-actions mt-5">
              <div className="container-buttons">
               
                <Button className="p-3" onClick={handleGetInTouch}>
                  Get in touch
                </Button>
                <Button className="p-3" onClick={handleGetInTouch}>
                  Get in touch
                </Button>
              </div>
              <div className="d-flex container-actions mt-4 btn-start-create">
                <a href="#dynamic-form">Start to create</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}