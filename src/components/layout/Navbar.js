import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInSidebar from './SignedInSidebar';
import SignedLinks from './SignedLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedOutSidebar from './SignedOutSidebar';

function Navbar(props) {
    return (
        <>
            <nav className='nav-wrapper blue darken-2'>
                <div className="container">

                    {/* Logo */}
                    <Link to="/" className="brand-logo left">Logo</Link>

                    {/* button for the sidebar! */}
                    <Link to='#' data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>


                    {/* links for the full view */}
                    {props.user.email ? <SignedLinks /> : <SignedOutLinks />}
                    {/* {!this.props.user.email && } */}


                </div>
            </nav>
            {/* the Sidebar! */}
            <ul className="sidenav" id="mobile-demo">
                {props.user.email ? <SignedInSidebar /> : < SignedOutSidebar />}
                {/* {!this.props.user.email && } */}

            </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})


export default connect(mapStateToProps)(Navbar)
