import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Message = ({ sender, content }) => {
  const isOwner = sender === "Owner";
  const messageStyle = {backgroundColor: isOwner ? "#F8F9FA" : "#cccccc"};
  const textVariant = isOwner ? "gray" : "black";
  const placeVariant = isOwner ? "text-end" : "text-start";

  return (
    <Container>
      <Card body className={placeVariant} style={messageStyle} text={textVariant}>
        <strong>{sender}:</strong> {content}
      </Card>
    </Container>
  );
};

export default Message;