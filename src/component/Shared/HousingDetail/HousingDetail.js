import React from "react";
import { Badge, Card, Carousel } from "react-bootstrap";

const HousingDetail = ({ housing }) => {
  return (
    <Card style={{ width: '50vw' }} className="bg-dark text-white mt-3">
      <Carousel>
        {
          housing.pictures.map((picture) => {
            return (
              <Carousel.Item>
                <Card.Img src={picture} />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      <Card.Body>
        <Card.Title>📍 {housing.housing_address}</Card.Title>
        <Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <h5><Badge bg="primary">{housing.type_name}</Badge></h5>
              <div className="mx-3">
                <h5><Badge bg="warning" text="dark">{housing.area} m2</Badge></h5>
              </div>
              <h5><Badge bg="success">Furnished</Badge></h5>
            </div>
            <div>
              <Card.Text className="d-flex"><h5><Badge bg="light" text="dark">{housing.monthly_rent} € / month</Badge></h5> 
              </Card.Text>
            </div>
          </div>
        </Card.Text>

        <Card.Text></Card.Text>
        
        <Card.Text>For a Lease duration of <strong>{housing.lease_duration} months</strong> 📅</Card.Text>

      </Card.Body>
    </Card>
  );
};

export default HousingDetail;

/**
 * 
 * <Card className="my-2" style={{ width: "900px" }}>
      <Card.Body>
        <Card.Title className="text-center">Address</Card.Title>
        <Carousel style={{ height: "400px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://resize.logisco.com/azure/photos/logisco_immenble_residentiel_appartement_a_louer_bloc_le_plateau_de_larcher_loretteville_quebec_cuisine1.jpg?watermark=logo"
              alt="First slide"
              style={{ objectFit: "cover", objectPosition: "center", height: "400px", borderRadius: "3%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://edito.seloger.com/sites/default/files/styles/735x412/public/edito_migrate/article/image/logement-location-meublee-seloger_1.jpg?itok=4s8iiIkD"
              alt="Second slide"
              style={{ objectFit: "cover", objectPosition: "center", height: "400px", borderRadius: "3%" }}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Subtitle className="mb-2 my-2 text-muted text-center">{`Number of rooms: rooms | Number of bathrooms: bathrooms`}</Card.Subtitle>
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
 */