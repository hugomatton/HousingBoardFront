import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const HousingCard = ({ showDetails, onShowDetails, housing }) => {
  return (
    <Card style={{ width: '15rem' }} className="m-3 p-0">
      <Card.Img variant="top" src={housing.pictures[0]} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 text-muted ">Number of bathroom : {housing.bathrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-2 text-muted ">Number of bedrooms : {housing.bedrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '16px' }} className="mb-3 text-muted ">Monthly rent : {housing.monthly_rent}</Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="primary">Show details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HousingCard;

/**
 * 
 * <Card className="my-2 p-2 mx-3" style={{ height: "300px", width: "300px" }}>
      <Card.Title className="text-center">{housing.housing_address}</Card.Title>
      <div style={{ height: "200px", overflow: "hidden"}}>
        <Card.Img
          style={{ objectFit: "cover", objectPosition: "center", borderRadius: "3%", height: "100%"}}
          src={housing.pictures[0]}
        />
      </div>
      <Card.Body style={{ height: "100px" }}>
        <Card.Text style={{ fontSize: '12px' }} className="mb-2 text-muted ">Number of bathroom : {housing.bathrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '12px' }} className="mb-2 text-muted ">Number of bedrooms : {housing.bedrooms_nb}</Card.Text>
        <Card.Text style={{ fontSize: '12px' }} className="mb-2 text-muted ">Monthly rent : {housing.monthly_rent}</Card.Text>
        <div className="d-flex align-items-center justify-content-center my-3">
          <Button onClick={onShowDetails}>
            {showDetails ? "Hide details" : "Show details"}
          </Button>
        </div>
      </Card.Body>
    </Card>
 */