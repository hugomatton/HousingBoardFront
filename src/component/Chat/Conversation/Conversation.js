import React from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message/Message";
import FromChat from "./FormChat/FormChat";
import FormChat from "./FormChat/FormChat";

const Conversation = () => {
  const messages = [
    { sender: "Owner", content: "Hi !" },
    { sender: "Student", content: "Hello !" },
    { sender: "Student", content: "Is your housing still available ?" }
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
      <div style={{ marginBottom: "20px" }}></div>
      <FormChat/>
    </Container>
  );
};

export default Conversation;