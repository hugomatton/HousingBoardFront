import React, { useState, useRef, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Navbar, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const MessageForm = ({receiverId, getConversation}) => {
  const [message, setMessage] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() => {
    adjustTextAreaHeight();
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    adjustTextAreaHeight();
  };

  const adjustTextAreaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.overflowY = 'hidden';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message)
    await axios.post(
      'http://localhost:5000/message/studentToOwner',
      {
        content: message,
        studentSendId: localStorage.getItem('studentId'),
        ownerReceiveId: receiverId
      }
    )
    setMessage('');
    adjustTextAreaHeight();
    getConversation()
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            as="textarea"
            placeholder="Write your message..."
            value={message}
            onChange={handleInputChange}
            aria-label="Message"
            ref={textAreaRef}
            style={{ resize: 'none', overflowY: 'hidden' }}
            rows={1}
          />
        </InputGroup>
      </form>
      <Button onClick={handleSubmit} variant="primary" type="submit" style={{ alignSelf: 'flex-end' }}>
        Send
      </Button>
    </div>
  );
};

export default MessageForm;