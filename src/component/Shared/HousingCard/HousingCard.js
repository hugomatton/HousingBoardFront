import React from "react";
import { Card, Button } from "react-bootstrap";

const HousingCard = (props) => {
  const { showDetails, onShowDetails } = props;
  return (
    <Card className="my-2 p-3 w-50" style={{ marginRight: "1rem" }}>
      <Card.Title className="text-center">Address</Card.Title>
      <Card.Img
        className="my-2"
        variant="top"
        src="https://resize.logisco.com/azure/photos/logisco_immenble_residentiel_appartement_a_louer_bloc_le_plateau_de_larcher_loretteville_quebec_cuisine1.jpg?watermark=logo"
      />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted text-center">{`Number of rooms: rooms | Number of bathrooms: bathrooms | Area: m² | Monthly rent: € per month`}</Card.Subtitle>
        <div className="d-flex align-items-center justify-content-center my-5">
          <Button onClick={onShowDetails}>
            {showDetails ? "Hide details" : "Show details"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HousingCard;