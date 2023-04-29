import React from "react";
import { Card, Carousel } from "react-bootstrap";

const HousingDetail = () => {
  return (
    <Card className="my-2 p-2 w-50">
      <Card.Body>
        <Card.Title className="text-center">Address</Card.Title>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://resize.logisco.com/azure/photos/logisco_immenble_residentiel_appartement_a_louer_bloc_le_plateau_de_larcher_loretteville_quebec_cuisine1.jpg?watermark=logo"
              alt="First slide"
              style={{ objectFit: "cover", objectPosition: "center", height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://edito.seloger.com/sites/default/files/styles/735x412/public/edito_migrate/article/image/logement-location-meublee-seloger_1.jpg?itok=4s8iiIkD"
              alt="Second slide"
              style={{ objectFit: "cover", objectPosition: "center", height: "400px" }}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Subtitle className="mb-2 text-muted text-center">{`Number of rooms: rooms | Number of bathrooms: bathrooms`}</Card.Subtitle>
        <Card.Text>
          {`Area: m²`}
          <br />
          {`Monthly rent: €`}
          <br />
          {`Lease duration: months`}
          <br />
          {`Furnished:`}
          <br />
          {`Housing type:`}
          <br />
          {`Owner:`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HousingDetail;