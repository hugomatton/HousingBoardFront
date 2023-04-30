import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Form, Button } from 'react-bootstrap'

const FormHousingType = () => {

    const [housingTypeData, setHousingTypeData] = useState({
        type_name: "",
    })

    const [typeOptions, setTypeOptions] = useState([])

    const getHousingType = async ()=>{
        const result = await axios.get('http://localhost:5000/housingtypes')
        setTypeOptions( result.data.rows)
    }

    useEffect(()=>{
        getHousingType()
    },[])

    const handleChange = (event) => {
        let newData = { ...housingTypeData }
        newData[event.target.id] = event.target.value
        setHousingTypeData(newData)
    }

    const onSubmit = () => {
        const data = {...housingTypeData}
        axios.post('http://localhost:5000/housingtypes', data)
    }

    const onDelete = () => {
        const data = {...housingTypeData}
        axios.delete('http://localhost:5000/housingtypes', data)
    }

    return (
        <div>
            <h2 className="my-4 text-center">Housing Types 🏠</h2>
            <Card className='my-2 p-4 '>
                <Form>

                    <Form.Group className='mb-3'>
                        <Form.Label>New housing type</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter new type here'
                            id="type_name"
                            value={housingTypeData.type_name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="button" onClick={onSubmit}>Submit</Button>
                </Form>
            </Card>
            <Card className='my-2 p-4 '>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Delete Housing type</Form.Label>
                        <Form.Select id="type_name" value={housingTypeData.type_name} onChange={handleChange}>
                            {typeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Button type="button" onClick={onDelete}>Delete</Button>
                </Form>
            </Card>
        </div>
    )
}

export default FormHousingType