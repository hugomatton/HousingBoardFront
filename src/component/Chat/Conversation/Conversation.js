import React from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message/Message";

const Conversation = () => {
  const messages = [
    { sender: "Owner", content: "Bonjour !" },
    { sender: "Student", content: "Salut !" },
    { sender: "Student", content: "Comment ça va ?" }
  ];

  return (
    <Container>
      <h2 className="my-4 text-center">Conversation ✉️</h2>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <Message sender={message.sender} content={message.content} />
          {index !== messages.length - 1 && <div style={{ marginBottom: "10px" }}></div>}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Conversation;