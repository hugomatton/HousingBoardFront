import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const ListChat = () => {
  return (
    <div>
      <Container>
        <h2 className="my-4 text-center">Chat ✉️</h2>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Owner 1</div>I am interested with your
              housing
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Owner 2</div>
              Would it be possible to lower the rental price?
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Owner 3</div>
              Ok thank's
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListChat;