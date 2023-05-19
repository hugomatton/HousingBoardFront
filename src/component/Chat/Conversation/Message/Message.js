import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Message = ({ message, studentId }) => {
  const isOnRight = message[4] === studentId;
  const messageStyle = { backgroundColor: isOnRight ? "#EAECEE" : "#cccccc" };
  const textVariant = isOnRight ? "gray" : "black";
  const placeVariant = isOnRight ? "text-end" : "text-start";

  return (
    <Container>
      <Row>
        {isOnRight ? (
          <>
            <Col></Col>
            <Col>
              <Card body className={placeVariant} style={messageStyle} text={textVariant}>
                {message[2]}
              </Card>
            </Col>
          </>
        ) : (
          <>
            <Col>
              <Card body className={placeVariant} style={messageStyle} text={textVariant}>
                {message[2]}
              </Card>
            </Col>
            <Col></Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Message;