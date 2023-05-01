import React, { useEffect, useState } from 'react'
import HousingCard from './Card/HousingCard'
import HousingDetail from './Detail/HousingDetail'
import axios from 'axios';

const Housing = () => {

    const [selectedHousing, setSelectedHousing] = useState();
    const [housings, setHousings] = useState([])

    async function getHousings() {
        const result = await axios.get(`http://localhost:5000/housing`)
        console.log(result.data)
        setHousings(result.data)
    }

    useEffect(() => {
        getHousings()
    }, [])

    return (

        <div style={{display: "flex"}}>
            <div style={{flex: "1"}}>
                {housings.map((housing) => {
                    return (
                        <div key={housing.housing_id} className="mb-3">
                            <HousingCard housing={housing} setSelectedHousing={setSelectedHousing}></HousingCard>
                        </div>
                    )
                })}
            </div>

            <div style={{width: "400px", position: "fixed", right: "600px"}}>
                {selectedHousing && <HousingDetail housing={selectedHousing}/>}
            </div>

        </div>


    )
}

export default Housing
