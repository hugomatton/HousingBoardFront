import React, { useState } from "react";
import { Card, Button, Alert, ListGroup } from "react-bootstrap";
import axios from "axios";

const ListDeleteHousingType = ({ typeOptions, getHousingType }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeCell, setActiveCell] = useState(null);

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
        <ListGroup>
          {typeOptions.map((type) => (
            <ListGroup.Item
              key={type}
              className="list-group-item d-flex justify-content-between align-items-center"
              onMouseEnter={() => setActiveCell(type)}
              onMouseLeave={() => setActiveCell(null)}
              style={{backgroundColor: activeCell === type ? '#f2f2f2' : 'white',transition: 'background-color 0.5s ease'}}
            >
              {type}
              <Button
                type="button"
                variant="danger"
                className="float-right"
                onClick={() => onDelete(type)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ListDeleteHousingType;