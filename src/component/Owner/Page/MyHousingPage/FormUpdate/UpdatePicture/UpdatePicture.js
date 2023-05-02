import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col, Card } from 'react-bootstrap'

const UpdatePicture = ({ setHousingPictures, housingPictures }) => {

    const [pictures, setPictures] = useState([])
    const [url, setUrl] = useState('')

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const onAddPicture = () => {
        let newData = [...pictures]
        newData.push(url)
        setPictures(newData)
        setUrl('')
        setHousingPictures(newData)
    }

    const onDeletePicture = (picture) => {
        let newPictures = [...housingPictures]
        const index = newPictures.indexOf(picture);
        if (index !== -1) {
            newPictures.splice(index, 1);
        }
        setPictures(newPictures)
        setHousingPictures(newPictures)
    }

    useEffect(()=>{
    }, [housingPictures])

    return (
        <div>
            <Form.Label>Url image :</Form.Label>
            <Row className='mb-3'>
                <Col xs={10}>
                    <Form.Control style={{ backgroundColor: '#EAEAEA' }} placeholder='http://url_image' type="text" value={url} onChange={handleUrlChange} />
                </Col>
                <Col xs={2} className="d-flex align-items-center justify-content-end">
                    <Button variant="dark" onClick={onAddPicture} disabled={!url}>Add</Button>
                </Col>
            </Row>
            <Row>
                {housingPictures.map(
                    (picture) => {
                        return (
                            <Col key={picture}>
                                <Card>
                                    <Card.Img variant="top" src={picture} />
                                    <Button variant="link" onClick={()=>{onDeletePicture(picture)}}>Delete</Button>
                                </Card>
                            </Col>
                        )
                    }
                )
                }
            </Row>
        </div>
    )
}

export default UpdatePicture