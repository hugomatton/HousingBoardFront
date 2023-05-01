import React, { useEffect, useState } from 'react'
import HousingCard from '../../Shared/HousingCard/HousingCard'
import HousingDetail from '../../Shared/HousingDetail/HousingDetail'
import axios from 'axios';

const MyHousings = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [housings, setHousings] = useState([])

    async function getHousings(){
        const result = await axios.get(`http://localhost:5000/housing/${localStorage.getItem('ownerId')}`)
        console.log(result.data)
        setHousings(result.data)
    }

    useEffect(()=>{
        getHousings()
    },[])

    function handleShowDetails() {
        setShowDetails(!showDetails);
    }

    return (

        <div className="d-flex">
            {housings.map(
                (housing) => {
                    return(
                        <div key={housing.housing_id}>
                            <HousingCard housing={housing} showDetails={showDetails} onShowDetails={handleShowDetails}></HousingCard>
                        </div>
                    )  
                }
            )}
            {showDetails && <HousingDetail />}
        </div>

    )
}

export default MyHousings