import React from 'react'
import { NavLink } from 'react-router-dom';

function SignedOutSidebar() {
    return (
        <>
            <li>
                <NavLink to='/' >Signup</NavLink>
            </li>
            <li>
                <NavLink to='/' >Login</NavLink>
            </li>
        </>
    )
}

export default SignedOutSidebar
