import React, { useEffect, useState } from 'react'
import HousingCard from './Card/HousingCard'
import HousingDetail from './Detail/HousingDetail'
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const MyHousings = () => {

    const [selectedHousing, setSelectedHousing] = useState();
    const [housings, setHousings] = useState([])

    async function getHousings() {
        const result = await axios.get(`http://localhost:5000/housing/${localStorage.getItem('ownerId')}`)
        console.log(result.data)
        setHousings(result.data)
    }

    useEffect(() => {
        getHousings()
    }, [setSelectedHousing, selectedHousing])



    return (
        <div>
            {housings.length === 0 && <Alert className='my-5' variant="primary">You don't have any housing </Alert>}
            <div className="d-flex">
                <div className="flex-grow-1 d-flex flex-column">
                    {housings.map((housing) => {
                        return (
                            <div key={housing.housing_id} className="mb-3">
                                <HousingCard housing={housing} setSelectedHousing={setSelectedHousing}></HousingCard>
                            </div>
                        )
                    })}
                </div>

                <div className="flex-grow-1">
                    {selectedHousing && <HousingDetail housing={selectedHousing} setSelectedHousing={setSelectedHousing} />}
                </div>

            </div>
        </div>
    )
}

export default MyHousings