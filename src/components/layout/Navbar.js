import React from 'react'
import {  Link } from 'react-router-dom';
import SignedInSidebar from './SignedInSidebar';
import SignedLinks from './SignedLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedOutSidebar from './SignedOutSidebar';

function Navbar() {
    return (
        <>
            <nav className='nav-wrapper blue darken-2'>
                <div className="container">
                    
                    {/* Logo */}
                    <Link to="/" className="brand-logo left">Logo</Link>
                    
                    {/* button for the sidebar! */}
                    <Link to='' data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
                    
                    
                    {/* links for the full view */}
                    <SignedLinks />
                    <SignedOutLinks />


                </div>
            </nav>
            {/* the Sidebar! */}
            <ul className="sidenav" id="mobile-demo">
                <SignedInSidebar />
                <SignedOutSidebar />

            </ul>
        </>
    )
}

export default Navbar
