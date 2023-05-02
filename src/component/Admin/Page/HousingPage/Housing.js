import React, { useEffect, useState } from 'react'
import HousingCard from './Card/HousingCard'
import HousingDetail from './Detail/HousingDetail'
import axios from 'axios';
import { Alert, Modal } from 'react-bootstrap';
import UpdateHousing from '../../../Owner/Page/MyHousingPage/FormUpdate/UpdateHousing';

const Housing = () => {

    const [selectedHousing, setSelectedHousing] = useState();
    const [housings, setHousings] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    async function getHousings() {
        const result = await axios.get(`http://localhost:5000/housing`)
        console.log(result.data)
        setHousings(result.data)
    }

    useEffect(() => {
        getHousings()
    }, [setSelectedHousing, selectedHousing, isEditing])

    return (
        <div>
            {housings.length === 0 && <Alert className='my-5' variant="primary">There are no housings </Alert>}
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

                <div style={{ width: "65%", position: "fixed", right: "0%" }}>
                    {selectedHousing && <HousingDetail housing={selectedHousing} setSelectedHousing={setSelectedHousing} setIsEditing={setIsEditing}/>}
                </div>
                <Modal
                    show={isEditing}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton onClick={()=>{setIsEditing(false)}}>
                        <Modal.Title id="contained-modal-title-vcenter">
                        🏠 Update Housing 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UpdateHousing housing={selectedHousing} setIsEditing={setIsEditing}></UpdateHousing>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Housing