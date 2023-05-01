import React, { useEffect, useState } from 'react';
import { Alert } from "react-bootstrap";
import axios from 'axios';
import FormAddHousingType from "./FormAddHousingType/FormAddHousingType";
import ListDeleteHousingType from "./ListDeleteHousingType/ListDeleteHousingType";

const HandleHousingType = () => {
  const [typeOptions, setTypeOptions] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getHousingType = async () => {
    try {
      const result = await axios.get("http://localhost:5000/housingtypes");
      setTypeOptions(result.data.rows);
    } catch (error) {
      setError(true);
      setErrorMessage("Something wrong happened");
    }
  };

  useEffect(() => {
    getHousingType();
  }, []);
  
  return (
    <div>
      <FormAddHousingType getHousingType={getHousingType} />
      <ListDeleteHousingType typeOptions={typeOptions} getHousingType={getHousingType} />
      {error && (<Alert variant="danger" className="my-2">{errorMessage}</Alert>)}
    </div>
  );
};

export default HandleHousingType;