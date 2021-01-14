import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedLinks() {
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to='/' >New Project</NavLink>
            </li>
            <li>
                <NavLink to='/' >Logout</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1' >KK</NavLink>
            </li>
        </ul>
    )
}

export default SignedLinks
