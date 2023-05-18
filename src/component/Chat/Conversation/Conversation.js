import React from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message/Message";
import axios from "axios";
import FromChat from "./FormChat/FormChat";
import FormChat from "./FormChat/FormChat";

const Conversation = ({conversation, studentId}) => {
  const messages = [
    { sender: "Owner", content: "Hi !" },
    { sender: "Student", content: "Hello !" },
    { sender: "Student", content: "Is your housing still available ?" }
  ];

  const getConversation =  async function(){
    await axios.get(`http://localhost:5000/message/conversation?owner_id=${owner_id}`)
  }

  return (
    <Container>
      <h3 className="my-4 text-center">{conversation[0]}</h3>
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