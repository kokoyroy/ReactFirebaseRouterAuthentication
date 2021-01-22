import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'




class Dashboard extends Component {








    render() {
        if (this.props.user.email) { console.log(this.props.user) }


        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6"><ProjectList /></div>
                    <div className="col s12 m5 offset-m1"><Notifications /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.proj.projects,
        user: state.auth.user
    }
}




export default connect(mapStateToProps)(Dashboard); 
