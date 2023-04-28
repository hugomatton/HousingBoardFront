import React, { useState } from 'react'
import FormStudent from './Form/FormStudent'
import NavbarRole from './NavabarRole/NavbarRole'

const SignupLogin = () => {

    const [choice, setChoice] = useState("student")

    return (
        <div>
            <NavbarRole setChoice={setChoice}></NavbarRole>
            { choice === "student" && <FormStudent></FormStudent>}
            { choice === "owner" && <h2>Owner form</h2>}
            { choice === "admin" && <h2>Admin form</h2>}
        </div>
    )
}

export default SignupLogin