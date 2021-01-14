import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to='/signup' >Signup</NavLink>
            </li>
            <li>
                <NavLink to='/signin' >Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks
