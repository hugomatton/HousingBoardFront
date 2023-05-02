import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Form, Row, Col, Button, Alert, Spinner } from 'react-bootstrap'
import FormPicture from './FormPicture/FormPicture'

const FormHousing = ({setPage}) => {

    const [housingData, setHousingData] = useState({
        housing_address: "",
        bedrooms_nb: 1,
        bathrooms_nb: 1,
        area: 100,
        monthly_rent: 1000,
        lease_duration: 10,
        furnished: "1",
        type_name: "Studio",
        owner_id: localStorage.getItem('ownerId'),
      })

    const [typeOptions, setTypeOptions] = useState([])

    const [housingPictures, setHousingPictures] = useState([])

    const [error, setError] = useState(false)

    const [isSubmiting, setIsSubmiting] = useState(false)

    const getHousingType = async ()=>{
        const result = await axios.get('http://localhost:5000/housingtypes')
        setTypeOptions( result.data.rows)
    }

    useEffect(()=>{
        getHousingType()
    },[])

    const handleChange = (event) => {
        let newData = { ...housingData }
        newData[event.target.id] = event.target.value
        setHousingData(newData)
    }

    const onSubmit = async () => {
        const data = {...housingData, pictures: housingPictures}
        try {
            setIsSubmiting(true)
            const result = await axios.post('http://localhost:5000/housing', data)
            setIsSubmiting(false)
            setPage('myHousings')
        } catch (error) {
            setIsSubmiting(false)
            setError(true)
        }
    }

    return (
        <div>
            <h2 className="my-4 text-center">New Housing 🏠</h2>
            <Card className='my-2 p-4 '>
                <Form>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
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
                                        checked={housingData.furnished === "1"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="furnishedRadios"
                                        value="0"
                                        id="furnished"
                                        checked={housingData.furnished === "0"}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Housing type :</Form.Label>
                                <Form.Select id="type_name" value={housingData.type_name} onChange={handleChange}>
                                    {typeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <FormPicture setHousingPictures={setHousingPictures}/>

                    <Button type="button" onClick={onSubmit}>Submit</Button>
                    {isSubmiting && <Spinner animation="grow" variant="primary" />}
                </Form>
                {error && <Alert variant='danger' className='mt-3'>Something wrong happened</Alert>}
            </Card>
        </div>
    )
}

export default FormHousing