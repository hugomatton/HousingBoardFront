import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Message = () => {
  return (
    <Container>
      <Card>
        <Card.Header>
          <h3>Discussion</h3>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="text-start">
            <strong>Personne A:</strong> Bonjour !
          </ListGroup.Item>
          <ListGroup.Item className="text-end">
            <strong>Personne B:</strong> Salut !
          </ListGroup.Item>
          <ListGroup.Item className="text-start">
            <strong>Personne A:</strong> Comment ça va ?
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <Form>
            <Form.Group controlId="messageInput">
              <Form.Control type="text" placeholder="Votre message..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Message;