import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/WhatsApp Image 2023-07-13 at 5.18.15 PM.jpeg";
import imgCourse2 from "../../assets/img/github.png";
import imgCourse3 from "../../assets/img/WhatsApp Image 2023-07-13 at 5.17.59 PM.jpeg";
import CardService from "./CardService/CardService";

export default function Services() {
  const servicesArray = [
    {
      title: "Desarollo Github",
      subtitle: "Todo sin Limites",
      image: imgCourse2,
      footer: "Mis Proyectos💻 ➡️",
      link: "https://github.com/juanchobocadito", // Enlace a Instagram
    },
    {
      title: "Juancho Bocadito",
      subtitle: "No te quedes sin probar los tuyos!!",
      image: imgCourse1,
      footer: "Nuestros Productos 🩹🥟 ➡️",
      link: "https://www.instagram.com/juancho_bocadito", // Enlace a Instagram
    },
    {
      title: "Cocina C",
      subtitle: "Delicias al Comer",
      image: imgCourse3,
      footer: "⚜️ Nuestros Productos ⚜️➡️",
      link: "https://www.instagram.com/cocinac.bq", // Enlace a Instagram
    },
  ];

  const handleServiceClick = (link) => {
    if (link.endsWith(".jpeg")) {
      window.open(link, "_blank"); // Abrir archivo .jpg en una nueva pestaña o ventana
    } else {
      window.location.href = link; // Redirigir a la página de Instagram
    }
  };

  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Services</h2>
            <h4 className="pb-3 text-center">
              Check some of my services that I did
            </h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service.link)}
                >
                  <CardService service={service} />
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
