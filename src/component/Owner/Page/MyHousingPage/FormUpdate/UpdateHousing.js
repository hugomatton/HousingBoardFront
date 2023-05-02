import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Form, Row, Col, Button, Alert, Spinner } from 'react-bootstrap'
import UpdatePicture from './UpdatePicture/UpdatePicture'

const UpdateHousing = ({ housing, setIsEditing }) => {

    const [housingData, setHousingData] = useState({
        housing_address: housing.housing_address,
        bedrooms_nb: housing.bedrooms_nb,
        bathrooms_nb: housing.bathrooms_nb,
        area: housing.area,
        monthly_rent: housing.monthly_rent,
        lease_duration: housing.lease_duration,
        furnished: housing.furnished,
        type_name: housing.type_name,
        owner_id: housing.owner_id,
    })
    const [housingPictures, setHousingPictures] = useState(housing.pictures)

    const [error, setError] = useState(false)
    const [typeOptions, setTypeOptions] = useState([])
    const [isSubmiting, setIsSubmiting] = useState(false)

    const getHousingType = async () => {
        const result = await axios.get('http://localhost:5000/housingtypes')
        setTypeOptions(result.data.rows)
    }

    useEffect(() => {
        getHousingType()
    }, [])

    const handleChange = (event) => {
        let newData = { ...housingData }
        newData[event.target.id] = event.target.value
        setHousingData(newData)
    }

    const onSubmit = async () => {
        const data = { ...housingData, pictures: housingPictures, housing_id: housing.housing_id }
        try {
            setIsSubmiting(true)
            await axios.put('http://localhost:5000/housing', data)
            setIsSubmiting(false)
            setIsEditing(false)
        } catch (error) {
            console.log(error)
            setIsSubmiting(false)
            setError(true)
        }
    }

    return (
        <Card className='my-2 p-4 bg-light'>
            <Form>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        style={{ backgroundColor: '#EAEAEA' }}
                        type='text'
                        placeholder='Enter address here'
                        id="housing_address"
                        value={housingData.housing_address}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Row className='mb-3'>
                    <Col>
                        <Form.Group>
                            <Form.Label>Habitable surface</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: '#EAEAEA' }}
                                type='number'
                                id="area"
                                value={housingData.area}
                                onChange={handleChange}
                                min={1}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Bedrooms</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: '#EAEAEA' }}
                                type='number'
                                id="bedrooms_nb"
                                value={housingData.bedrooms_nb}
                                onChange={handleChange}
                                min={1}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Bathrooms</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: '#EAEAEA' }}
                                type='number'
                                id="bathrooms_nb"
                                value={housingData.bathrooms_nb}
                                onChange={handleChange}
                                min={1}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col>
                        <Form.Group>
                            <Form.Label>Monthly rent</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: '#EAEAEA' }}
                                type='number'
                                id="monthly_rent"
                                value={housingData.monthly_rent}
                                onChange={handleChange}
                                min={1}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Lease duration (month)</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: '#EAEAEA' }}
                                type='number'
                                id="lease_duration"
                                value={housingData.lease_duration}
                                onChange={handleChange}
                                min={1}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mb-3'>
                    <Col>
                        <Form.Group >
                            <Form.Label>Furnished :</Form.Label>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="furnishedRadios"
                                    value="1"
                                    id="furnished"
                                    checked={housingData.furnished.toString() === "1"}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="furnishedRadios"
                                    value="0"
                                    id="furnished"
                                    checked={housingData.furnished.toString() === "0"}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Housing type :</Form.Label>
                            <Form.Select style={{ backgroundColor: '#EAEAEA' }} id="type_name" value={housingData.type_name} onChange={handleChange}>
                                {typeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <UpdatePicture setHousingPictures={setHousingPictures} housingPictures={housingPictures} />

                <Button className='my-3' variant="dark" type="button" onClick={onSubmit}>Submit</Button>
                {isSubmiting && <Spinner animation="grow" variant="primary" />}
            </Form>
            {error && <Alert variant='danger' className='mt-3'>Something wrong happened</Alert>}
        </Card>
    )
}

export default UpdateHousing