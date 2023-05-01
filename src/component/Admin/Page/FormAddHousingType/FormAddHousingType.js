import React, { useState } from 'react';
import { Card, Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const FormAddHousingType = ({ getHousingType }) => {

  const [housingTypeData, setHousingTypeData] = useState({
    type_name: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    let newData = { ...housingTypeData };
    newData[event.target.id] = event.target.value;
    setHousingTypeData(newData);
  };

  const onSubmit = async () => {
    const data = { ...housingTypeData };
    try {
      await axios.post('http://localhost:5000/housingtypes', data);
      setHousingTypeData({
        type_name: '',
      });
      setError(false);
      getHousingType();
    } catch (error) {
      setError(true);
      setErrorMessage("Something wrong happened");
    }
  };

  return (
    <div>
      <h2 className="my-4 text-center">Housing Types 🏠</h2>
      <Card className="my-2 p-4 ">
        <Form>
          <Form.Group className="mb-3">
            <h4>New housing type</h4>
            <Form.Control
              type="text"
              placeholder="Enter new type here"
              id="type_name"
              value={housingTypeData.type_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="button" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
        {error && (<Alert variant="danger" className="my-2">{errorMessage}</Alert>)}
      </Card>
    </div>
  );
};

export default FormAddHousingType;