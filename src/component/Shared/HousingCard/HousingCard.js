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
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 ">Number of bathroom : {housing.bathrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 ">Number of bedrooms : {housing.bedrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-3 ">Monthly rent : {housing.monthly_rent}</Card.Text>
        <div className="d-flex align-items-center justify-content-around">
          <Button style={{ width: '5rem' }} variant="light" onClick={() => { setSelectedHousing(housing) }}>Show</Button>
          <Button style={{ width: '5rem' }} variant="outline-success" onClick={() => { setSelectedHousing(housing) }}><strong>Edit</strong></Button>

        </div>
      </Card.Body>
    </Card>
  );
};

export default HousingCard;

