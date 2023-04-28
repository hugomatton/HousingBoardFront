import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const FormStudent = () => {

    const [isLogin, setIsLogin] = useState(true)

    const [signupData, setSignupData] = useState({
        student_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        university: "",
        password: ""
    })

    const [loginData, setLoginData] = useState({
        student_id:"",
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
                        <h2 className="my-4 text-center">Student Login</h2>
                        <Card className='my-2 p-3 w-50 mx-auto'>
                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control
                                        id="student_id"
                                        type="text"
                                        placeholder="Enter student ID"
                                        value={loginData.student_id}
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
                        <h2 className="my-4 text-center">Student Registration</h2>
                        <Card className='my-2 p-3 w-50 mx-auto'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control
                                        id="student_id"
                                        type="text"
                                        placeholder="Enter student ID"
                                        value={signupData.student_id}
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

                                <Form.Group className="mb-3">
                                    <Form.Label>University</Form.Label>
                                    <Form.Control
                                        id="university"
                                        type="text"
                                        placeholder="Enter university"
                                        value={signupData.university}
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

export default FormStudent