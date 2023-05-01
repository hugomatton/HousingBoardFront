import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const HousingCard = ({ housing, setSelectedHousing }) => {
  return (
    <Card style={{ width: '15rem' }} className="m-3 p-0 bg-dark text-white">
      <Card.Img variant="top" src={housing.pictures[0]} />
      <Card.Title className="mx-0 bg-light text-dark py-1" style={{textAlign: 'center'}}>
          {housing.housing_address}
        </Card.Title>
      <Card.Body>
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 "><strong>{housing.bathrooms_nb}</strong> Bathrooms</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 "><strong>{housing.bedrooms_nb}</strong> Bedrooms</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-3 ">Monthly rent : <strong>{housing.monthly_rent}</strong>  €</Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Button style={{ width: '7rem' }} variant="light" onClick={() => { setSelectedHousing(housing) }}>Show</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HousingCard;

