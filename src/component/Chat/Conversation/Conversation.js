import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message/Message";
import axios from "axios";
import FormChat from "./FormChat/FormChat";

const Conversation = ({ conversation, studentId, ownerId, forStudent }) => {

  const [messages, setMessages] = useState([])


  const getConversation = async function () {
    if (forStudent) {
      const result = await axios.get(`http://localhost:5000/message/conversation?owner_id=${conversation[1]}&student_id=${studentId}`)
      setMessages(result.data)
    }
    else{
      const result = await axios.get(`http://localhost:5000/message/conversation?owner_id=${ownerId}&student_id=${conversation[0]}`)
      console.log(result)
      setMessages(result.data)
    }
  }

  useEffect(() => {
    getConversation()
  }, [conversation])

  return (
    <Container>
      <h3 className="my-4 text-center">{conversation[0]}</h3>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <Message message={message} studentId={studentId} />
          {index !== messages.length - 1 && <div style={{ marginBottom: "10px" }}></div>}
        </React.Fragment>
      ))}
      <div style={{ marginBottom: "20px" }}></div>
      <FormChat 
        forStudent={forStudent} 
        receiverId={forStudent ? conversation[1] : conversation[0]} 
        getConversation={getConversation} 
      />
    </Container>
  );
};

export default Conversation;