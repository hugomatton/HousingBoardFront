import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const ListChat = ({ conversations, setSelectedConversation }) => {
  return (
    <div>
      <Container
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        backgroundColor: "#f8f9fa",
      }}
      >
        <h3 className="mb-4 text-center">Conversations</h3>
        <ListGroup as="ol" numbered>
          {conversations.map((conversation) => {
            return (
              <ListGroup.Item
                key={conversation[1]}
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={() => {
                  setSelectedConversation(conversation);
                }}
                style={{
                  marginBottom: "0.5rem",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.25rem",
                  backgroundColor: "#fff",
                }}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{conversation[0]}</div>I am interested with your housing
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListChat;