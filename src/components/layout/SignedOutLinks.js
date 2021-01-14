import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to='/' >Signup</NavLink>
            </li>
            <li>
                <NavLink to='/Signin' >Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks
