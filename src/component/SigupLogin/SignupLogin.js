import React, { useState } from 'react'
import FormStudent from './Form/FormStudent'
import FormOwner from './Form/FormOwner'
import FormAdmin from './Form/FormAdmin'
import NavbarRole from './NavabarRole/NavbarRole'

const SignupLogin = () => {

    const [choice, setChoice] = useState("student")

    return (
        <div>
            <NavbarRole setChoice={setChoice}></NavbarRole>
            { choice === "student" && <FormStudent></FormStudent>}
            { choice === "owner" && <FormOwner></FormOwner>}
            { choice === "admin" && <FormAdmin></FormAdmin>}
        </div>
    )
}

export default SignupLogin