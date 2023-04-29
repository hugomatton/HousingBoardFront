import React from "react";
import { Card, Button } from "react-bootstrap";

const HousingCard = (props) => {
  const { showDetails, onShowDetails } = props;
  return (
    <Card className="my-2 p-2 mx-3" style={{ height: "300px", width: "300px" }}>
      <Card.Title className="text-center">Address</Card.Title>
      <div style={{ height: "200px", overflow: "hidden"}}>
        <Card.Img
          style={{ objectFit: "cover", objectPosition: "center", borderRadius: "3%", height: "100%"}}
          src="https://resize.logisco.com/azure/photos/logisco_immenble_residentiel_appartement_a_louer_bloc_le_plateau_de_larcher_loretteville_quebec_cuisine1.jpg?watermark=logo"
        />
      </div>
      <Card.Body style={{ height: "100px" }}>
        <Card.Subtitle style={{ fontSize: '12px' }} className="mb-2 text-muted text-center">{`Nb rooms | Nb bathrooms | Nb€ per month`}</Card.Subtitle>
        <div className="d-flex align-items-center justify-content-center my-3">
          <Button onClick={onShowDetails}>
            {showDetails ? "Hide details" : "Show details"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HousingCard;