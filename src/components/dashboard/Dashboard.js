import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'




class Dashboard extends Component {
    render() {
        console.log('log the props');
        console.log(this.props.projects);
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
        projects: state.proj.projects
    }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(Dashboard); 