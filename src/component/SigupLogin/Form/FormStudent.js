import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const FormStudent = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div>
            {
                isLogin ? <p>form login</p> : <p>form register</p>
            }
            <Button variant='link' onClick={()=>{setIsLogin(!isLogin)}}>{isLogin ? "Don't have an account" : "Already have an account"}</Button>
        </div>
    )
}

export default FormStudent