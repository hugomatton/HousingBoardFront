import React from "react";
import axios from 'axios'
import { Badge, Card, Carousel, Button } from "react-bootstrap";

const HousingDetail = ({ housing, setSelectedHousing }) => {

  const onDelete = async (type_name) => {
    if (window.confirm(`Are you sure you want to delete this housing ?`)) {
      try {
        await axios.delete(`http://localhost:5000/housing/${housing.housing_id}`)
        setSelectedHousing(null)
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div>
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
          <div className="d-flex">
            <h5><Badge bg="primary">{housing.type_name}</Badge></h5>
            <div className="mx-3">
              <h5><Badge bg="info" text="dark">{housing.area} m2</Badge></h5>
            </div>
            <h5><Badge bg="light" text="dark">{housing.monthly_rent} € / month</Badge></h5>
            {housing.furnished === 1 && <div className="mx-3"><h5><Badge bg="success">Furnished</Badge></h5></div>}
          </div>
        </Card.Text>
        <Card.Text>For a Lease duration of <strong>{housing.lease_duration} months</strong> 📅</Card.Text>
        <div className="d-flex justify-content-end align-items-end">
          <Button variant="danger" className="me-3" onClick={onDelete}>Delete</Button>
          <Button variant="warning">Edit</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default HousingDetail;