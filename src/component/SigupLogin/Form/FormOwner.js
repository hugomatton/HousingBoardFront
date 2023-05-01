import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormOwner = () => {

    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState(false)

    const [signupData, setSignupData] = useState({
        owner_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    })

    const [loginData, setLoginData] = useState({
        owner_id:"",
        password: ""
    })

    async function signup () {
        try {
            const result = await axios.post('http://localhost:5000/owner/signup', signupData)
            if(result.status === 201){
                localStorage.setItem('ownerId', signupData.owner_id)
                navigate('/owner')
            }
        } catch (error) {
            setError(true)
        }  
    }

    async function login () {
        try {
            const result = await axios.post('http://localhost:5000/owner/login', loginData)
            if(result.status === 200){
                navigate('/owner')
                localStorage.setItem('ownerId',loginData.owner_id)
            }
        } catch (error) {
            setError(true)
        }
    }

    const handleChangeLogin = (event) => {
        let newData = { ...loginData }
        newData[event.target.id] = event.target.value
        setLoginData(newData)
    }

    const handleChangeSignup = (event) => {
        let newData = { ...signupData }
        newData[event.target.id] = event.target.value
        setSignupData(newData)
    }

    return (
        <div className='w-50 mx-auto'>
            {
                isLogin ?
                    <div>
                        <h2 className="my-4 text-center">Owner Login</h2>
                        <Card className='my-2 p-3'>
                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label>Owner ID</Form.Label>
                                    <Form.Control
                                        id="owner_id"
                                        type="text"
                                        placeholder="Enter owner ID"
                                        value={loginData.owner_id}
                                        onChange={handleChangeLogin}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={loginData.password}
                                        onChange={handleChangeLogin}
                                    />
                                </Form.Group>

                                <Button type="button" onClick={login}>Login</Button>
                                <Button variant='link' onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? "Don't have an account" : "Already have an account"}</Button>

                            </Form>
                        </Card>
                    </div>
                    :
                    <div>
                        <h2 className="my-4 text-center">Owner Registration</h2>
                        <Card className='my-2 p-3'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Owner ID</Form.Label>
                                    <Form.Control
                                        id="owner_id"
                                        type="text"
                                        placeholder="Enter owner ID"
                                        value={signupData.owner_id}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={signupData.password}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        id="first_name"
                                        type="text"
                                        placeholder="Enter first name"
                                        value={signupData.first_name}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        id="last_name"
                                        type="text"
                                        placeholder="Enter last name"
                                        value={signupData.last_name}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={signupData.email}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        id="phone_number"
                                        type="tel"
                                        placeholder="Enter phone number"
                                        value={signupData.phone_number}
                                        onChange={handleChangeSignup}
                                    />
                                </Form.Group>

                                <Button type="button" onClick={signup}>Signup</Button>
                                <Button variant='link' onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? "Don't have an account" : "Already have an account"}</Button>
                            </Form>
                        </Card>
                    </div>
            }
            {error && <Alert variant='danger'>Something wrong happened</Alert>}
        </div>
    )
}

export default FormOwner