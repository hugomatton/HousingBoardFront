import React, { useEffect, useState } from "react";
import HousingCard from "./Card/HousingCard";
import HousingDetail from "./Detail/HousingDetail";
import axios from "axios";
import { Alert, Spinner } from 'react-bootstrap';

const Housing = () => {
  const [selectedHousing, setSelectedHousing] = useState();
  const [housings, setHousings] = useState([]);
  const [noHousing, setNoHousing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function getHousings() {
    setIsLoading(true)
    const result = await axios.get(`http://localhost:5000/housing`)
    setHousings(result.data)
    setIsLoading(false)
    if (result.data.length === 0) {
        setNoHousing(true)
    }
}

  useEffect(() => {
    getHousings();
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div style={{ margin: 'auto', width: '100%' }}>
        {noHousing && <Alert className='my-5' variant="primary">There are no housings </Alert>}
        <div className="d-flex justify-content-center align-items-center">
          {isLoading && <Spinner className='my-5' animation="border" variant="primary" />}
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            {housings.map((housing) => {
              return (
                <div key={housing.housing_id} className="mb-3">
                  <HousingCard housing={housing} setSelectedHousing={setSelectedHousing}></HousingCard>
                </div>
              );
            })}
          </div>
          <div style={{ width: "65%", position: "fixed", right: "0%" }}>
            {selectedHousing && <HousingDetail housing={selectedHousing} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Housing;