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
                <Card.Img style={{ maxHeight: '50vh' }} src={picture} />
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