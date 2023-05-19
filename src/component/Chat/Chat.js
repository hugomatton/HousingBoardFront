import React, { useEffect, useState } from 'react'
import ListChat from './ListChat/ListChat'
import axios from 'axios'
import { Row, Col, Spinner } from 'react-bootstrap'
import Conversation from './Conversation/Conversation'

const Chat = ({forStudent}) => {

    const studentId = localStorage.getItem('studentId')
    const ownerId = localStorage.getItem('ownerId')

    const [isLoading, setIsLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState();

    const getConversations = async function () {
        setIsLoading(true); // Définir isLoading à true avant de récupérer les conversations
        try {
            if(forStudent){
                const result = await axios.get(`http://localhost:5000/message/allConversationStudent?student_id=${studentId}`);
                setConversations(result.data);
            }
            else{
                const result = await axios.get(`http://localhost:5000/message/allConversationOwner?owner_id=${ownerId}`);
                setConversations(result.data);
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false); // Définir isLoading à false une fois que les conversations ont été récupérées
    };

    useEffect(() => {
        getConversations();
    }, []);

    return (
        <div>
            <Row>
                <Col xs={3}>
                    {isLoading ? (
                        <Spinner animation="border" variant="primary" />
                    ) : (
                        <ListChat conversations={conversations} setSelectedConversation={setSelectedConversation} />
                    )}
                </Col>
                <Col xs={9}>
                    {
                        selectedConversation && <Conversation 
                                                    conversation={selectedConversation} 
                                                    studentId={studentId} 
                                                    ownerId={ownerId}
                                                    forStudent={forStudent}
                                                />
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Chat;
