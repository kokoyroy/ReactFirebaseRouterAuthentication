import React from 'react'
import { NavLink } from 'react-router-dom';

function SignedOutSidebar() {
    return (
        <>
            <li>
                <NavLink to='/signup' >Signup</NavLink>
            </li>
            <li>
                <NavLink to='/signin' >Login</NavLink>
            </li>
        </>
    )
}

export default SignedOutSidebar
