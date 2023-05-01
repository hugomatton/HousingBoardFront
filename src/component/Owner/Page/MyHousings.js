import React, { useEffect, useState } from 'react'
import HousingCard from '../../Shared/HousingCard/HousingCard'
import HousingDetail from '../../Shared/HousingDetail/HousingDetail'
import axios from 'axios';

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
    }, [])



    return (

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
                {selectedHousing && <HousingDetail housing={selectedHousing}/>}
            </div>

        </div>


    )
}

export default MyHousings