import React from 'react'
import { NavLink } from 'react-router-dom';

function SignedInSidebar() {
    return (
        <>
            <li>
                <NavLink to='/' >New Project</NavLink>
            </li>
            <li>
                <NavLink to='/' >Logout</NavLink>
            </li>
        </>
    )
}

export default SignedInSidebar
