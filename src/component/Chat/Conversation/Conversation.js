import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message/Message";
import axios from "axios";
import FormChat from "./FormChat/FormChat";

const Conversation = ({ conversation, studentId, ownerId, forStudent }) => {
  const [messages, setMessages] = useState([]);

  const getConversation = async function () {
    if (forStudent) {
      const result = await axios.get(
        `http://localhost:5000/message/conversation?owner_id=${conversation[1]}&student_id=${studentId}`
      );
      setMessages(result.data);
    } else {
      const result = await axios.get(
        `http://localhost:5000/message/conversation?owner_id=${ownerId}&student_id=${conversation[0]}`
      );
      console.log(result);
      setMessages(result.data);
    }
  };

  useEffect(() => {
    getConversation();
  }, [conversation]);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h3 className="mb-4 text-center">{conversation[0]}</h3>
      <div
        style={{
          flex: "1 1 auto",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
          marginBottom: "1rem",
        }}
      >
        <style>
          {`
            ::-webkit-scrollbar {
              width: 6px;
            }

            ::-webkit-scrollbar-track {
              background-color: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background-color: transparent;
            }
          `}
        </style>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <Message message={message} studentId={studentId} />
            {index !== messages.length - 1 && (
              <div style={{ marginBottom: "0.5rem" }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <FormChat
        forStudent={forStudent}
        receiverId={forStudent ? conversation[1] : conversation[0]}
        getConversation={getConversation}
      />
    </Container>
  );
};

export default Conversation;