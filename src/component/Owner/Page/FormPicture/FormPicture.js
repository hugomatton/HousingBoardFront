import React, { useState } from 'react'
import { Button, Form, Row, Col, Card } from 'react-bootstrap'

const FormPicture = ({ setHousingPictures }) => {

    const [pictures, setPictures] = useState([])
    const [url, setUrl] = useState([])

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

    const onDeletePicture = (url) => {
        let newPictures = [...pictures]
        const index = newPictures.indexOf(url);
        if (index !== -1) {
            newPictures.splice(index, 1);
        }
        setPictures(newPictures)
        setHousingPictures(newPictures)
    }

    return (
        <div>
            <Form.Label>Url image :</Form.Label>
            <Row className='mb-3'>
                <Col xs={10}>
                    <Form.Control placeholder='http://url_image' type="text" value={url} onChange={handleUrlChange} />
                </Col>
                <Col xs={2} className="d-flex align-items-center justify-content-end">
                    <Button onClick={onAddPicture}>Add</Button>
                </Col>
            </Row>
            <Row>
                {pictures.map(
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

export default FormPicture