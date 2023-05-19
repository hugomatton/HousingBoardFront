import React, { useState } from "react";
import { Badge, Card, Carousel, Modal, Button, Form } from "react-bootstrap";
import logo from "../../../../../image/envoyer.png";
import axios from "axios";

const HousingDetail = ({ housing }) => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  console.log(housing)

  const handleSendMessage = async () => {
    await axios.post(
      'http://localhost:5000/message/studentToOwner',
      {
        content: message,
        studentSendId: localStorage.getItem('studentId'),
        ownerReceiveId: housing.owner_id
      }
    )
    setMessage("");
    setShowModal(false);
  };

  return (
    <Card style={{ width: "50vw" }} className="bg-dark text-white mt-3">
      <Carousel>
        {housing.pictures.map((picture) => {
          return (
            <Carousel.Item>
              <Card.Img style={{ maxHeight: "50vh" }} src={picture} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Card.Body>
        <Card.Title>📍 {housing.housing_address}</Card.Title>
        <Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <h5>
                <Badge bg="primary">{housing.type_name}</Badge>
              </h5>
              <div className="mx-3">
                <h5>
                  <Badge bg="warning" text="dark">
                    {housing.area} m2
                  </Badge>
                </h5>
              </div>
              <h5>
                <Badge bg="success">Furnished</Badge>
              </h5>
            </div>
            <div>
              <Card.Text className="d-flex">
                <h5>
                  <Badge bg="light" text="dark">
                    {housing.monthly_rent} € / month
                  </Badge>
                </h5>
              </Card.Text>
            </div>
          </div>
        </Card.Text>

        <Card.Text></Card.Text>

        <Card.Text>
          For a Lease duration of{" "}
          <strong>{housing.lease_duration} months</strong> 📅
          <span className="d-flex justify-content-end">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              <Card.Img
                src={logo}
                alt="Write a Message"
                style={{ width: "20px", height: "20px" }}
              />
            </Button>
          </span>
        </Card.Text>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Write a message to the owner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              as="textarea"
              rows={1}
              style={{ resize: "none", overflow: "hidden" }}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default HousingDetail;
