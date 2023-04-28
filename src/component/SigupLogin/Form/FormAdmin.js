import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const FormAdmin = () => {

    const [isLogin, setIsLogin] = useState(true)

    const [signupData, setSignupData] = useState({
        admin_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    })

    const [loginData, setLoginData] = useState({
        admin_id:"",
        password: ""
    })

    const signup = () => {
        console.log(signupData)
    }

    const login = () => {
        console.log(loginData)
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
        <div>
            {
                isLogin ?
                    <div>
                        <h2 className="my-4 text-center">Admin Login</h2>
                        <Card className='my-2 p-3 w-50 mx-auto'>
                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label>Admin ID</Form.Label>
                                    <Form.Control
                                        id="admin_id"
                                        type="text"
                                        placeholder="Enter admin ID"
                                        value={loginData.admin_id}
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
                        <h2 className="my-4 text-center">Admin Registration</h2>
                        <Card className='my-2 p-3 w-50 mx-auto'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Admin ID</Form.Label>
                                    <Form.Control
                                        id="admin_id"
                                        type="text"
                                        placeholder="Enter admin ID"
                                        value={signupData.admin_id}
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

        </div>
    )
}

export default FormAdmin