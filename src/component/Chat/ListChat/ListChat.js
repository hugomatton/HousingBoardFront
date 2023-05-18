import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const ListChat = ({ conversations, setSelectedConversation }) => {



    return (
        <div>
            <Container>
                <h3 className="my-4 text-center">Conversations</h3>
                <ListGroup as="ol" numbered>
                    {
                        conversations.map((conversation) => {
                            return (
                                <ListGroup.Item
                                    key={conversation[1]}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    onClick={()=>{setSelectedConversation(conversation)}}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{conversation[0]}</div>I am interested with your
                                        housing
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Container>
        </div>
    );
};

export default ListChat;