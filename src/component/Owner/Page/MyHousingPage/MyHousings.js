import React, { useEffect, useState } from 'react'
import HousingCard from './Card/HousingCard'
import HousingDetail from './Detail/HousingDetail'
import axios from 'axios';
import { Alert, Spinner, Modal } from 'react-bootstrap';
import UpdateHousing from './FormUpdate/UpdateHousing';

const MyHousings = () => {

    const [selectedHousing, setSelectedHousing] = useState();
    const [housings, setHousings] = useState([])
    const [noHousing, setNoHousing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    async function getHousings() {
        setIsLoading(true)
        const result = await axios.get(`http://localhost:5000/housing/${localStorage.getItem('ownerId')}`)
        setHousings(result.data)
        setIsLoading(false)
        if (result.data.length === 0) {
            setNoHousing(true)
        }
    }

    useEffect(() => {
        getHousings()
    }, [setSelectedHousing, selectedHousing, isEditing])


    return (
        <div>
            {noHousing && <Alert className='my-5' variant="primary">You don't have any housing </Alert>}
            {isLoading && <Spinner animation="border" variant="primary" />}
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

                <div style={{ width: "400px", position: "fixed", right: "600px" }}>
                    {selectedHousing && <HousingDetail housing={selectedHousing} setIsEditing={setIsEditing}/>}
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

export default MyHousings