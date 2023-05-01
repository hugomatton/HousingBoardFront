import React, { useState } from 'react';
import { Card, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const ListDeleteHousingType = ({ typeOptions, getHousingType }) => {

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onDelete = async (type_name) => {
    try {
      await axios
        .delete(`http://localhost:5000/housingtypes/${type_name}`)
        .then(() => {
          getHousingType();
        });
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMessage("Something wrong happened");
    }
  };

  return (
    <div>
      <Card className="my-2 p-4 ">
        <h4>List of Housing Types</h4>
        {error && (<Alert variant="danger" className="my-2">{errorMessage}</Alert>)}
        <ul>
          {typeOptions.map((type) => (
            <li key={type}>
              {type}
              <Button
                type="button"
                variant="link"
                style={{ marginLeft: "20px" }}
                onClick={() => onDelete(type)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ListDeleteHousingType;