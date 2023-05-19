import React, { useEffect, useState } from "react";
import ListChat from "./ListChat/ListChat";
import axios from "axios";
import { Row, Col, Spinner, Card } from "react-bootstrap";
import Conversation from "./Conversation/Conversation";

const Chat = ({ forStudent }) => {
  const studentId = localStorage.getItem("studentId");
  const ownerId = localStorage.getItem("ownerId");

  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState();

  const getConversations = async function () {
    setIsLoading(true);
    try {
      if (forStudent) {
        const result = await axios.get(
          `http://localhost:5000/message/allConversationStudent?student_id=${studentId}`
        );
        setConversations(result.data);
      } else {
        const result = await axios.get(
          `http://localhost:5000/message/allConversationOwner?owner_id=${ownerId}`
        );
        setConversations(result.data);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getConversations();
  }, []);

  return (
    <div>
      <Row className="mt-2">
        <Col xs={3}>
          <Card>
            <Card.Body>
              {isLoading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <ListChat
                  conversations={conversations}
                  setSelectedConversation={setSelectedConversation}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={9}>
          <Card>
            <Card.Body>
              {selectedConversation ? (
                <Conversation
                  conversation={selectedConversation}
                  studentId={studentId}
                  ownerId={ownerId}
                  forStudent={forStudent}
                />
              ) : (
                <div className="text-center">Select a conversation to view messages</div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Chat;