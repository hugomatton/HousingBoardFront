import React, { useState } from 'react'
import HousingCard from '../../Shared/HousingCard/HousingCard'
import HousingDetail from '../../Shared/HousingDetail/HousingDetail'

const MyHousings = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [housings, setHousings] = useState([])

    

    function handleShowDetails() {
        setShowDetails(!showDetails);
    }

    return (

        <div className="d-flex">
            <HousingCard showDetails={showDetails} onShowDetails={handleShowDetails}></HousingCard>
            {showDetails && <HousingDetail />}
        </div>

    )
}

export default MyHousings