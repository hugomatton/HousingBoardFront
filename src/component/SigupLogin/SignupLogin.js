import React, { useState } from 'react'
import FormStudent from './Form/FormStudent'
import FormOwner from './Form/FormOwner'
import FormAdmin from './Form/FormAdmin'
import NavbarRole from './NavabarRole/NavbarRole'
import { Container } from 'react-bootstrap'

const SignupLogin = () => {

    const [choice, setChoice] = useState("student")

    return (
        <div>
            <Container>
                <h1 className="text-center w-50 mx-auto p-3 my-0 text-primary">Housing Board</h1>
                <NavbarRole setChoice={setChoice}></NavbarRole>
                { choice === "student" && <FormStudent></FormStudent>}
                { choice === "owner" && <FormOwner></FormOwner>}
                { choice === "admin" && <FormAdmin></FormAdmin>}
            </Container>
        </div>
        
    )
}

export default SignupLogin